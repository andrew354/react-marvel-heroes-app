import { render, screen } from '@testing-library/react'
import { WrapperProviders } from '../../pages/favourites/favourite.spec'
import Landing from './Landing'

describe('ListHeroes', () => {
  beforeEach(async () => {
    render(<Landing />, { wrapper: WrapperProviders })
  })
  it('renders landing page with all the imported components', () => {
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
    const listHeroesArrayResult = screen.getByText(/2 results/i)
    expect(listHeroesArrayResult).toBeInTheDocument()
  })
})
