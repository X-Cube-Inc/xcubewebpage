import React from 'react'
import Container from './Container'

export default function Footer () {
  const options = (url: string): React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> => ({
    className: 'underline cursor-pointer',
    onClick: () => window.open(url)
  })

  return (
    <div className='w-full bg-white pt-10 pb-20 px-10'>
      <Container>
        <div className='text-head font-light text-sm'>
          <p className='font-semibold text-lg'>Korea Train Database</p>
          <p>&copy; 2024 Ungbeom-Kang</p>
          <p>Created using <span {...options('https://nextjs.org/')}>NextJS</span> and <span {...options('https://tailwindcss.com/')}>TailwindCSS</span></p>
          <p className='mt-2'>Site reference by <span {...options('https://www.redwingspace.com/')}>RedWingSpace</span></p>
        </div>
      </Container>
    </div>
  )
}
