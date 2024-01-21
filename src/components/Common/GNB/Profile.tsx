import { IUser } from '@/models/user'
import { theme } from '@/styles/variable'
import styled from 'styled-components'

interface ProfileProps {
  user: IUser
}

export const Profile = ({ user }: ProfileProps) => {
  return (
    <ProfileWrapper>
      <img src={user.profileImageUrl} alt={user.nickname} />
    </ProfileWrapper>
  )
}

const ProfileWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: ${theme.light};
  border-radius: 4rem;
  margin: 0 1rem;
  & > img {
    width: 6rem;
    height: 6rem;
  }
`
