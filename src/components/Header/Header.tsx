import './header.scss'
import HeartFull from '../../assets/images/heartFull.svg'
import MarvelLogo from '../../assets/images/MarvelLogo.svg'
import { Link } from 'react-router-dom'
import { useFavHeroesContext } from '../../providers/FavHeroesProvider'

const Header = () => {
  const { favourite } = useFavHeroesContext()
  return (
    <div className="header">
      <div className="header_wrapper">
        <Link to="/">
          <img className="header_image" src={MarvelLogo} alt="marvelLogo" />
        </Link>
        <Link to="/favourites">
          <div className="header_favorite">
            <img src={HeartFull} alt="favouriteLogo" />
            <div>
              {favourite.length === 0 ? <span>0</span> : favourite.length}
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
