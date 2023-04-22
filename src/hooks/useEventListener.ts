import { useRef, useEffect } from 'react'

export const useEventListener = (type, handler, el = window) => {
  const savedHandler = useRef(null)

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const listener = (e) => savedHandler.current(e)
    el.addEventListener(type, listener)
    return () => {
      el.removeEventListener(type, listener)
    }
  }, [type, el])
}
