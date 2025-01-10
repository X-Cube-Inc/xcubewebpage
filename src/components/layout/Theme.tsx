import React, { useEffect, useRef, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'

import { classNames } from '@/utils'

const UpdateTheme = () => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

type SettingType = 'light' | 'dark' | 'system'

/**
 * Reference by TailwindCSS
 * https://github.com/tailwindlabs/tailwindcss.com/blob/master/src/components/ThemeToggle.js
 */

export default function Theme () {
  const init = useRef(true)
  const [setting, setSetting] = useState<SettingType>()

  const className = (val: SettingType) => classNames(
    'group flex w-full gap-2 py-1.5 px-2 rounded-lg lg:text-sm text-xs',
    'data-[focus]:bg-head/10 dark:data-[focus]:bg-placeholder/10 data-[focus]:text-korail-blue dark:data-[focus]:text-yellow-500',
    setting === val ? 'bg-head/10 dark:bg-placeholder/15 text-korail-blue dark:text-yellow-500' : ''
  )

  useIsomorphicLayoutEffect(() => {
    const theme = localStorage.theme

    if (theme === 'light' || theme === 'dark') {
      setSetting(theme)
    } else {
      setSetting('system')
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (setting === 'system') {
      localStorage.removeItem('theme')
    } else if (setting === 'light' || setting === 'dark') {
      localStorage.theme = setting
    }
    if (init.current) {
      init.current = false
    } else {
      UpdateTheme()
    }
  }, [setting])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    if (mediaQuery?.addEventListener) mediaQuery.addEventListener('change', UpdateTheme)
    else mediaQuery.addListener(UpdateTheme)

    const onStorage = () => {
      UpdateTheme()

      const theme = localStorage.theme

      if (theme === 'light' || theme === 'dark') {
        setSetting(theme)
      } else {
        setSetting('system')
      }
    }

    window.addEventListener('storage', onStorage)

    return () => {
      if (mediaQuery?.removeEventListener) mediaQuery.removeEventListener('change', UpdateTheme)
      else mediaQuery.removeListener(UpdateTheme)

      window.removeEventListener('storage', onStorage)
    }
  }, [])

  const options = (value: SettingType): React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> => ({
    className: className(value),
    onClick: () => setSetting(value)
  })

  return (
    <>
      <Menu>
        <MenuButton>
          <div
            className={classNames(
              setting !== 'system'
                ? 'text-korail-blue dark:text-yellow-500'
                : 'text-head dark:text-white'
            )}
          >
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-5 dark:hidden block'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z' />
            </svg>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-5 dark:block hidden'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z' />
            </svg>
          </div>
        </MenuButton>
        <MenuItems
          transition
          anchor='bottom end'
          className={classNames(
            'w-52 origin-top-right rounded-lg p-1 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] data-[closed]:scale-95 data-[closed]:opacity-0 shadow-md mt-2',
            'border-[1px] border-basicGrey bg-white text-head',
            'dark:bg-discord-dark2 dark:border-basicGrey/15 dark:text-white'
          )}
        >
          <MenuItem>
            <button {...options('light')}>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-5'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z' />
              </svg>
              <p className='self-center'>Light</p>
            </button>
          </MenuItem>
          <MenuItem>
            <button {...options('dark')}>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-5'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z' />
              </svg>
              <p className='self-center'>Dark</p>
            </button>
          </MenuItem>
          <MenuItem>
            <button {...options('system')}>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-5'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25' />
              </svg>
              <p className='self-center'>System</p>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </>
  )
}
