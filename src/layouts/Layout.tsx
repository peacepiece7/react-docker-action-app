import { Outlet } from 'react-router-dom'
import { GNB } from '@/components/Common/GNB/GNB'
import { GNBNavigation } from '@/components/Common/GNB/GNBNavigation'
import { font } from '@/styles/variable'
import styled from 'styled-components'
import { Profile } from '@/components/Common/GNB/Profile'
import { useAppSelector } from '@/hooks/redux'
import { selectUser } from '@/redux/features/user/userReducer'

const TitleWrapper = styled.h1`
  font-size: ${font.size.xl};
  color: ${font.color.light};
  margin-left: 1rem;
`

const NAVWrapper = styled.div`
  flex: 1;
  & > nav > ul {
    float: right;
  }
`

export const Layout = () => {
  const { user, status, isLogin } = useAppSelector(selectUser)
  return (
    <>
      <GNB>
        <TitleWrapper>GNB</TitleWrapper>
        {status === 'fulfilled' && (
          <NAVWrapper>
            <GNBNavigation />
          </NAVWrapper>
        )}
        {isLogin && <Profile user={user} />}
      </GNB>
      <Outlet />
    </>
  )
}
