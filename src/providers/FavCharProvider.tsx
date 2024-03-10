import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'
import { HeroesType } from '../types/types'

type FavHeroesProviderProps = {
  children: ReactNode
}

type FavHeroesProvider = {
  favourite: HeroesType[]
  setFavourite: Dispatch<SetStateAction<HeroesType[]>>
}

export const FavHeroesContext = createContext({} as FavHeroesProvider)

export const FavCharProvider = ({ children }: FavHeroesProviderProps) => {
  const [favourite, setFavourite] = useState<HeroesType[]>([])
  return (
    <FavHeroesContext.Provider
      value={{
        favourite,
        setFavourite,
      }}
    >
      {children}
    </FavHeroesContext.Provider>
  )
}

export const useFavHeroesContext = () => {
  const { favourite, setFavourite } = useContext(FavHeroesContext)

  return {
    favourite,
    setFavourite,
  }
}
