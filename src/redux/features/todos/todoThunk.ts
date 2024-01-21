import {
  AddTodoParams,
  addTodoAPI,
  fetchTodosAPI,
  deleteTodoAPI,
} from '@/apis/todos'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTodosThunk = createAsyncThunk(
  'todo/fetchTodo',
  async (userId: string) => {
    const todos = await fetchTodosAPI(userId)
    return todos
  }
)

export const addTodoThunk = createAsyncThunk(
  'todo/addTodo',
  async (args: AddTodoParams) => {
    const { userId, title, description } = args
    const response = await addTodoAPI(userId, title, description)
    return response.data
  }
)

export const deleteTodoThunk = createAsyncThunk(
  'todo/deleteTodo',
  async (todoId: string) => {
    const { message } = await deleteTodoAPI(todoId)
    return message
  }
)
