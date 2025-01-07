import { NextSeo, NextSeoProps } from 'next-seo'

export default function useSeo ({ title, themeColor }: NextSeoProps) {
  return NextSeo({ title, themeColor })
}
