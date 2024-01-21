import axios from 'axios'
import { Todo, TodoEditParams, TodoAddParams } from '../types'
axios.defaults.baseURL = 'https://asia-northeast3-heropy-api.cloudfunctions.net'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'
axios.defaults.headers.username = 'KDT5_JeongTaeUk'
axios.defaults.headers.apikey = 'KDT5_nREmPe9B'

export async function getTodosAPI(): Promise<Todo[] | never> {
  try {
    const { data } = await axios('/api/todos', {
      method: 'GET',
    })
    return data
  } catch (err) {
    console.error(err)
    throw new Error(err as string)
  }
}

export async function addTodoAPI(todo: TodoAddParams): Promise<Todo | never> {
  try {
    if (!todo.title) {
      throw new Error('제목을 입력해주세요')
    }

    const { data } = await axios('api/todos', {
      method: 'POST',
      data: JSON.stringify(todo),
    })
    return data
  } catch (err) {
    console.error(err)
    throw new Error(err as string)
  }
}

export async function editTodoAPI(todo: TodoEditParams): Promise<Todo | never> {
  try {
    const { data } = await axios(`/api/todos/${todo.id}`, {
      method: 'PUT',
      data: JSON.stringify({ title: todo.title, done: todo.done, order: todo.order }),
    })
    data.order = todo.order // ? API에서 응답으로 order를 보내주지 않아서 직접 추가
    return data
  } catch (err) {
    console.error(err)
    throw new Error(err as string)
  }
}
export async function deleteTodoAPI(id: string): Promise<string | never> {
  try {
    const { data: isRemoved }: { data: boolean } = await axios(`/api/todos/${id}`, {
      method: 'DELETE',
    })

    if (!isRemoved) {
      throw new Error('삭제에 실패했습니다.')
    }
    return id
  } catch (err) {
    console.error(err)
    throw new Error(err as string)
  }
}
