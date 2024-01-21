import { useTodos } from '@/hooks/fetchTodo'
import { TodoItem } from './TodoItem'
import styled from 'styled-components'
import { useAppDispatch } from '@/hooks/redux'
import { deleteTodoThunk } from '@/redux/features/todos/todoThunk'
import { deleteOptimisticTodo } from '@/redux/features/todos/todoReducer'

export const TodoList = () => {
  const dispatch = useAppDispatch()
  const { todos, addTodoLoading } = useTodos()

  const handleOnDelete = (todoId: string) => {
    const confirm = window.confirm('Are you sure to delete this todo?')
    if (confirm) {
      console.log('delete todo')
      dispatch(deleteTodoThunk(todoId))
      dispatch(deleteOptimisticTodo(todoId))
    }
  }

  return (
    <div>
      <UlWrapper>
        {todos.map((todo) => {
          return (
            <TodoItem key={todo.id} item={todo} onDelete={handleOnDelete} />
          )
        })}
        {addTodoLoading && <li>loading...</li>}
      </UlWrapper>
    </div>
  )
}

const UlWrapper = styled.ul`
  max-width: 500px;
  margin: 0 auto;
`
