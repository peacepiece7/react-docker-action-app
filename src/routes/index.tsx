import { Layout } from '@/layouts/Layout'
import { Login } from '@/pages/Login'
import { Root } from '@/pages/Root'
import { Todo } from '@/pages/Todo'
import { Todos } from '@/pages/Todos'
import { ProtectedRoute } from '@/templates/ProtectedRoute'

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/',
        element: <ProtectedRoute />,
        children: [
          {
            path: '/',
            element: <Root />,
          },
          {
            path: '/todos',
            element: <Todos />,
          },
          {
            path: '/todo/:todoId',
            Element: <Todo />,
          },
        ],
      },
    ],
  },
]
