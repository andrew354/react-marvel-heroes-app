import './layout.scss'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main>
        <Header />
        {children}
      </main>
    </>
  )
}
