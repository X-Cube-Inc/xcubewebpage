import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='ko'>
      <Head />
      <body className='dark:bg-[var(--dark-background)] bg-[--light-background]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
