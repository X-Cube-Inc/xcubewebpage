import { classNames } from '@/utils'

export default function Container ({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <div className={classNames('container mx-auto max-w-[1600px]', className)}>
    {children}
  </div>
}
