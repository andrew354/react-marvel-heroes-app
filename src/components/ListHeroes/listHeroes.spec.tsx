import { render, screen } from '@testing-library/react'
import ListHeroes from './ListHeroes'
import {
  WrapperProviders,
  mockHeroesContextValue,
} from '../../providers/__test__/mockTes'

describe('ListHeroes', () => {
  beforeEach(async () => {
    render(
      <ListHeroes
        filteredHeroes={mockHeroesContextValue.heroes}
        heroBaseURL={'heroes'}
      />,
      { wrapper: WrapperProviders }
    )
  })
  it('renders ListHeroes component', () => {
    const heroOne = screen.getByText(/iron man/i) as HTMLImageElement
    const heroOneImage = screen.getByAltText(
      /Iron Man-heroIcon/i
    ) as HTMLImageElement
    expect(heroOne).toBeInTheDocument()
    expect(heroOneImage.src).toContain('image-url-ironman.png')

    const heroTwo = screen.getByText(/spider-man/i)
    const heroTwoImage = screen.getByAltText(
      /Spider-Man-heroIcon/i
    ) as HTMLImageElement

    expect(heroTwo).toBeInTheDocument()
    expect(heroTwoImage.src).toContain('image-url-spiderman.png')
  })

  it('renders the length of heroes array', () => {
    const headingResultsCount = screen.getByText(/2/i)
    expect(headingResultsCount).toBeInTheDocument()
  })
})
