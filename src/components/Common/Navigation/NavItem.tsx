import styled from 'styled-components'

const Item = styled.li`
  margin: 8px;
`

interface NavItemProps {
  children?: React.ReactNode
  disabled?: boolean
}
export const NavItem = ({ children, disabled = false }: NavItemProps) => {
  return <Item role={disabled ? 'presentation' : undefined}>{children}</Item>
}
