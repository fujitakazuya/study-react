import { useState, useCallback, useRef } from 'react'

export type Image = {
  path: string
  alt: string
  width?: number
  height?: number
}

export const useImagesPreview = (images: Image[], defaultIndex = 0) => {
  const imagesLength = images.length
  const currentIndex = useRef(defaultIndex)
  const [image, setImage] = useState(images[defaultIndex])

  /**
   * 前の画像を表示
   */
  const movePrev = useCallback(() => {
    const index = (currentIndex.current + imagesLength - 1) % imagesLength
    currentIndex.current = index
    setImage(images[index])
  }, [currentIndex, images, imagesLength])

  /**
   * 次の画像を表示
   */
  const moveNext = useCallback(() => {
    const index = (currentIndex.current + 1) % imagesLength
    currentIndex.current = index
    setImage(images[index])
  }, [currentIndex, images, imagesLength])

  /**
   * キーボードショートカット
   */
  const onKeyDown = useCallback(
    (code: string) => {
      if (code === 'ArrowRight') {
        moveNext()
      } else if (code === 'ArrowLeft') {
        movePrev()
      }
    },
    [moveNext, movePrev]
  )

  return { image, moveNext, movePrev, onKeyDown }
}
