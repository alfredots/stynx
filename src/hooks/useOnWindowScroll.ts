import { useRef, useEffect } from 'react'

export const useOnWindowScroll = (callback) => {
  const listener = useRef(null)
  useEffect(() => {
    if (listener.current) window.removeEventListener('scroll', listener.current)
    listener.current = window.addEventListener('scroll', callback)
    return () => {
      window.removeEventListener('scroll', listener.current)
    }
  }, [callback])
}
