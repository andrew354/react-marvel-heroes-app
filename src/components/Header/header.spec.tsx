import { render, screen } from '@testing-library/react'

import Header from './Header'
import { WrapperProviders } from '../../providers/__test__/mockTes'

describe('Header', () => {
  beforeEach(async () => {
    render(<Header />, { wrapper: WrapperProviders })
  })
  it('renders Header component', () => {
    const marvelLogo = screen.getByAltText(/marvelLogo/i) as HTMLImageElement
    expect(marvelLogo).toBeInTheDocument()
    expect(marvelLogo.src).toContain('MarvelLogo.svg')

    const heartLogo = screen.getByAltText(/favouriteLogo/i) as HTMLImageElement
    expect(heartLogo).toBeInTheDocument()
    expect(heartLogo.src).toContain('heartFull.svg')
  })

  it('renders the length of favourite array', () => {
    const headingResultsCount = screen.getByText(/2/i)
    expect(headingResultsCount).toBeInTheDocument()
  })
})
