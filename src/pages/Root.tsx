import { TodoActionForm } from '@/components/Root/TodoActionForm'
import { TodoContainer } from '@/components/Root/TodoContainer'
import { RootLayout } from '@/layouts/RootLayout'
import styled from 'styled-components'

export const Root = () => {
  return (
    <RootLayout>
      <TitleWrapper>TODO LIST</TitleWrapper>
      <TodoActionForm />
      <TodoContainer />
    </RootLayout>
  )
}

const TitleWrapper = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`
