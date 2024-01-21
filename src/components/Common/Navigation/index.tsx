import { theme, transition } from '@/styles/variable'
import styled from 'styled-components'
import { NavList } from './NavList'
import { NavItem } from './NavItem'
import { NavLink } from './NavLink'

export interface NavigationProps {
  $expanded?: boolean
  children?: React.ReactNode
}

const NavWrapper = styled.nav<NavigationProps>`
  display: block;
  min-width: ${(p) => (p.$expanded ? '200px' : '0px')};
  height: fit-content;
  background-color: ${theme.primary};
  overflow: hidden;
  transition: ${transition.to('width')};
`

const Nav = ({ children, $expanded = true }: NavigationProps) => {
  return <NavWrapper $expanded={$expanded}>{children}</NavWrapper>
}

Nav.List = NavList
Nav.Item = NavItem
Nav.Link = NavLink

export default Nav
