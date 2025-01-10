import Container from './Container'
import Theme from './layout/Theme'

export default function Footer () {
  const options = (url: string): React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> => ({
    className: 'underline cursor-pointer',
    onClick: () => window.open(url)
  })

  return (
    <div className='w-full pt-10 pb-20 px-10 bg-white dark:bg-discord-dark2'>
      <Container>
        <div className='flex justify-between'>
          <div className='text-head dark:text-white font-light text-sm'>
            <p className='font-semibold text-lg'>Korea Train Database</p>
            <p>&copy; 2024 Ungbeom-Kang</p>
            <p>Created using <span {...options('https://nextjs.org/')}>NextJS</span> and <span {...options('https://tailwindcss.com/')}>TailwindCSS</span></p>
            <p className='mt-2'>Site reference by <span {...options('https://www.redwingspace.com/')}>RedWingSpace</span></p>
          </div>
          <div>
            <Theme />
          </div>
        </div>
      </Container>
    </div>
  )
}
