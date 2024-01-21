import { Todo } from './../../types/index'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { TodoEditParams, TodoAddParams } from '@/types'
import { getTodosAPI, addTodoAPI, editTodoAPI, deleteTodoAPI } from '@/api'

export const getTodoAsync = createAsyncThunk('todo/get', async () => {
  const responseData = await getTodosAPI()
  return responseData
})
export const addTodoAsync = createAsyncThunk('todo/create', async (todo: TodoAddParams) => {
  const responseData = await addTodoAPI(todo)
  return responseData
})

export const editTodoAsync = createAsyncThunk('todo/edit', async (todo: TodoEditParams) => {
  const responseData = await editTodoAPI(todo)
  return responseData
})

type TodosWithDeleteID = {
  todos: Todo[]
  deleteID: string
}
export const deleteTodoAsync = createAsyncThunk(
  'todo/delete',
  async (status: TodosWithDeleteID) => {
    const deledtedID = await deleteTodoAPI(status.deleteID)
    // * 삭제에 성공하면 ORDER순서를 변경합니다.
    if (deledtedID) {
      let curOrder = 0
      await Promise.all(
        status.todos.map((todo, idx) => {
          if (todo.id === status.deleteID) {
            curOrder += 1
            return
          }
          if (todo.order === idx + curOrder) return
          // deleted된 todo의 order를 제외하고, order를 재설정합니다.
          return editTodoAPI({
            id: todo.id,
            title: todo.title,
            order: idx - curOrder,
            done: todo.done,
          })
        }),
      )
    }
    return deledtedID
  },
)
