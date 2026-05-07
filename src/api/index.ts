// @ts-ignore
const BASE_URL = (import.meta.env.VITE_API_URL ?? 'https://localhost:8000') as string

export function imgUrl(path?: string | null): string {
  if (!path) return ''
  if (path.startsWith('http')) return path
  return `${BASE_URL}${path.startsWith('/') ? '' : '/'}${path}`
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, options)
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
  return res.json()
}

export interface Game {
  id: number
  name: string
  description: string
  image_url?: string
  genre_id?: number
  genre?: Genre
  players?: number
  rating?: number
}

export interface Genre {
  id: number
  name: string
}

export interface Post {
  id: number
  title: string
  body: string
  image_url?: string
  created_at: string
}

export interface Device {
  id: number
  name: string
  description: string
  image_url?: string
}

export interface TariffPlan {
  id: number
  name: string
  description: string
  price: number
  duration: number
  images?: string[]
}

export interface Pagination<T> {
  data: T[]
  total?: number
  current_page?: number
  per_page?: number
}

export const api = {
  games: {
    list: (page = 1, size = 10) =>
      request<Pagination<Game>>(`/hardware/games?size=${size}&page=${page}`),
    get: (id: number) =>
      request<Game>(`/hardware/games/${id}`),
    search: (query: string, page = 1, size = 10) =>
      request<Pagination<Game>>(`/hardware/games/search?size=${size}&page=${page}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      }),
  },
  genres: {
    list: () => request<Genre[]>('/hardware/genres'),
  },
  posts: {
    list: (page = 1, size = 10) =>
      request<Pagination<Post>>(`/hardware/posts?size=${size}&page=${page}`),
  },
  devices: {
    list: () => request<Device[]>('/hardware/devices'),
  },
  tariffPlans: {
    list: () => request<TariffPlan[]>('/hardware/tariff-plans'),
  },
  schedule: {
    create: (data: Record<string, unknown>) =>
      request('/hardware/schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }),
  },
}
