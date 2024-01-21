import { AppDispatch, RootState } from '@/redux/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

// useDispatch and useSelector에 Generic타입을 추가합니다.
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
