import './header.scss'
import HeartFull from '../../assets/images/heartFull.svg'
import MarvelLogo from '../../assets/images/MarvelLogo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useFavHeroesContext } from '../../providers/FavCharProvider'

const Header = () => {
  const navigate = useNavigate()
  const { favourite } = useFavHeroesContext()

  const refresh = () => {
    navigate('/')
  }

  return (
    <div className="header">
      <div className="header_wrapper">
        <div onClick={refresh}>
          <img className="header_image" src={MarvelLogo} alt="marvelLogo" />
        </div>
        <Link to="/favourites">
          <div className="header_favorite">
            <img src={HeartFull} alt="heartFull" />
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
