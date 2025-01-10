import { createContext } from 'react'

export const ScrollContext = createContext<number>(0)

export const ThemeContext = createContext<'open' | 'close'>('close')
