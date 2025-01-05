import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import Layout from '@/components/layout'

import NextSeConfig from '../../next-seo.config'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo {...NextSeConfig} />
      <Component {...pageProps} />
    </Layout>
  )
}
