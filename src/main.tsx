import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from '@/routes/index.tsx'
import { GlobalStyle } from '@/styles/global'
import { enableWorker } from '@/utils/api/common'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

enableWorker()

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
