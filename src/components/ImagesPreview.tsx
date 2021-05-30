import { VFC } from 'react'
import styled from 'styled-components'
import { Modal } from './Modal'
import { useImagesPreview, Image } from '../hooks/useImagesPreview'

type ContainerProps = {
  images: Image[]
  selectImageIndex?: number
  isOpen: boolean
  toggle: () => void
}

type Props = {
  image: Image
  moveNext: () => void
  movePrev: () => void
  onKeyDown: (code: string) => void
  className?: string
} & Omit<ContainerProps, 'images'>

const Component: VFC<Props> = ({ image, moveNext, movePrev, onKeyDown, isOpen, toggle, className }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={toggle}
    styles={{
      overlay: { backgroundColor: 'rgba(0, 0, 0, 0.2)' },
      content: { width: '100%', height: '100%', display: 'grid', padding: '0 20px', background: 'none', border: 'none' },
    }}
  >
    <div
      className={className}
      tabIndex={-1}
      onKeyDown={(event) => onKeyDown(event.code)}
      role="button"
      data-testid="previewContent"
    >
      <button type="button" onClick={toggle} aria-label="モーダルを閉じる">
        X
      </button>
      <div>
        <button type="button" onClick={movePrev} aria-label="前の画像を表示">
          PREV
        </button>
        <img src={image.path} alt={image.alt} width={512} height={512} />
        <button type="button" onClick={moveNext} aria-label="次の画像を表示">
          NEXT
        </button>
      </div>
    </div>
  </Modal>
)

const StyledComponent = styled(Component)`
  display: grid;
  outline: none;

  > button {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const Container: VFC<ContainerProps> = ({ images, selectImageIndex, ...props }) => {
  const { image, moveNext, movePrev, onKeyDown } = useImagesPreview(images, selectImageIndex)

  return <StyledComponent {...{ image, moveNext, movePrev, onKeyDown, ...props }} />
}

export const ImagesPreview = Container
