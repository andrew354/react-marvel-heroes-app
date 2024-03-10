import { render, screen } from '@testing-library/react'
import FavouriteIcon from './FavouriteIcon'
import { WrapperProviders } from '../../pages/favourites/favourite.spec'

describe('FavouriteIcon', () => {
  beforeEach(async () => {
    render(<FavouriteIcon />, { wrapper: WrapperProviders })
  })

  it('renders FavouriteIcon component', () => {
    const heartImage = screen.getByAltText(/favouriteIcon/i)
    expect(heartImage).toBeInTheDocument()

    const headingResultsCount = screen.getByText(/2/i)
    expect(headingResultsCount).toBeInTheDocument()
  })
})
