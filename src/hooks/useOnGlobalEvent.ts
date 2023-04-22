import { useRef, useEffect } from 'react'

export const useOnGlobalEvent = (type, callback, options) => {
  const listener = useRef(null)
  const previousProps = useRef({ type, options })
  useEffect(() => {
    if (listener.current) {
      window.removeEventListener(type, listener.current, options)
    }
    listener.current = window.addEventListener(type, callback, options)
    previousProps.current = { type, options }
    return () => {
      window.removeEventListener(type, listener.current, options)
    }
  }, [callback, type, options])
}
