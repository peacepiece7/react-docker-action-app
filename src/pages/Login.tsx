import { loginAPI } from '@/apis/user'
import { ACCESS_TOKEN } from '@/constants'
import { border, font, transition } from '@/styles/variable'
import { setCookie } from '@/utils'
import { to } from '@/utils/api/common'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const [message, data] = await to(loginAPI(email, password))
    if (!data) {
      setEmail('')
      setPassword('')
      console.error('LOGIN FAILURE : ', message)
      return
    }
    setCookie(ACCESS_TOKEN, data.user.token, 1)
    navigate('/', {
      replace: true,
    })
  }

  return (
    <Container>
      <H1Wrapper>Login</H1Wrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <label>아무거나 입력해도 로그인 됩니다.</label>
        <input
          type='email'
          placeholder='Enter a Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Enter a Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type='submit' value='임시 로그인' />
      </FormWrapper>
    </Container>
  )
}

const Container = styled.div`
  width: fit-content;
  margin: 5rem auto;
`
const H1Wrapper = styled.h1`
  font-size: ${font.size.xl};
  margin: 2rem 0 1rem;
`
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  font-size: ${font.size.base};
  label {
    color: ${font.color.grey};
  }
  input {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: ${font.size.base};
    outline: none;
    transition: ${transition.all};
    &:focus {
      border-color: ${border.color.heightlight};
    }
  }
  input[type='submit'] {
    background-color: #ccc;
    cursor: pointer;
    transition: ${transition.all};
    &:hover {
      background-color: #aaa;
    }
  }
`
