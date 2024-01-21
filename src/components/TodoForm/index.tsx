import React, { useState } from 'react'
import styles from './index.module.css'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { selectTodo } from '@/features/todo/todoSlice'
import { addTodoAsync } from '@/features/todo/todoAsync'

import { IoOpenSharp } from '@react-icons/all-files/io5/IoOpenSharp'

import Spinner from '@/components/Spinner'

export default function TodoForm() {
  const dispatch = useAppDispatch()
  const { todos, addTodoStatus } = useAppSelector(selectTodo)
  const [todoTitle, setTodoTitle] = useState('')

  const setTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value)
  }
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const order = todos.length ? todos.length : 0
    dispatch(addTodoAsync({ title: todoTitle, order }))
    setTodoTitle('')
  }

  return (
    <section className={styles.container}>
      <div className={styles.cover}>
        <h2>Add To do</h2>
        {addTodoStatus === 'loading' ? (
          <Spinner />
        ) : (
          <form
            onSubmit={addTodo}
            className={styles.form}
          >
            <input
              type='text'
              className={styles.text}
              value={todoTitle}
              placeholder='Write a to do'
              onChange={setTitle}
            />
            <label
              htmlFor='todoSubmitBtn'
              className={styles.label}
            >
              <IoOpenSharp />
            </label>
            <input
              id='todoSubmitBtn'
              type='submit'
              className={styles.submit}
            />
          </form>
        )}
      </div>
    </section>
  )
}
