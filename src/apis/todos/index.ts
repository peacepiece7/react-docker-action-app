import { Todo } from '@/models/todo'
import axios from 'axios'

export const fetchTodosAPI = async (userId: string): Promise<Todo[]> => {
  const { data } = await axios('/api/todos', {
    method: 'GET',
    params: {
      userId,
    },
  })
  return data.data
}

export interface AddTodoAPIResponse {
  data: Todo
  message: string
}
export interface AddTodoParams {
  userId: string
  title: Todo['title']
  description: Todo['description']
}
interface IAddTodoAPI {
  (
    userId: AddTodoParams['userId'],
    title: AddTodoParams['title'],
    description: AddTodoParams['description']
  ): Promise<AddTodoAPIResponse>
}
// prettier-ignore
export const addTodoAPI : IAddTodoAPI  = async (userId, title, description) => {
  const { data } = await axios('/api/todo', {
    method: 'POST',
    data: {
      userId,
      title,
      description,
    },
  })
  return data
}

interface IDeleteTodoAPI {
  (todoId: string): Promise<{ message: string }>
}
export const deleteTodoAPI: IDeleteTodoAPI = async (todoId: string) => {
  const { data } = await axios(`/api/todo/${todoId}`, {
    method: 'DELETE',
  })
  return data
}
