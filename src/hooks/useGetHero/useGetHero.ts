import { useQuery } from 'react-query'
import axios from 'axios'

export const getHeroe = async (heroName: string) => {
  const req = await axios.get(
    `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${heroName}&ts=1&apikey=993481ea7e6cdebabcbe7d00f17abe60&hash=7e8a39d199b852d50735a140829e0503`,
  )
  return await req.data.data.results
}

export const useGetHeroe = (heroName: string) => {
  const { data, isLoading, error } = useQuery(['HERO', heroName], () => getHeroe(heroName), {
    enabled: Boolean(heroName),
  })

  return { isLoading, data, error }
}

export const getHeroById = async (id: number) => {
  const req = await axios.get(
    `https://gateway.marvel.com/v1/public/characters/${id}?&ts=1&apikey=993481ea7e6cdebabcbe7d00f17abe60&hash=7e8a39d199b852d50735a140829e0503`,
  )
  return req.data.data.results
}

export const useGetHeroById = (id: number) => {
  const { data, isLoading, error } = useQuery(['HEROBYID', id], () => getHeroById(id))

  return { data, isLoading, error }
}
