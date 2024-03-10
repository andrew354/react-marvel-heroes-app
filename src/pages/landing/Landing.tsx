import './landing.scss'
import { useState } from 'react'
import ListHeroes from '../../components/ListHeroes/ListHeroes'
import { useHeroesContext } from '../../providers/HeroesProvider'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useGetHeroesByName } from '../../hooks/useGetHero/useGetHero'
import Spinner from '../../components/Spinner/Spinner'
import Layout from '../../components/Layout/Layout'

const Landing = () => {
  const { heroes, isLoading } = useHeroesContext()
  const [search, setSearch] = useState('')
  const { data, isLoading: isLoadingHero } = useGetHeroesByName(search)

  return (
    <Layout>
      <div className="landing_container">
        <SearchBar value={search} setValue={setSearch} />
        {isLoading || isLoadingHero ? (
          <div className="spinner">
            <Spinner />
          </div>
        ) : (
          <>
            {
              <ListHeroes
                heroBaseURL="heroes"
                filteredHeroes={!data ? heroes : data}
              />
            }
          </>
        )}
      </div>
    </Layout>
  )
}

export default Landing
