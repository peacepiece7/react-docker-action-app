import { useAppDispatch, useAppSelector } from './redux'
import { fetchTodosThunk } from '@/redux/features/todos/todoThunk'
import { selectUser } from '@/redux/features/user/userReducer'
import { selectTodos } from '@/redux/features/user/userThunk'
import { useEffect } from 'react'

export const useTodos = () => {
  const { user } = useAppSelector(selectUser)
  const {
    todos,
    fetchTodoDone,
    fetchTodoError,
    fetchTodoLoading,
    addTodoDone,
    addTodoError,
    addTodoLoading,
  } = useAppSelector(selectTodos)
  const dispatch = useAppDispatch()

  // TODO : Effect를 없애려면 서버 상태관리 도구로 대체 합시다.
  useEffect(() => {
    if (fetchTodoDone === false) {
      dispatch(fetchTodosThunk(user.userId))
    } else if (fetchTodoError !== null) {
      dispatch(fetchTodosThunk(user.userId))
    }
  }, [fetchTodoDone, fetchTodoError, dispatch, user.userId])

  return {
    todos,
    isDone: fetchTodoDone,
    isError: fetchTodoError,
    isLoading: fetchTodoLoading,
    addTodoDone,
    addTodoError,
    addTodoLoading,
  }
}
