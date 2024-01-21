import { TodoList } from './TodoList'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { fetchTodosThunk } from '@/redux/features/todos/todoThunk'
import { selectUser } from '@/redux/features/user/userReducer'
import { selectTodos } from '@/redux/features/user/userThunk'

export const TodoContainer = () => {
  const dispatch = useAppDispatch()
  const { deleteTodoError } = useAppSelector(selectTodos)
  const { user } = useAppSelector(selectUser)

  if (deleteTodoError) {
    dispatch(fetchTodosThunk(user.userId))
    alert(deleteTodoError)
  }

  return (
    <>
      <TodoList />
    </>
  )
}
