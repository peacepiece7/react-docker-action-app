import { font } from '@/styles/variable'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
  font-size: ${font.size.xxl};
  font-weight: ${font.weight.bold};
`

interface LoadingProps {
  text?: string
}
export const Loading = ({ text = 'Loading...' }: LoadingProps) => {
  return <LoadingWrapper>{text}</LoadingWrapper>
}
