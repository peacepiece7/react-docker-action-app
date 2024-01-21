import { Loading } from '@/components/Common/Loading'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { selectUser } from '@/redux/features/user/userReducer'
import { fetchUserThunk } from '@/redux/features/user/userThunk'
import { Navigate, Outlet } from 'react-router-dom'

// * 상황에 따라서 특정 컴포넌트만 Wrapping 해도 됩니다.
export const ProtectedRoute = () => {
  const dispatch = useAppDispatch()
  const { status } = useAppSelector(selectUser)

  if (status === 'pending') {
    dispatch(fetchUserThunk())
    return <Loading text='로그인 여부 체크 중...' />
  }

  if (status === 'rejected') {
    return <Navigate to='/login' />
  }

  return <Outlet />
}
