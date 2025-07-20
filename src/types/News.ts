// NewsApi 类型（来源于 newsapi.org）
export interface NewsApi {
  title: string
  url: string
  description: string
  author: string
  source: {
    id: string | null
    name: string
  }
  content: string
  localDateTime: string // ISO 格式，如 2025-07-19T10:10:00
  urlToImage: string
}

// NewsData 类型（来源于 newsdata.io）
export interface NewsData {
  title: string
  description: string
  link: string
  image_url: string
  creator: string[]
  localDateTime: number[] // 或 string?
  pubDate: string
  pubDateTZ: string
  source_icon: string
  source_id: string
  source_name: string
  source_url: string
}
