import { VFC, ReactNode } from 'react'
import ReactModal from 'react-modal'

type ContainerProps = {
  isOpen: boolean
  onRequestClose: () => void
  styles?: ReactModal.Styles
  children: ReactNode
}

type Props = {
  style: ReactModal.Styles
} & Omit<ContainerProps, 'styles'>

const Component: VFC<Props> = ({ children, ...props }) => (
  <ReactModal {...props} shouldCloseOnEsc shouldCloseOnOverlayClick ariaHideApp={process.env.NODE_ENV !== 'test'}>
    {children}
  </ReactModal>
)

export const Modal: VFC<ContainerProps> = ({ isOpen, onRequestClose, styles, children }) => {
  if (process.env.NODE_ENV !== 'test') {
    ReactModal.setAppElement('#app')
  }

  const style: ReactModal.Styles = {
    overlay: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...styles?.overlay,
    },
    content: {
      position: 'relative',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      ...styles?.content,
    },
  }

  return <Component {...{ isOpen, onRequestClose, style, children }} />
}
