// export type Nullable<T> = { [K in keyof T]?: T[K] }

export type Todo = {
  id: string // 할 일 ID
  order: number // 할 일 순서
  title: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt: string // 할 일 생성일
  updatedAt: string // 할 일 수정일
}

export type TodoAddParams = Pick<Todo, 'title' | 'order'>
export type TodoEditParams = Pick<Todo, 'id' | 'title' | 'order' | 'done'>
export interface Todos {
  todos: Todo[]
  getTodoStatus?: 'idle' | 'loading' | 'failed'
  addTodoStatus?: 'idle' | 'loading' | 'failed'
  editTodoStatus?: 'idle' | 'loading' | 'failed'
  deleteTodoStatus?: 'idle' | 'loading' | 'failed'
}
