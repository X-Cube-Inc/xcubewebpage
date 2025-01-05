import { classNames } from '@/utils'

export default function TopButton ({ isActiveScroll }: { isActiveScroll: boolean }) {
  return (
    <div
      className={classNames(
        'fixed top-0 bottom-0 left-0 right-0',
        'w-fit h-fit mx-auto'
      )}
    >
      <div className='relative w-full h-full'>
        <div
          className={classNames(
            'fixed w-[50px] h-[50px] bg-white group hover:bg-subwayRoute-capitalRegion-shinbundang rounded-full',
            'border-[1px] border-subwayRoute-capitalRegion-shinbundang shadow-md',
            'lg:right-[80px] right-[40px] bottom-[40px] cursor-pointer',
            'transition duration-[300ms] ease-in-out',
            isActiveScroll ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className='w-full h-full flex justify-center'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-5 self-center text-head group-hover:text-white'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
