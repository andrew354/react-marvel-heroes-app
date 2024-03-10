import HeartFull from '../../../../assets/images/heartFull.svg'
import HeartEmpty from '../../../../assets/images/heartEmpty.svg'
import Spinner from '../../../../components/Spinner/Spinner'
import { useFavHeroesContext } from '../../../../providers/FavHeroesProvider'
import { HeroesType } from '../../../../types/types'
import HeroDetailComicsList from '../HeroDetailComicsList/HeroDetailComicsList'
import HeroDetailHeader from '../HeroDetailHeader/HeroDetailHeader'

type HeroDetailInfoProps = {
  isLoading: boolean
  hero: HeroesType
}

const HeroDetailInfo = ({ isLoading, hero }: HeroDetailInfoProps) => {
  const { favourite } = useFavHeroesContext()

  const isFavourite = favourite.some((heroFav) => heroFav.id === hero.id)

  return (
    <div className="heroDetail_container">
      {isLoading && !hero ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        <>
          <HeroDetailHeader hero={hero} isFavourite={isFavourite} />
          <div className="heroDetail_comics">
            <HeroDetailComicsList />
          </div>
        </>
      )}
    </div>
  )
}

export default HeroDetailInfo
