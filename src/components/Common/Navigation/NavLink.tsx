import { font, theme, transition } from '@/styles/variable'
import styled from 'styled-components'

const SLink = styled.a`
  color: ${font.color.light};
  background-color: ${theme.primary};
  text-decoration: none;
  transition: ${transition.all};
  font-size: ${font.size.base};
  &:hover {
    color: ${font.color.heightlight};
  }
`

interface LinkProps {
  children?: React.ReactNode
  to: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  disabled?: boolean
}

export const NavLink = ({
  children,
  to,
  onClick,
  disabled = false,
}: LinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault()
      return
    }
    onClick && onClick(e)
  }
  return (
    <SLink href={to} onClick={handleClick}>
      {children}
    </SLink>
  )
}
