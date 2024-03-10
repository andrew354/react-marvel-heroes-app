import { FavCharProvider } from './FavCharProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HeroesProvider } from './HeroesProvider';

const queryClient = new QueryClient();
function AppProvider({ children }: { children: React.ReactElement }) {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<HeroesProvider>
					<FavCharProvider>{children}</FavCharProvider>
				</HeroesProvider>
			</QueryClientProvider>
		</>
	);
}

export default AppProvider;
