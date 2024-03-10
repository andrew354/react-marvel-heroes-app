import { act, renderHook } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import axios from 'axios'

import {
  mockComics,
  mockHeroesContextValue,
} from '../../pages/favourites/favourite.spec'
import { useGetComicsByHero } from './useGetComics'

export type WrapperProvidersProps = {
  children: React.ReactNode
}

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({})),
}))

const mockData = {
  data: {
    data: {
      results: mockComics,
    },
  },
}

describe('useGetHeroesByName', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch comics successfully based on the id passed in the request', async () => {
    ;(axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce(
      mockData
    )

    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children?: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(() => useGetComicsByHero(1), {
      wrapper,
    })

    await act(async () => await result.current.comics)

    expect(result.current.isLoading).toBe(false)
    expect(result.current.comics).toEqual(mockComics)
    expect(result.current.error).toBeNull()
  })

  it('should load comics correctly', async () => {
    ;(axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(
      undefined
    )

    const queryClient = new QueryClient()
    const wrapper = ({ children }: { children?: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(() => useGetComicsByHero(1), {
      wrapper,
    })
    await act(async () => await result.current.comics)

    expect(result.current.isLoading).toBe(true)
    expect(result.current.comics).toEqual([])
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

    const { result } = renderHook(() => useGetComicsByHero(1), {
      wrapper,
    })
    await act(async () => await result.current.comics)

    expect(result.current.isLoading).toBe(true)
    expect(result.current.comics).toEqual([])
    expect(result.current.error).toEqual(null)
  })
})
