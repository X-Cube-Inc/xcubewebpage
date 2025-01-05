import { v4 } from 'uuid'

export const classNames = (...args: string[]) => args.join(' ')

export const createUniqueUUIDKey = () => v4()
