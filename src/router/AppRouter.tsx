import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/landing/Landing'
import Favourites from '../pages/favourites/Favourites'
import HeroDetail from '../pages/heroDetail/HeroDetail'

const AppRouter = () => {
  return (
    <Routes>
      <Route index path="/" element={<Landing />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/favourite/:id" element={<HeroDetail />} />
      <Route path="heroes/:id" element={<HeroDetail />} />
    </Routes>
  )
}

export default AppRouter
