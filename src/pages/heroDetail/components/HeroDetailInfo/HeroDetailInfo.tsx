import HeartFull from '../../../../assets/images/heartFull.svg'
import HeartEmpty from '../../../../assets/images/heartEmpty.svg'
import Spinner from '../../../../components/Spinner/Spinner'
import { useFavHeroesContext } from '../../../../providers/FavCharProvider'
import { HeroesType } from '../../../../types/types'
import HeroDetailComicsList from '../HeroDetailComicsList/HeroDetailComicsList'

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
          <div className="heroDetail_header">
            <div className="heroDetail_info">
              <img
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt="heroImage"
              />
            </div>
            <div className="heroDetail_textbox">
              <div className="heroDetail_title">
                <h1>{hero.name}</h1>
                {isFavourite ? (
                  <div>
                    <img src={HeartFull} alt="heartFull" />
                  </div>
                ) : (
                  <div>
                    <img src={HeartEmpty} alt="heartEmpty" />
                  </div>
                )}
              </div>
              <p>{hero.description}</p>
            </div>
          </div>
          <div className="heroDetail_comics">
            <HeroDetailComicsList />
          </div>
        </>
      )}
    </div>
  )
}

export default HeroDetailInfo
