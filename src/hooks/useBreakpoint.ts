import { maxWidth } from '@styles/media'
import { useMediaQuery } from './useMediaQuery'

export function useBreakpoint() {
  const isSm = useMediaQuery(maxWidth.sm)
  const isMd = useMediaQuery(maxWidth.md)
  const isLg = useMediaQuery(maxWidth.lg)
  const isXl = useMediaQuery(maxWidth.xl)
  const is2xl = useMediaQuery(maxWidth['2xl'])

  return {
    isSm,
    isMd,
    isLg,
    isXl,
    is2xl
  }
}
