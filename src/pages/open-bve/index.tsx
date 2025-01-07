import { useContext } from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { ScrollContext } from '@/context/ScrollContext'

import { classNames, createUniqueUUIDKey } from '@/utils'

import { OpenBVEProps } from '@/types'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Container from '@/components/Container'

import OpenBVEs from '@/structures/openbve.json'

export default function OpenBVE () {
  const context = useContext(ScrollContext)

  return (
    <div>
      <NextSeo title='OpenBVE Add-on > 홈' /* themeColor='#003da5' */ />
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
            <div className='h-full flex px-10 lg:py-20 py-10'>
              <div className='self-end lg:space-y-0 space-y-4 flex lg:flex-row flex-col lg:justify-between w-full'>
                <div className='lg:self-end'>
                  <p className='font-bold lg:text-4xl text-3xl'>Korea Train Database</p>
                  <p className='font-light lg:text-2xl text-xl'>OpenBVE Add-on</p>
                </div>
                <div className='lg:self-end text-right'>
                  <p className='font-bold lg:text-lg text-base'>Picture by BVE_Data</p>
                  <div className='font-light'>
                    <p className='lg:text-base text-sm'>Capital Region Subway Line 1 Express</p>
                    <p className='lg:text-sm text-xs'>Dongincheon - Guro</p>
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
            {
              (OpenBVEs.datas as OpenBVEProps[]).map((value) => (
                <ItemCard
                  key={createUniqueUUIDKey()}
                  {...value}
                />
              ))
            }
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

function ItemCard ({
  to,
  target = '',
  head = 'OpenBVE',
  title,
  subtitle,
  route,
  image,
  createdAt,
  updatedAt
}: OpenBVEProps) {
  return (
    <Link href={to} target={target}>
      <div
        className={classNames(
          'w-full h-[160px] border-[1px] border-basicGrey rounded-[15px] shadow-md',
          'bg-cover bg-center bg-no-repeat bg-white text-white',
          'hover:scale-[1.02]'
        )}
        style={{
          backgroundImage: `url(${image.url}), linear-gradient(to right, #000, #adadad)`,
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className='flex justify-between px-4 py-4 h-full'>
          <div className='font-medium h-full w-full flex flex-col justify-between'>
            <p className='lg:text-sm text-xs'>{head}</p>
            <div className=''>
              <p className='font-bold lg:text-xl text-lg'>{title}{subtitle && <sup className='uppercase ml-1 font-normal text-xs'>{subtitle}</sup>}</p>
              <p className='lg:text-base text-sm'>{route}</p>
            </div>
            <p className='text-basicGrey lg:text-sm text-xs'>
              {
                updatedAt
                  ? `${updatedAt} 업데이트`
                  : createdAt
                    ? `${createdAt} 출시`
                    : ''
              }
            </p>
          </div>
          <div className='self-end w-full text-right'>
            <p className='font-bold lg:text-sm text-xs'>Picture by {image.author}</p>
            <div className='font-light lg:text-xs text-[10px]'>
              <p>{image.title}</p>
              <p>{image.route}</p>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </Link>
  )
}
