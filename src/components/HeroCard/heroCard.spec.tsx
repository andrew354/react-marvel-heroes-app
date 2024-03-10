import { render, screen } from '@testing-library/react'
import HeroCard from './HeroCard'
import {
  WrapperProviders,
  mockHeroesContextValue,
} from '../../providers/__test__/mockTes'

const handleAddToFavourite = jest.fn()
const handleRemoveToFavourite = jest.fn()

describe('HeroCard', () => {
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
