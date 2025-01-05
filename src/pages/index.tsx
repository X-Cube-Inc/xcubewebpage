import { useContext } from 'react'
import Link from 'next/link'

import { ScrollContext } from '@/context/ScrollContext'

import { classNames, createUniqueUUIDKey } from '@/utils'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Container from '@/components/Container'

import { UpdateLogProps } from '@/types'

import updateLogs from '../../update-log.json'

export default function Home () {
  const context = useContext(ScrollContext)

  return (
    <div>
      <Navbar
        isScrollActive={context > 0}
        defaultBackgroundColor='bg-transparent'
        activeBackgroundColor='bg-subwayRoute-capitalRegion-shinbundang'
      />
      <div
        className={classNames(
          'min-h-screen text-white',
          'bg-no-repeat bg-cover bg-center'
        )}
        style={{
          backgroundImage: 'url(/assets/metrophics_240103_ktx-cheongryong__gyeongbokgung.png)'
        }}
      >
        <div className='w-full min-h-screen bg-gradient-to-t from-black to-transparent'>
          <Container className='min-h-screen'>
            <div className='min-h-screen flex px-10 py-20'>
              <div className='self-end lg:space-y-0 space-y-4 flex lg:flex-row flex-col lg:justify-between w-full'>
                <div className='lg:self-end'>
                  <p className='font-bold text-4xl'>Korea Train Database</p>
                  <p className='font-light text-2xl'>한국 철도 데이터베이스</p>
                </div>
                <div className='lg:self-end'>
                  <p className='font-bold text-lg'>Picture by MetroPhics - Gyeongbokgung</p>
                  <p className='font-light text-base'>OpenBVE - KTX CheongRyong</p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className='px-10 py-4 text-head bg-lightGrey'>
        <Container>
          <div className='flex lg:flex-row flex-col justify-between gap-4'>
            <RouteItem
              to='/open-bve'
              title='OpenBVE'
              subtitle='Add-on'
              imageUrl='/assets/metrophics_240103_ktx-cheongryong__gyeongbokgung.png'
            />
            <RouteItem
              to='/information/route'
              title='노선 정보'
              subtitle='Route Information'
              imageUrl='/assets/naver_subway.jpg'
            />
            <RouteItem
              to='/information/station'
              title='역 정보'
              subtitle='Station Information'
              imageUrl='/assets/metrophics_240103_ktx-cheongryong__gyeongbokgung.png'
            />
          </div>
        </Container>
      </div>
      <div className='px-10 py-4 text-head'>
        <Container>
          <div>
            <p className='font-bold text-lg'>Update Log</p>
            <p className='font-light'>업데이트 로그</p>
          </div>
          <div className='bg-korail-coolGray/25 w-full h-px my-4' />
          <div>
            {
              updateLogs.datas.map((value, idx) => (
                <>
                  <UpdateLogBody
                    key={createUniqueUUIDKey()}
                    version={value.version}
                  >
                    {
                      value.details.map((detail) => (
                        <UpdateLogItem
                          key={createUniqueUUIDKey()}
                          type={detail.type as 'add' | 'edit' | 'remove'}
                          head={detail.head}
                          message={detail.message}
                        />
                      ))
                    }
                  </UpdateLogBody>
                  {
                    updateLogs.datas.length + 1 !== idx && <div className='bg-korail-coolGray/10 w-full h-px my-4' />
                  }
                </>
              ))
            }
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

function UpdateLogBody ({ children, version }: { children: React.ReactNode | React.ReactNode[], version: string }) {
  return (
    <div className='h-full w-full'>
      <div className='flex lg:flex-row flex-col h-full w-full'>
        <div className='lg:w-[120px] w-full h-full font-bold self-start lg:text-base text-lg lg:pt-1'>
          <p>{version}</p>
        </div>
        <div className='space-y-2 lg:mt-0 mt-1'>
          {children}
        </div>
      </div>
    </div>
  )
}

function UpdateLogItem ({ type, head, message }: { type: 'add' | 'edit' | 'remove', head: string, message: string }) {
  const baseClassName = 'flex px-2 py-1 rounded-md space-x-2 w-fit h-fit lg:mt-0 -mt-1'

  return (
    <div className='flex lg:flex-row flex-col gap-1'>
      <p className='self-center lg:w-[200px] w-full'>{head}</p>
      <div
        className={classNames(
          type === 'add'
            ? classNames(baseClassName, 'bg-green-400/50 text-green-800')
            : type === 'edit'
              ? classNames(baseClassName, 'bg-yellow-400/50 text-yellow-800')
              : type === 'remove'
                ? classNames(baseClassName, 'bg-red-400/50 text-red-800')
                : classNames(baseClassName, 'bg-placeholder/25 text-head')
        )}
      >
        <p className='font-bold'>
          {
            type === 'add'
              ? '+'
              : type === 'edit'
                ? '#'
                : type === 'remove'
                  ? '-'
                  : '?'
          }
        </p>
        <p>{message}</p>
      </div>
    </div>
  )
}

function RouteItem ({
  to,
  gradientColor = 'from-black/80',
  title,
  subtitle,
  imageUrl
}: {
  to: string
  gradientColor?: string,
  title: string,
  subtitle: string,
  imageUrl: string
}) {
  return (
    <Link href={to} className='w-full h-full'>
      <div
        className={classNames(
          'h-[200px] w-full rounded-[10px]',
          'bg-center bg-cover bg-no-repeat',
          'hover:scale-[1.02]',
          'border-[1px] border-basicGrey shadow-md',
          'transition duration-300 ease-in-out'
        )}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >
        <div className={classNames(
          'flex h-full px-4 py-3 rounded-[10px]',
          'bg-gradient-to-t to-transparent',
          gradientColor
        )}>
          <div className='self-end text-white'>
            <p className='font-bold text-lg'>{title}</p>
            <p className='font-light'>{subtitle}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
