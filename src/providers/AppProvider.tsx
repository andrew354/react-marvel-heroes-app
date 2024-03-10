import { FavHeroesProvider } from './FavHeroesProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { HeroesProvider } from './HeroesProvider'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()
function AppProvider({ children }: { children: React.ReactElement }) {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <HeroesProvider>
            <FavHeroesProvider>{children}</FavHeroesProvider>
          </HeroesProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  )
}

export default AppProvider
