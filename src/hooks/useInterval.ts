import { useRef, useEffect } from 'react'

export const useInterval = (callback, delay) => {
  const savedCallback = useRef(null)
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  useEffect(() => {
    const tick = () => {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
