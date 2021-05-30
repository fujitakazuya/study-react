import { useState, VFC } from 'react'
import styled from 'styled-components'
import { ImagesPreview } from './ImagesPreview'
import { useToggle } from '../hooks/useToggle'
import type { Image } from '../hooks/useImagesPreview'

type ContainerProps = {
  images: Image[]
}

type Props = {
  isOpen: boolean
  toggle: () => void
  showPreview: (index: number) => void
  selectImageIndex: number
  className?: string
} & ContainerProps

const Component: VFC<Props> = ({ images, isOpen, toggle, showPreview, selectImageIndex, className }) => (
  <div className={className}>
    <div>
      {images.map((image, i) => (
        <input
          type="image"
          src={image.path}
          alt={image.alt}
          width={128}
          height={128}
          onClick={() => showPreview(i)}
          key={image.alt}
        />
      ))}
    </div>
    {isOpen && <ImagesPreview {...{ isOpen, toggle, images, selectImageIndex }} />}
  </div>
)

const StyledComponent = styled(Component)``

const Container: VFC<ContainerProps> = (props) => {
  const [isOpen, toggle] = useToggle()
  const [selectImageIndex, setSelectImageIndex] = useState(0)

  const showPreview = (index: number) => {
    setSelectImageIndex(index)
    toggle()
  }

  return <StyledComponent {...{ isOpen, toggle, showPreview, selectImageIndex, ...props }} />
}

export const Images = Container
