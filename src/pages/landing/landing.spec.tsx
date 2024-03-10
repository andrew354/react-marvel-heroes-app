import { render, screen } from '@testing-library/react'
import Landing from './Landing'
import {
  WrapperLoaderProviders,
  WrapperProviders,
} from '../../providers/__test__/mockTes'

describe('Landing', () => {
  it('renders landing page with all the imported components', () => {
    render(<Landing />, { wrapper: WrapperProviders })
    const headerMarvelLogo = screen.getByAltText(
      /marvelLogo/i
    ) as HTMLImageElement
    expect(headerMarvelLogo).toBeInTheDocument()
    expect(headerMarvelLogo.src).toContain('MarvelLogo.svg')

    const headerFavouriteLogo = screen.getByAltText(
      /favouriteLogo/i
    ) as HTMLImageElement
    expect(headerFavouriteLogo).toBeInTheDocument()
    expect(headerFavouriteLogo.src).toContain('heartFull.svg')

    const searchBarLogo = screen.getByAltText(/searchIcon/i) as HTMLImageElement
    expect(searchBarLogo).toBeInTheDocument()
    expect(searchBarLogo.src).toContain('searchIcon.svg')

    const inputSearchBar = screen.getByPlaceholderText(/search a character/i)
    expect(inputSearchBar).toBeInTheDocument()
  })

  it('renders the length of heroes array', () => {
    render(<Landing />, { wrapper: WrapperProviders })
    const listHeroesArrayResult = screen.getByText(/2 results/i)
    expect(listHeroesArrayResult).toBeInTheDocument()
  })

  it('show the spinner when loading heroes request', () => {
    render(<Landing />, { wrapper: WrapperLoaderProviders })
    const spinner = screen.getByTestId('spinner')
    expect(spinner).toBeInTheDocument()
  })
})
