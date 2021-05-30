import { useState, useCallback } from 'react'

export const useToggle = (defaultIsOpen = false): [boolean, () => void] => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen)

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return [isOpen, toggle]
}
