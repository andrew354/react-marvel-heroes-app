import HeartFull from '../../assets/images/heartFull.svg'
import { useFavHeroesContext } from '../../providers/FavHeroesProvider'

const FavouriteIcon = () => {
  const { favourite } = useFavHeroesContext()
  return (
    <div>
      <img src={HeartFull} alt="favouriteIcon" />
      <button>{favourite.length === 0 ? <></> : favourite.length}</button>
    </div>
  )
}

export default FavouriteIcon
