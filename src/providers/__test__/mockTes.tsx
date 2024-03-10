import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { HeroesContext } from '../HeroesProvider'
import { FavHeroesContext } from '../FavHeroesProvider'

export type WrapperProvidersProps = {
  children: React.ReactNode
}

type WrapperLoaderProvidersProps = {
  children: React.ReactNode
}

export const mockHeroesLoadingContextValue = {
  heroes: [],
  isLoading: true,
}

export const WrapperLoaderProviders = ({
  children,
}: WrapperLoaderProvidersProps) => (
  <BrowserRouter>
    <QueryClientProvider client={new QueryClient()}>
      <HeroesContext.Provider value={mockHeroesLoadingContextValue}>
        <FavHeroesContext.Provider value={mockFavHeroesContextValue}>
          {children}
        </FavHeroesContext.Provider>
      </HeroesContext.Provider>
    </QueryClientProvider>
  </BrowserRouter>
)

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
