import { act, renderHook } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import axios from 'axios';
import { useGetHeroes } from './useGetHeroes';

export type WrapperProvidersProps = {
	children: React.ReactNode;
};

jest.mock('axios', () => ({
	get: jest.fn(() => Promise.resolve({})),
}));

const mockData = {
	data: {
		data: {
			results: ['hero1', 'hero2', 'hero3'],
		},
	},
};

describe('useGetHeroes', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should fetch heroes successfully', async () => {
		(axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce(
			mockData
		);

		const queryClient = new QueryClient();
		const wrapper = ({ children }: { children?: React.ReactNode }) => (
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		);

		const { result } = renderHook(() => useGetHeroes(), {
			wrapper,
		});

		await act(async () => await result.current.heroes);

		expect(result.current.isLoading).toBe(false);
		expect(result.current.heroes).toEqual(['hero1', 'hero2', 'hero3']);
		expect(result.current.error).toBeNull();
	});

	it('should handle error', async () => {
		const errorMessage = 'Failed to fetch heroes';
		(axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(
			new Error(errorMessage)
		);

		const queryClient = new QueryClient();
		const wrapper = ({ children }: { children?: React.ReactNode }) => (
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		);

		const { result } = renderHook(() => useGetHeroes(), {
			wrapper,
		});

		expect(result.current.isLoading).toBe(true);
		expect(result.current.heroes).toEqual([]);
		expect(result.current.error).toEqual(null);
	});
});
