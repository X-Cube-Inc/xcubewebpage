import { NextSeoProps } from 'next-seo'

const title = '한국 철도 데이터베이스'
const description = '한국 철도 데이터베이스 | X-Cube'
const url = 'http://ungbeom.iptime.org:3000'

const config: NextSeoProps = {
  defaultTitle: title,
  titleTemplate: `%s | ${title}`,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url,
    description,
    siteName: title
    // images: [
    //   {
    //     url: `${url}/static_og_image.png`,
    //     width: 1200,
    //     height: 530
    //   }
    // ]
  },
  additionalMetaTags: [
    {
      name: 'theme-color',
      content: '#ffffff'
    },
    {
      name: 'author',
      content: 'ICBM Labs Researchers'
    },
    {
      name: 'application-name',
      content: title
    }
    // {
    //   name: 'keywords',
    //   content: ''
    // }
  ],
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image'
  }
}

export default config
