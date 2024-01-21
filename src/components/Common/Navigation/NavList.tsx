import styled from 'styled-components'

const List = styled.ul<NavListProps>`
  display: flex;
  ${(p) => (p.$virtical ? 'flex-$virtical: column;' : 'flex-$virtical: row;')}
`

interface NavListProps {
  children?: React.ReactNode
  $virtical?: boolean
}

export const NavList = ({ children, $virtical = false }: NavListProps) => {
  return <List $virtical={$virtical}>{children}</List>
}
