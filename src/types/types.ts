export type ThumbnailType = {
  extension: string
  path: string
}

export type HeroesType = {
  id: number
  comics: ComicType[]
  name: string
  thumbnail: ThumbnailType
  description: string
}

export type ComicType = {
  id: number
  year: string
  title: string
  thumbnail: ThumbnailType
}
