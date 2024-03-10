import axios from 'axios'
import { useQuery } from 'react-query'
import { ComicType } from '../../types/types'

export const getComicsByHero = async (id: number) => {
  const res = await axios.get(
    `https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&apikey=993481ea7e6cdebabcbe7d00f17abe60&hash=7e8a39d199b852d50735a140829e0503`,
  )
  return res.data.data.results as ComicType[]
}

export const useGetComicsByHero = (id: number) => {
  const { data: comics = [], isLoading, error } = useQuery(['COMICS', id], () => getComicsByHero(id))
  return {
    comics,
    isLoading,
    error,
  }
}
