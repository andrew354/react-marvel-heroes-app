import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import RoutesProvider from './providers/RouterProvider'
import AppProvider from './providers/AppProvider'
import './styles/index.scss'
import AppRouter from './router/AppRouter'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <AppProvider>
      {/* <RoutesProvider /> */}
      <AppRouter />
    </AppProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
