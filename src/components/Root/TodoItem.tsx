import { Todo } from '@/models/todo'
import { border, theme, transition } from '@/styles/variable'
import styled from 'styled-components'

interface TodoItemProps {
  item: Todo
  onDelete: (id: string) => void
}

export const TodoItem = ({ item, onDelete }: TodoItemProps) => {
  return (
    <LiWrapper>
      <span>{item.title}</span>
      <ButtonWarpper type='button' onClick={() => onDelete(item.id)}>
        X
      </ButtonWarpper>
    </LiWrapper>
  )
}

const LiWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${border.color.grey};
  padding: 10px 0;
`
const ButtonWarpper = styled.button`
  background: #fff;
  border: 1px solid ${border.color.grey};
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
  transition: ${transition.all};
  &:hover {
    background: ${theme.grey};
  }
`
