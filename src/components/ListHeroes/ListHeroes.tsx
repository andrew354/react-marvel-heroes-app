import './listHeroes.scss'
import { HeroesType } from '../../types/types'
import { useFavHeroesContext } from '../../providers/FavCharProvider'
import HeroCard from '../HeroCard/HeroCard'

type ListHeroesProps = {
  filteredHeroes: HeroesType[]
  heroBaseURL: string
}

const ListHeroes = ({ filteredHeroes, heroBaseURL }: ListHeroesProps) => {
  const { favourite, setFavourite } = useFavHeroesContext()

  const handleAddToFavourite = (heroSel: HeroesType) => {
    if (favourite.length === 0) {
      setFavourite([...favourite, heroSel])
    } else if (favourite.length !== 0) {
      const isFavAlready = favourite.find(
        (heroFav) => heroFav.id === heroSel.id
      )
      if (!isFavAlready) {
        setFavourite([...favourite, heroSel])
      } else {
        return
      }
    }
  }

  const handleRemoveFromFavourite = (heroSel: HeroesType) => {
    const isFavAlready = favourite.indexOf(heroSel)
    if (isFavAlready > -1) {
      const newHeroesArr = favourite.filter((hero) => hero.id !== heroSel.id)
      setFavourite(newHeroesArr)
    }
  }

  return (
    <>
      <p className="listheroes_results">{filteredHeroes.length} RESULTS</p>
      <div className="listheroes_container">
        {filteredHeroes.map((hero: HeroesType) => (
          <HeroCard
            key={hero.id}
            heroBaseURL={heroBaseURL}
            hero={hero}
            handleAddToFavourite={handleAddToFavourite}
            handleRemoveToFavourite={handleRemoveFromFavourite}
          />
        ))}
      </div>
    </>
  )
}

export default ListHeroes
