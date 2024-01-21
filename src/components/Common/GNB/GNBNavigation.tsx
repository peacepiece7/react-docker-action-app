import { Link } from 'react-router-dom'
import Nav from '@/components/Common/Navigation'
import styled from 'styled-components'
import { font, theme, transition } from '@/styles/variable'
import { useAppSelector } from '@/hooks/redux'
import { removeCookie } from '@/utils'
import { ACCESS_TOKEN } from '@/constants'
const { List, Item, Link: AnchorLink } = Nav

const StyledLink = styled(Link)`
  color: ${font.color.light};
  background-color: ${theme.primary};
  text-decoration: none;
  transition: ${transition.all};
  font-size: ${font.size.base};
  &:hover {
    color: ${font.color.heightlight};
  }
`

export const GNBNavigation = () => {
  const isLogin = useAppSelector((state) => state.user.isLogin)
  return (
    <Nav>
      <List $virtical={true}>
        <Item>
          <StyledLink to='/'>Home</StyledLink>
        </Item>
        <Item>
          <StyledLink to='/about'>About</StyledLink>
        </Item>
        {!isLogin && (
          <Item>
            <StyledLink to='/login'>Login</StyledLink>
          </Item>
        )}
        {isLogin && (
          <Item>
            <AnchorLink
              to='/login'
              onClick={() => {
                // HACK : 로그아웃 API가 있어야하지만, 템플릿이니까 임시로 쿠키만 지웁니다.
                removeCookie(ACCESS_TOKEN)
              }}
            >
              Logout
            </AnchorLink>
          </Item>
        )}
      </List>
    </Nav>
  )
}
