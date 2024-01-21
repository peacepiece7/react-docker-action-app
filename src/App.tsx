import React, { lazy, Suspense } from 'react'
const Title = lazy(() => import('@/components/Title'))
const Layout = lazy(() => import('@/Layout'))
const TodoList = lazy(() => import('@/components/TodoList'))
const TodoForm = lazy(() => import('@/components/TodoForm'))

function App() {
  return (
    <Layout>
      <Title />
      <TodoForm />
      <TodoList />
    </Layout>
  )
}
export default App
