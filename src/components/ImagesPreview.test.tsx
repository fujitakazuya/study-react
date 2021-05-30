import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { ImagesPreview } from './ImagesPreview'
import type { Image } from '../hooks/useImagesPreview'

const images: Image[] = [
  { path: 'sample01.png', alt: 'sample01' },
  { path: 'sample02.png', alt: 'sample02' },
  { path: 'sample03.png', alt: 'sample03' },
  { path: 'sample04.png', alt: 'sample04' },
]

describe('state', () => {
  test('デフォルトでは先頭の画像が表示されること', () => {
    const toggle = jest.fn()
    render(<ImagesPreview images={images} toggle={toggle} isOpen />)

    expect(screen.getByAltText('sample01')).toBeInTheDocument()
  })

  test('最初に表示する画像を指定できること', () => {
    const toggle = jest.fn()
    render(<ImagesPreview images={images} toggle={toggle} isOpen selectImageIndex={2} />)

    expect(screen.getByAltText('sample03')).toBeInTheDocument()
  })
})

describe('action', () => {
  let toggle: jest.Mock
  beforeEach(() => {
    toggle = jest.fn()
    render(<ImagesPreview images={images} toggle={toggle} isOpen selectImageIndex={1} />)
  })

  test('NEXTボタンをクリックすることで、次の画像に切り替わること', () => {
    userEvent.click(screen.getByLabelText('次の画像を表示'))
    expect(screen.getByAltText('sample03')).toBeInTheDocument()
  })

  test('右矢印キーを押すことで、次の画像に切り替わること', () => {
    userEvent.click(screen.getByTestId('previewContent'))
    userEvent.keyboard('{arrowright}')
    expect(screen.getByAltText('sample03')).toBeInTheDocument()
  })

  test('PREVボタンをクリックすることで、前の画像に切り替わること', () => {
    userEvent.click(screen.getByLabelText('前の画像を表示'))
    expect(screen.getByAltText('sample01')).toBeInTheDocument()
  })

  test('左矢印キーを押すことで、前の画像に切り替わること', () => {
    userEvent.click(screen.getByTestId('previewContent'))
    userEvent.keyboard('{arrowleft}')
    expect(screen.getByAltText('sample01')).toBeInTheDocument()
  })

  test('閉じるボタンをクリックすることで、モーダルが閉じること', () => {
    userEvent.click(screen.getByLabelText('モーダルを閉じる'))
    expect(toggle).toBeCalledTimes(1)
  })
})
