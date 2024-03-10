import { act, renderHook } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import axios from 'axios'
import { useGetHeroesByName } from './useGetHero'
import { mockHeroesContextValue } from '../../pages/favourites/favourite.spec'

export type WrapperProvidersProps = {
  children: React.ReactNode
}

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({})),
}))

const mockData = {
  data: {
    data: {
      results: mockHeroesContextValue.heroes[1],
    },
  },
}

describe('useGetHeroesByName', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch heroes successfully based on the name passed in the request', async () => {
    ;(axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce(
      mockData
    )

    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children?: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(() => useGetHeroesByName('spider'), {
      wrapper,
    })

    await act(async () => await result.current.data)

    expect(result.current.isLoading).toBe(false)
    expect(result.current.data).toEqual(mockHeroesContextValue.heroes[1])
    expect(result.current.error).toBeNull()
  })

  it('should load heroes correctly', async () => {
    ;(axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(
      undefined
    )

    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children?: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(() => useGetHeroesByName('spider'), {
      wrapper,
    })
    await act(async () => await result.current.data)

    expect(result.current.isLoading).toBe(true)
    expect(result.current.data).toEqual(undefined)
    expect(result.current.error).toEqual(null)
  })

  it('should handle error', async () => {
    const errorMessage = 'Failed to fetch heroes'
    ;(axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(
      new Error(errorMessage)
    )

    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children?: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(() => useGetHeroesByName('spider'), {
      wrapper,
    })
    await act(async () => await result.current.data)

    expect(result.current.isLoading).toBe(true)
    expect(result.current.data).toEqual(undefined)
    expect(result.current.error).toEqual(null)
  })
})
