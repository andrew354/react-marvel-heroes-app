import HeartFull from '../../../../assets/images/heartFull.svg'
import HeartEmpty from '../../../../assets/images/heartEmpty.svg'
import { HeroesType } from '../../../../types/types'

type HeroDetailHeaderProps = {
  hero: HeroesType
  isFavourite: boolean
}

const HeroDetailHeader = ({ hero, isFavourite }: HeroDetailHeaderProps) => {
  return (
    <div className="heroDetail_header">
      <div className="heroDetail_info">
        <div
          className="heroDetail_image_container"
          style={{
            backgroundImage: `url(${hero.thumbnail.path}.${hero.thumbnail.extension})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
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
  )
}

export default HeroDetailHeader
