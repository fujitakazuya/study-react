import { useEffect, useCallback, useRef } from 'react'

export const useOutsideClick = <T extends HTMLElement>(onClose: () => void) => {
  const ref = useRef<T>(null)

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (!event.target) {
        return
      }

      const inside = !!ref.current?.contains(event.target as Node)
      if (inside) {
        return
      }

      onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  }, [handleClick])

  return ref
}
