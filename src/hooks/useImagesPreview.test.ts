import { renderHook, act } from '@testing-library/react-hooks'
import { useImagesPreview, Image } from './useImagesPreview'

const images: Image[] = [
  { path: 'sample01.png', alt: 'sample01' },
  { path: 'sample02.png', alt: 'sample02' },
  { path: 'sample03.png', alt: 'sample03' },
  { path: 'sample04.png', alt: 'sample04' },
]

describe('state', () => {
  test('初期値は最初の値の画像になる', () => {
    const { result } = renderHook(() => useImagesPreview(images))
    expect(result.current.image).toEqual({ path: 'sample01.png', alt: 'sample01' })
  })

  test('インデックスの初期値を指定できる', () => {
    const { result } = renderHook(() => useImagesPreview(images, 2))
    expect(result.current.image).toEqual({ path: 'sample03.png', alt: 'sample03' })
  })
})

describe('action', () => {
  describe('前の画像に切り替える', () => {
    test('前の画像に切り替えることができる', () => {
      const { result } = renderHook(() => useImagesPreview(images, 2))
      act(() => {
        result.current.movePrev()
      })

      expect(result.current.image).toEqual({ path: 'sample02.png', alt: 'sample02' })
    })

    test('最初の画像の時は、最後の画像に切り替える', () => {
      const { result } = renderHook(() => useImagesPreview(images))
      act(() => {
        result.current.movePrev()
      })

      expect(result.current.image).toEqual({ path: 'sample04.png', alt: 'sample04' })
    })
  })

  describe('次の画像に切り替える', () => {
    test('次の画像に切り替えることができる', () => {
      const { result } = renderHook(() => useImagesPreview(images))
      act(() => {
        result.current.moveNext()
      })

      expect(result.current.image).toEqual({ path: 'sample02.png', alt: 'sample02' })
    })

    test('最後の画像の時は、最初の画像に切り替える', () => {
      const { result } = renderHook(() => useImagesPreview(images, 3))
      act(() => {
        result.current.moveNext()
      })

      expect(result.current.image).toEqual({ path: 'sample01.png', alt: 'sample01' })
    })
  })

  describe('キーボードショートカット', () => {
    test('右矢印キーを押したとき', () => {
      const { result } = renderHook(() => useImagesPreview(images))
      act(() => {
        result.current.onKeyDown('ArrowRight')
      })

      expect(result.current.image).toEqual({ path: 'sample02.png', alt: 'sample02' })
    })

    test('左矢印キーを押したとき', () => {
      const { result } = renderHook(() => useImagesPreview(images, 1))
      act(() => {
        result.current.onKeyDown('ArrowLeft')
      })

      expect(result.current.image).toEqual({ path: 'sample01.png', alt: 'sample01' })
    })

    test('それ以外のキーを押したとき', () => {
      const { result } = renderHook(() => useImagesPreview(images))
      act(() => {
        result.current.onKeyDown('arrow')
      })

      expect(result.current.image).toEqual({ path: 'sample01.png', alt: 'sample01' })
    })
  })
})
