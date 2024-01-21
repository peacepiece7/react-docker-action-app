import React, { useEffect, useState, lazy } from 'react'
import { ReactSortable } from 'react-sortablejs'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { selectTodo } from '@/features/todo/todoSlice'
import { editTodoAsync, getTodoAsync } from '@/features/todo/todoAsync'

import TodoItem from '@/components/TodoItem'

import styles from './index.module.css'

export default function TodoList() {
  const { todos, getTodoStatus, deleteTodoStatus, addTodoStatus } = useAppSelector(selectTodo)
  const [todoList, setTodoList] = useState(todos)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTodoAsync())
  }, [])

  // ! editTodoStatus는 sort될 떼 API를 두 번 요청하는데 이떄 editTodoStatus는
  // ! loading => idle => loading => idle이 아니라
  // ! loading => loadling => idle => idle 순으로 변경됩니다.
  // ! 그래서 dependency에 editTodoStatus를 입력하지 않았습니다.
  // ! 이를 해결하려면 sort관련 상태(sortTodoStatus)를 추가하고, 비동기 적업을 구현하거나, editTodoAsync함수가 여러 비동기 요청을 동시에 처리해야합니다.
  // (추가적인 기능이 없다면) 이정도만 구현해도 충분하다고 생각해서 일단 두었습니다.
  useEffect(() => {
    if (getTodoStatus === 'idle' || deleteTodoStatus === 'idle' || addTodoStatus === 'idle') {
      setTodoList(todos)
    }
  }, [getTodoStatus, deleteTodoStatus, addTodoStatus])

  return (
    <section className={styles.container}>
      <h2 className={styles.header}>List</h2>
      <ReactSortable
        tag='ul'
        list={todoList.map((todo) => ({ ...todo, chosen: true }))}
        setList={(sortedTodos) => {
          const newTodos = sortedTodos.map((todo, idx) => {
            if (todos[idx].order !== todo.order) {
              dispatch(
                editTodoAsync({
                  id: todo.id,
                  order: idx,
                  title: todo.title,
                  done: todo.done,
                }),
              )
            }
            return { ...todo, order: idx }
          })
          // * 낙관적으로 todo list를 변경해줍니다.
          setTodoList(newTodos)
        }}
      >
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </ReactSortable>
    </section>
  )
}
