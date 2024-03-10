import './heroCard.scss'
import HeartEmpty from '../../assets/images/heartEmpty.svg'
import { Link } from 'react-router-dom'
import { HeroesType } from '../../types/types'
import { useFavHeroesContext } from '../../providers/FavHeroesProvider'
import FavouriteHeart from '../FavoriteHeart/FavouriteHeart'

type HeroCardProps = {
  hero: HeroesType
  heroBaseURL: string
  handleAddToFavourite: (heroSel: HeroesType) => void
  handleRemoveToFavourite: (heroSel: HeroesType) => void
}

const HeroCard = ({
  hero,
  heroBaseURL,
  handleAddToFavourite,
  handleRemoveToFavourite,
}: HeroCardProps) => {
  const { favourite } = useFavHeroesContext()
  const isFavorite = favourite.find((item) => item.id === hero.id)

  return (
    <div className="herocard_container">
      <Link to={`${heroBaseURL}/${hero.id}`}>
        <img
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt={`${hero.name}-heroIcon`}
        />
      </Link>
      <div className="herocard_bottom">
        <Link to={`${heroBaseURL}/${hero.id}`}>
          <p>{hero.name.toUpperCase()}</p>
        </Link>
        {!isFavorite && (
          <div
            onClick={() => handleAddToFavourite(hero)}
            className="herocard_notfavourite"
          >
            <img src={HeartEmpty} alt="heartEmpty" />
          </div>
        )}
        {isFavorite && (
          <div
            onClick={() => handleRemoveToFavourite(hero)}
            className="herocard_favourite"
          >
            <FavouriteHeart />
          </div>
        )}
      </div>
    </div>
  )
}

export default HeroCard
