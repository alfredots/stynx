import { useEffect, useRef } from 'react'

export const useTimeout = (callback, delay) => {
  const savedCallback = useRef(null)
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  useEffect(() => {
    const tick = () => {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setTimeout(tick, delay)
      return () => clearTimeout(id)
    }
  }, [delay])
}
