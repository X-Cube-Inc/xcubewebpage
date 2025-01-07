import { NextSeoProps } from 'next-seo'

const title = '한국 철도 데이터베이스'
const description = '대한민국의 지하철, 기차 등 철도에 관한 모든 정보를 다루는 KTD, 한국 철도 데이터베이스에서 만나보세요.'
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
      content: 'Ungbeom-Kang'
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
