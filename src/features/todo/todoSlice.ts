import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/app/store'

import { Todos } from '@/types'
import { addTodoAsync, deleteTodoAsync, editTodoAsync, getTodoAsync } from './todoAsync'
const initState: Todos = { todos: [] }

/**
 * @description 동기 작업만 수행하는 Reducer입니다.
 * @example
 * reducers : {
 *   addItem: (state) => {
 *     const newItem = getNewItem()
 *     state.todos.push(newItem)
 *     return state
 *   }
 * }
 * // ...out of the todoSlice boundary
 * export const { addItem } = todoSlice.actions3
 *
 * @description 비동기 작업을 수행하는 Reducer입니다.
 * @example
 * extraReducers : (builder) => {
 *   builder
 *   .addCase(getTodoAsync.pending, (state) => {
 *     state.getTodoStatus = 'loading'
 *    }
 *   .addCase(getTodoAsync.fulfilled, (state, action) => {
 *     state.getTodoStatus = 'idle'
 *     state.todos = action.payload
 *   }
 *   .addCase(getTodoAsync.rejected, (state, action) => {
 *      state.getTodoStatus = 'failed'
 *   }
 * }
 */
export const todoSlice = createSlice({
  name: 'todo',
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // * getTodoAsync
      .addCase(getTodoAsync.pending, (state) => {
        state.getTodoStatus = 'loading'
        state.editTodoStatus = undefined
        state.addTodoStatus = undefined
        state.deleteTodoStatus = undefined
      })
      .addCase(getTodoAsync.fulfilled, (state, action) => {
        state.getTodoStatus = 'idle'
        state.todos = action.payload
      })
      .addCase(getTodoAsync.rejected, (state) => {
        state.getTodoStatus = 'failed'
        state.todos = []
      })

      // * editTodoAsync
      .addCase(editTodoAsync.pending, (state, action) => {
        state.getTodoStatus = undefined
        state.editTodoStatus = 'loading'
        state.addTodoStatus = undefined
        state.deleteTodoStatus = undefined
      })
      .addCase(editTodoAsync.fulfilled, (state, action) => {
        state.editTodoStatus = 'idle'
        state.todos = [
          ...state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo)),
        ]
      })
      .addCase(editTodoAsync.rejected, (state) => {
        state.editTodoStatus = 'failed'
      })

      // * addTodoAsync
      .addCase(addTodoAsync.pending, (state, action) => {
        state.getTodoStatus = undefined
        state.editTodoStatus = undefined
        state.addTodoStatus = 'loading'
        state.deleteTodoStatus = undefined
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.addTodoStatus = 'idle'
        state.todos = [...state.todos, action.payload]
      })
      .addCase(addTodoAsync.rejected, (state) => {
        state.addTodoStatus = 'failed'
      })

      // * deleteTodoAsync
      .addCase(deleteTodoAsync.pending, (state) => {
        state.getTodoStatus = undefined
        state.editTodoStatus = undefined
        state.addTodoStatus = undefined
        state.deleteTodoStatus = 'loading'
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        state.deleteTodoStatus = 'idle'
        const deledtedTodoID = action.payload
        let curOrder = 0
        state.todos = [
          ...state.todos
            .map((todo, idx) => {
              if (todo.id === deledtedTodoID) curOrder += 1
              if (todo.order === idx + curOrder) return todo
              return { ...todo, order: todo.order - curOrder }
            })
            .filter((todo) => (todo.id === deledtedTodoID ? false : true)),
        ]
      })
      .addCase(deleteTodoAsync.rejected, (state) => {
        state.deleteTodoStatus = 'failed'
      })
  },
})

export const selectTodo = (state: RootState) => state.todo
export default todoSlice.reducer
