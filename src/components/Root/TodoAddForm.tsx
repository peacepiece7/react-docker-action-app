import { useAppDispatch } from '@/hooks/redux'
import { addTodoThunk } from '@/redux/features/todos/todoThunk'
import { selectUser } from '@/redux/features/user/userReducer'
import { border, font, transition } from '@/styles/variable'
import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const TodoAddForm = () => {
  const dispath = useAppDispatch()
  const { user } = useSelector(selectUser)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(title, description)
    dispath(addTodoThunk({ title, description, userId: user.userId }))
    resetForm()
  }

  const resetForm = useCallback(() => {
    setTitle('')
    setDescription('')
  }, [])

  return (
    <div>
      <FormWrapper onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter a todo title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter a detail'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type='submit' value='추가하기' />
      </FormWrapper>
    </div>
  )
}

/**
 * TODO : /login의 FormWrapper와 유사한 코드입니다.
 */
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  font-size: ${font.size.base};
  margin: auto;
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
    &:not(input[type='submit']) {
      display: block;
      width: 100%;
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
