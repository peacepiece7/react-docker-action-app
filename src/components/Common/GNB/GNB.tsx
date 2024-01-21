import { font, size, theme } from '@/styles/variable'
import styled from 'styled-components'

const GNBWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${theme.primary};
  color: ${font.color.light};
  font-size: ${font.size.base};
  > div {
    max-width: ${size.maxWidth};
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

interface GNBProps {
  children?: React.ReactNode
}
export const GNB = ({ children }: GNBProps) => {
  return (
    <GNBWrapper>
      <div>{children}</div>
    </GNBWrapper>
  )
}
