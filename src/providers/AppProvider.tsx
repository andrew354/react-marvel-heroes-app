import { FavCharProvider } from './FavCharProvider'
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
            <FavCharProvider>{children}</FavCharProvider>
          </HeroesProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  )
}

export default AppProvider
