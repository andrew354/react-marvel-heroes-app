import { render, screen } from '@testing-library/react'
import Favourites from './Favourites'
import { WrapperProviders } from '../../providers/__test__/mockTes'

describe('Favourites', () => {
  beforeEach(async () => {
    render(<Favourites />, { wrapper: WrapperProviders })
  })
  it('renders Favourites component', () => {
    const headingElement = screen.getByText(/Favourites/i)
    expect(headingElement).toBeInTheDocument()

    const headingResultsCount = screen.getByText(/2 RESULTS/i)
    expect(headingResultsCount).toBeInTheDocument()

    const ironManElement = screen.getByText(/Iron Man/i)
    expect(ironManElement).toBeInTheDocument()

    const spiderManElement = screen.getByText(/Spider-Man/i)
    expect(spiderManElement).toBeInTheDocument()

    const ironManImage = screen.getByAltText(
      /Iron Man-heroIcon/
    ) as HTMLImageElement
    expect(ironManImage.src).toContain('image-url-ironman.jpg')
    expect(ironManImage).toBeInTheDocument()

    const spiderManImage = screen.getByAltText(
      /Spider-Man-heroIcon/
    ) as HTMLImageElement
    expect(spiderManImage.src).toContain('image-url-spiderman.jpg')
    expect(spiderManImage).toBeInTheDocument()
  })
})
