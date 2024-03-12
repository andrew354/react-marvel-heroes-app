import './searchBar.scss'
import SearchIcon from '../../assets/images/searchIcon.svg'
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
} from 'react'
import debounce from 'lodash.debounce'

type SearchBarProps = {
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

const SearchBar = ({ setValue }: SearchBarProps) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.trim())
  }

  const debouncedResults = useMemo(() => {
    return debounce(handleOnChange, 1500)
  }, [])

  useEffect(() => {
    return () => {
      debouncedResults.cancel()
    }
  }, [])

  return (
    <div className="searchBar_container">
      <img src={SearchIcon} alt="searchIcon" />
      <input
        onChange={debouncedResults}
        placeholder="SEARCH A CHARACTER"
        type="text"
      />
    </div>
  )
}

export default SearchBar
