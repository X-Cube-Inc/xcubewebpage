import useScroll from '@/hooks/useScroll'

import { ScrollContext } from '@/context/ScrollContext'

import TopButton from './TopButton'

export default function Layout ({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  const pos = useScroll()

  return (
    <ScrollContext.Provider value={pos.scrollY}>
      {children}
      <TopButton isActiveScroll={pos.scrollY > 0} />
    </ScrollContext.Provider>
  )
}
