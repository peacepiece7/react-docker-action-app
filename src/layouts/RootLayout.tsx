import { Loading } from '@/components/Common/Loading'
import { useTodos } from '@/hooks/fetchTodo'
import { useAppSelector } from '@/hooks/redux'
import { selectUser } from '@/redux/features/user/userReducer'

import { font, size } from '@/styles/variable'
import styled from 'styled-components'

interface RootLayoutProps {
  children: React.ReactNode
}

const Wrapper = styled.div`
  max-width: ${size.maxWidth};
  margin: auto;
  font-size: ${font.size.base};
`

export const RootLayout = ({ children }: RootLayoutProps) => {
  const { isLoading, isError } = useTodos()
  const { user } = useAppSelector(selectUser)
  if (isLoading) {
    return <Loading text={`${user.nickname}님의 투두 리스트 불러오는 중...`} />
  }
  if (isError) {
    throw new Error('투두 리스트를 불러오는데 실패했습니다.')
  }
  return <Wrapper>{children}</Wrapper>
}
