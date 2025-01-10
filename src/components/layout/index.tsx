import localFont from 'next/font/local'

import useScroll from '@/hooks/useScroll'

import { ScrollContext } from '@/context'

import TopButton from './TopButton'

const pretendard = localFont({
  src: '../../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard'
})

export default function Layout ({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  const pos = useScroll()

  return (
    <div className={pretendard.className}>
      <ScrollContext.Provider value={pos.scrollY}>
        {children}
        <TopButton isActiveScroll={pos.scrollY > 0} />
      </ScrollContext.Provider>
    </div>
  )
}
