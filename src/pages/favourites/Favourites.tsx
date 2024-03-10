import './favourite.scss'
import { useFavHeroesContext } from '../../providers/FavHeroesProvider'
import ListHeroes from '../../components/ListHeroes/ListHeroes'
import Layout from '../../components/Layout/Layout'

const Favourites = () => {
  const { favourite } = useFavHeroesContext()
  return (
    <Layout>
      <div className="favourite_container">
        <h1>Favourites</h1>
        <ListHeroes heroBaseURL="/favourite" filteredHeroes={favourite} />
      </div>
    </Layout>
  )
}

export default Favourites
