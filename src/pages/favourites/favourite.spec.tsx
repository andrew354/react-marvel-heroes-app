import { render, screen } from '@testing-library/react'
import Favourites from './Favourites'
import { FavHeroesContext } from '../../providers/FavHeroesProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { HeroesContext } from '../../providers/HeroesProvider'
import { BrowserRouter } from 'react-router-dom'

export type WrapperProvidersProps = {
  children: React.ReactNode
}

export const mockComics = [
  {
    id: 1,
    year: '1990',
    title: 'Spider-Man Comics One',
    thumbnail: {
      extension: 'png',
      path: 'image-url-spiderman-comics-one',
    },
  },
  {
    id: 2,
    year: '1992',
    title: 'Spider-Man Comics Two',
    thumbnail: {
      extension: 'png',
      path: 'image-url-spiderman-comics-two',
    },
  },
]

export const mockHeroesContextValue = {
  isLoading: false,
  heroes: [
    {
      id: 1,
      name: 'Iron Man',
      description: 'description',
      thumbnail: { extension: 'png', path: 'image-url-ironman' },
      comics: [
        {
          id: 1,
          year: '1990',
          title: 'Iron Man Comics One',
          thumbnail: {
            extension: 'png',
            path: 'image-url-ironman-comics-one',
          },
        },
        {
          id: 2,
          year: '1992',
          title: 'Iron Man Comics Two',
          thumbnail: {
            extension: 'png',
            path: 'image-url-ironman-comics-two',
          },
        },
      ],
    },
    {
      id: 2,
      name: 'Spider-Man',
      description: 'description',
      thumbnail: { extension: 'png', path: 'image-url-spiderman' },
      comics: mockComics,
    },
  ],
}

export const mockFavHeroesContextValue = {
  setFavourite: jest.fn(),
  favourite: [
    {
      id: 1,
      name: 'Iron Man',
      description: 'description',
      thumbnail: { extension: 'jpg', path: 'image-url-ironman' },
      comics: [
        {
          id: 1,
          year: '1990',
          title: 'Iron Man Comics One',
          thumbnail: {
            extension: 'jpg',
            path: 'image-url-ironman-comics-one',
          },
        },
        {
          id: 2,
          year: '1992',
          title: 'Iron Man Comics Two',
          thumbnail: {
            extension: 'jpg',
            path: 'image-url-ironman-comics-two',
          },
        },
      ],
    },
    {
      id: 2,
      name: 'Spider-Man',
      description: 'description',
      thumbnail: { extension: 'jpg', path: 'image-url-spiderman' },
      comics: [
        {
          id: 1,
          year: '1990',
          title: 'Spider-Man Comics One',
          thumbnail: {
            extension: 'jpg',
            path: 'image-url-spiderman-comics-one',
          },
        },
        {
          id: 2,
          year: '1992',
          title: 'Spider-Man Comics Two',
          thumbnail: {
            extension: 'jpg',
            path: 'image-url-spiderman-comics-two',
          },
        },
      ],
    },
  ],
}

export const WrapperProviders = ({ children }: WrapperProvidersProps) => (
  <BrowserRouter>
    <QueryClientProvider client={new QueryClient()}>
      <HeroesContext.Provider value={mockHeroesContextValue}>
        <FavHeroesContext.Provider value={mockFavHeroesContextValue}>
          {children}
        </FavHeroesContext.Provider>
      </HeroesContext.Provider>
    </QueryClientProvider>
  </BrowserRouter>
)

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
