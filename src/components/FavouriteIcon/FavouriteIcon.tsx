import { useFavHeroesContext } from '../../providers/FavHeroesProvider'

const FavouriteIcon = () => {
  const { favourite } = useFavHeroesContext()
  return (
    <div>
      <img src="/images/State=Default.svg" alt="" />
      <button>{favourite.length === 0 ? <></> : favourite.length}</button>
    </div>
  )
}

export default FavouriteIcon
