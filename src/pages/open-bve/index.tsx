import React, { useContext } from 'react'

import { ScrollContext } from '@/context/ScrollContext'

import { classNames } from '@/utils'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Container from '@/components/Container'
import Link from 'next/link'

export default function OpenBVE () {
  const context = useContext(ScrollContext)

  return (
    <div className='w-full h-full'>
      <Navbar
        isScrollActive={context > 0}
        defaultBackgroundColor='bg-transparent'
        activeBackgroundColor='bg-korail-blue'
      />
      <div
        className={classNames(
          'h-[400px] text-white',
          'bg-no-repeat bg-cover bg-center'
        )}
        style={{
          backgroundImage: 'url(/assets/subway-express_capitalRegion_Dongincehon-Guro__bve-data.png)'
        }}
      >
        <div className='w-full h-full bg-gradient-to-t from-black to-transparent'>
          <Container className='h-full'>
            <div className='h-full flex px-10 py-20'>
              <div className='self-end lg:space-y-0 space-y-4 flex lg:flex-row flex-col lg:justify-between w-full'>
                <div className='lg:self-end'>
                  <p className='font-bold text-4xl'>Korea Train Database</p>
                  <p className='font-light text-2xl'>OpenBVE Add-on</p>
                </div>
                <div className='lg:self-end'>
                  <p className='font-bold text-lg'>Picture by BVE_Data</p>
                  <div className='font-light'>
                    <p className='text-base'>OpenBVE - Capital Region Subway Line 1 Express</p>
                    <p className='text-sm'>Dongincheon - Guro</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className='p-4 text-head min-h-screen'>
        <Container>
          <div className='lg:grid flex flex-col grid-cols-3 gap-4'>
            <ItemCard
              to='/open-bve/subway/capitalRegion/line1?route=Dongincheon-Guro'
              head='OpenBVE - Subway'
              title='경인선 급행'
              subtitle='동인천 - 구로'
              image={
                {
                  url: '/assets/subway-express_capitalRegion_Dongincehon-Guro__bve-data.png',
                  author: 'BVE_data',
                  title: 'Capital Region Subway Line 1 Express',
                  route: 'Dongincheon - Guro'
                }
              }
            />
            <ItemCard
              to='/open-bve/railway/honam-srt?route=Gwangju_Songjeong-Suseo'
              head='OpenBVE - Railway'
              title='호남선 SRT'
              subtitle='광주송정 - 수서'
              image={
                {
                  url: '/assets/railway_honame-expressway-srt__redwing.png',
                  author: 'RedWing',
                  title: 'Honam Expressway SRT',
                  route: 'Gwangju-Songjeong - Suseo'
                }
              }
            />
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

function ItemCard ({
  to,
  head = 'OpenBVE',
  title,
  subtitle,
  image,
  updateAt
}: {
  to: string
  head?: string
  title: string
  subtitle: string
  image: {
    url: string
    author: string
    title: string
    route: string
  }
  updateAt?: string
}) {
  return (
    <Link href={to}>
      <div
        className={classNames(
          'w-full h-[160px] border-[1px] border-basicGrey rounded-[15px] shadow-md',
          'bg-cover bg-center bg-no-repeat bg-white text-white',
          'hover:scale-[1.02]'
        )}
        style={{
          backgroundImage: `url(${image.url}), linear-gradient(to right, #000, #7d8395)`,
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className='flex justify-between px-6 py-4 h-full'>
          <div className='font-medium h-full w-1/2'>
            <p className='text-sm'>{head}</p>
            <div className='my-4'>
              <p className='font-bold text-xl'>{title}</p>
              <p>{subtitle}</p>
            </div>
            {updateAt && <p className='text-basicGrey text-sm'>{updateAt} 업데이트</p>}
          </div>
          <div className='self-end w-full text-right'>
            <p className='font-bold text-sm'>Picture by {image.author}</p>
            <div className='font-light'>
              <p className='text-xs'>OpenBVE - {image.title}</p>
              <p className='text-xs'>{image.route}</p>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </Link>
  )
}
