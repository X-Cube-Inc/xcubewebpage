export interface OpenBVEProps {
  to: string
  target: React.HTMLAttributeAnchorTarget
  head: string
  title: string
  subtitle?: string
  route: string
  image: OpenBVEImageProps
}

export interface OpenBVEImageProps {
  url: string
  author: string
  title: string
  route: string
}

export interface UpdateLogProps {
  version: string
  details: UpdateLogDetailProps[]
}

export type UpdateLogDetailTypes = 'add' | 'edit' | 'remove'

export interface UpdateLogDetailProps {
  type: UpdateLogDetailTypes
  head: string
  message: string
}
