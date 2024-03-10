import { ReactNode, createContext, useContext } from 'react'
import { HeroesType } from '../types/types'
import { useGetHeroes } from '../hooks/useGetHeroes/useGetHeroes'

type HeroesProviderProps = {
  children: ReactNode
}

type HeroesProviderType = {
  heroes: HeroesType[]
  isLoading: boolean
}

export const HeroesContext = createContext({} as HeroesProviderType)

export const HeroesProvider = ({ children }: HeroesProviderProps) => {
  const { isLoading, heroes } = useGetHeroes()

  return (
    <HeroesContext.Provider
      value={{
        isLoading,
        heroes,
      }}
    >
      {children}
    </HeroesContext.Provider>
  )
}

export const useHeroesContext = () => {
  const { isLoading, heroes = [] } = useContext(HeroesContext)

  return {
    isLoading,
    heroes,
  }
}
