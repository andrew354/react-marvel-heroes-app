import './favourite.scss'
import { useFavHeroesContext } from '../../providers/FavCharProvider'
import ListHeroes from '../../components/ListHeroes/ListHeroes'

const Favourites = () => {
  const { favourite } = useFavHeroesContext()
  return (
    <div className="favourite_container">
      <h1>Favourites</h1>
      <ListHeroes heroBaseURL="/favourite" filteredHeroes={favourite} />
    </div>
  )
}

export default Favourites
