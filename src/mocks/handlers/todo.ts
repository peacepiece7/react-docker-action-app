import { Todo } from '@/models/todo'
import { delay } from '@/utils'
import { http, HttpResponse } from 'msw'
import { nanoid } from 'nanoid'

const handlers = []

/**
 * @description todo를 불러오는 api
 */
const loadTodos = http.get('/api/todos', async () => {
  try {
    console.log('[MSW] : loadTdos가 호출되었습니다.')
    const todos = JSON.parse(localStorage.getItem('todos') ?? '[]')
    await delay(1000)
    if (todos?.constructor?.name !== 'Array') {
      throw new Error('todos is not array')
    }
    return HttpResponse.json({
      message: '일정을 불러왔습니다.',
      data: todos,
    })
  } catch (e) {
    console.error(e)
    localStorage.setItem('todos', '[]')
    return HttpResponse.json({
      message: '일정을 불러오는데 실패하여 새로운 일정을 불러왔습니다.',
      data: '[]',
    })
  }
})

/**
 * @description todo를 추가하는 api
 */
const addTodo = http.post('/api/todo', async (ctx) => {
  try {
    console.log('[MSW] : addTodos가 호출되었습니다.')

    const body = (await ctx.request.json()) as Pick<
      Todo,
      'title' | 'description'
    >

    // if (!body.title) if (!body.description)

    const newTodo: Todo = {
      id: nanoid(),
      date: Date.now().toString(),
      done: false,
      ...body,
    }

    const todos = JSON.parse(localStorage.getItem('todos') ?? '[]')
    const newTodos = [...todos, newTodo]
    localStorage.setItem('todos', JSON.stringify(newTodos))
    await delay(1000)
    return HttpResponse.json(
      {
        message: '일정이 추가되었습니다..',
        data: newTodo,
      },
      { status: 201 }
    )
  } catch (e) {
    console.error(e)
    return HttpResponse.json(
      {
        message: '일정을 추가하는데 실패했습니다.',
        data: {},
      },
      { status: 500 }
    )
  }
})

const deleteTodo = http.delete('/api/todo/:todoId', async (ctx) => {
  try {
    console.log('[MSW] : deleteTodo가 호출되었습니다.')
    const { todoId } = ctx.params

    const todos = JSON.parse(localStorage.getItem('todos') ?? '[]')
    const newTodos = todos.filter((todo: Todo) => todo.id !== todoId)
    localStorage.setItem('todos', JSON.stringify(newTodos))
    await delay(1000)
    return HttpResponse.json(
      {
        message: '일정이 삭제되었습니다..',
      },
      { status: 201 }
    )
  } catch (e) {
    console.error(e)
    return HttpResponse.json(
      {
        message: '일정을 삭제하는데 실패했습니다.',
      },
      { status: 500 }
    )
  }
})

handlers.push(loadTodos)
handlers.push(addTodo)
handlers.push(deleteTodo)

export const todoHandlers = handlers
