import { useQuery } from 'react-query'
import axios from 'axios'

const getHeroes = async () => {
  const req = await axios.get(
    'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=993481ea7e6cdebabcbe7d00f17abe60&hash=7e8a39d199b852d50735a140829e0503&limit=50',
  )
  return await req.data.data.results
}

export const useGetHeroes = () => {
  const { data: heroes = [], isLoading, error } = useQuery(['HEROES'], getHeroes)

  return { isLoading, heroes, error }
}
