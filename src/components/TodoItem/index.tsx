import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { IoCheckmarkCircleSharp } from '@react-icons/all-files/io5/IoCheckmarkCircleSharp'
import { IoEllipseOutline } from '@react-icons/all-files/io5/IoEllipseOutline'

import { Todo } from '../../types'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectTodo } from '../../features/todo/todoSlice'
import { deleteTodoAsync, editTodoAsync } from '../../features/todo/todoAsync'
import { IoTrashOutline } from '@react-icons/all-files/io5/IoTrashOutline'
import { IoBuildOutline } from '@react-icons/all-files/io5/IoBuildOutline'
import { IoBuild } from '@react-icons/all-files/io5/IoBuild'

import Spinner from '../Spinner'

import styles from './index.module.css'
import { DATE_FORMAT } from '../../constants'

type Props = {
  todo: Todo
}
export default function TodoItem({ todo }: Props) {
  const [isLoading, setIsLoading] = useState(false)
  const [isEditable, setIsEditable] = useState(false)
  // * 낙관적으로 처리하기 위해 todo.done 상태를 useState로 관리합니다.
  const [isDoen, setIsDoen] = useState(todo.done)
  const [todoTitle, setTodoTitle] = useState(todo.title)
  const dispatch = useAppDispatch()
  const { todos, deleteTodoStatus } = useAppSelector(selectTodo)

  type Status = {
    todoID: string
    isDone?: boolean
    title?: string
  }

  // * todo item을 수정하는 함수
  function dispatchEditTodoAsync(status: Status) {
    todos.map((todo) => {
      if (todo.id === status.todoID) {
        !status.title && (status.title = todoTitle)
        status.isDone === undefined && (status.isDone = isDoen)
        dispatch(editTodoAsync({ ...todo, done: status.isDone, title: status.title }))
      }
    })
  }

  // * todo item 체크 박스 클릭 이벤트 처리
  function handleOnClickCheckBtn(e: React.MouseEvent<HTMLButtonElement>) {
    setIsDoen(!isDoen)
    dispatchEditTodoAsync({
      todoID: todo.id,
      isDone: !isDoen,
    })
  }

  // * todo item 삭제 버튼 클릭 이벤트 처리
  function deleteTodoItem() {
    setIsLoading(true)
    dispatch(deleteTodoAsync({ todos, deleteID: todo.id }))
  }

  // * todo item 수정 버튼 클릭 이벤트 처리
  function editTodoTitle() {
    if (isEditable) {
      dispatchEditTodoAsync({
        todoID: todo.id,
        title: todoTitle,
      })
    }
    setIsEditable(!isEditable)
  }

  function setTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoTitle(() => e.target.value)
  }

  useEffect(() => {
    if (deleteTodoStatus !== 'loading') {
      setIsLoading(false)
    }
  }, [deleteTodoStatus])

  if (isLoading) {
    return (
      <li
        className={styles.item}
        data-todoid={todo.id}
      >
        <Spinner />
      </li>
    )
  }

  return (
    <li
      className={styles.item}
      data-todoid={todo.id}
    >
      <div>
        To Do :{' '}
        <p>
          <input
            type='text'
            value={todoTitle}
            disabled={!isEditable}
            className={[
              isEditable ? styles.editableTitle : styles.diseditableTitle,
              styles.title,
            ].join(' ')}
            onChange={setTitle}
          />
        </p>
      </div>
      <div>
        <div>Created at : {dayjs(todo.createdAt).format(DATE_FORMAT)}</div>
        <div>Updated at : {dayjs(todo.updatedAt).format(DATE_FORMAT)}</div>
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.button}
          type='button'
          onClick={handleOnClickCheckBtn}
        >
          {isDoen ? <IoCheckmarkCircleSharp /> : <IoEllipseOutline />}
        </button>
        <button
          className={styles.button}
          type='button'
          onClick={deleteTodoItem}
        >
          <IoTrashOutline />
        </button>
        <button
          className={styles.button}
          type='button'
          onClick={editTodoTitle}
        >
          {isEditable ? <IoBuild /> : <IoBuildOutline />}
        </button>
      </div>
    </li>
  )
}
