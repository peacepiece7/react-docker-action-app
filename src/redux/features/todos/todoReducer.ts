import { Todo } from '@/models/todo'
import { createSlice } from '@reduxjs/toolkit'
import { addTodoThunk, fetchTodosThunk, deleteTodoThunk } from './todoThunk'

export interface TodoState {
  todos: Todo[]
  fetchTodoLoading: boolean
  fetchTodoDone: boolean
  fetchTodoError: null | unknown
  updateTodoLoading: boolean
  updateTodoDone: boolean
  updateTodoError: null | unknown
  deleteTodoLoading: boolean
  deleteTodoDone: boolean
  deleteTodoError: null | unknown
  addTodoLoading: boolean
  addTodoDone: boolean
  addTodoError: null | unknown
}

const initialState: TodoState = {
  todos: [],
  // CASE : fetch todo
  fetchTodoLoading: false,
  fetchTodoDone: false,
  fetchTodoError: null,
  // CASE : update todo
  updateTodoLoading: false,
  updateTodoDone: false,
  updateTodoError: null,
  // CASE : delete todo
  deleteTodoLoading: false,
  deleteTodoDone: false,
  deleteTodoError: null,
  // CASE : add todo
  addTodoLoading: false,
  addTodoDone: false,
  addTodoError: null,
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    deleteOptimisticTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    // CASE : Fetch Todo
    builder.addCase(fetchTodosThunk.pending, (state) => {
      state.fetchTodoLoading = true
      state.fetchTodoDone = false
      state.fetchTodoError = null
    })
    builder.addCase(fetchTodosThunk.fulfilled, (state, action) => {
      state.fetchTodoLoading = false
      state.fetchTodoDone = true
      state.fetchTodoError = null
      state.todos = action.payload
    })
    builder.addCase(fetchTodosThunk.rejected, (state, action) => {
      state.fetchTodoLoading = false
      state.fetchTodoDone = false
      state.fetchTodoError = action.error
    })
    // CASE : Add Todo
    builder.addCase(addTodoThunk.pending, (state) => {
      state.addTodoLoading = true
      state.addTodoDone = false
      state.addTodoError = null
    })
    builder.addCase(addTodoThunk.fulfilled, (state, action) => {
      state.addTodoLoading = false
      state.addTodoDone = true
      state.addTodoError = null
      state.todos.push(action.payload)
    })
    builder.addCase(addTodoThunk.rejected, (state, action) => {
      state.addTodoLoading = false
      state.addTodoDone = false
      state.addTodoError = action.error
    })
    // CASE : Delete Todo
    builder.addCase(deleteTodoThunk.pending, (state, action) => {
      console.log('action.payload : pending', action.payload)
      state.deleteTodoLoading = true
      state.deleteTodoDone = false
      state.deleteTodoError = null
      // * Update UI Optimistically
    })
    builder.addCase(deleteTodoThunk.fulfilled, (state, message) => {
      console.log('deleteTodoThunk.fulfilled message', message)
      state.deleteTodoLoading = false
      state.deleteTodoDone = true
      state.deleteTodoError = null
    })
    builder.addCase(deleteTodoThunk.rejected, (state, action) => {
      state.deleteTodoLoading = false
      state.deleteTodoDone = false
      state.deleteTodoError = action.error
    })
  },
})

export const { deleteOptimisticTodo } = todoSlice.actions
export default todoSlice.reducer
