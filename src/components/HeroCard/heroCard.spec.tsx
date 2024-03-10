import { render, screen } from '@testing-library/react'
import {
  WrapperProviders,
  mockHeroesContextValue,
} from '../../pages/favourites/favourite.spec'
import HeroCard from './HeroCard'

const handleAddToFavourite = jest.fn()
const handleRemoveToFavourite = jest.fn()

describe('Header', () => {
  beforeEach(async () => {
    render(
      <HeroCard
        hero={mockHeroesContextValue.heroes[0]}
        heroBaseURL={'heroes'}
        handleAddToFavourite={handleAddToFavourite}
        handleRemoveToFavourite={handleRemoveToFavourite}
      />,
      { wrapper: WrapperProviders }
    )
  })
  it('renders HeroCard component', () => {
    const heroImage = screen.getByAltText(
      /Iron Man-heroIcon/i
    ) as HTMLImageElement
    expect(heroImage).toBeInTheDocument()
    expect(heroImage.src).toContain('image-url-ironman.png')

    const heroName = screen.getByText(/iron man/i)
    expect(heroName).toBeInTheDocument()
  })
})
