import { VFC, ReactNode, useState } from 'react'
import styled from 'styled-components'
import { DropDownBody } from './DropDownBody'

type ContainerProps = {
  label: string
  children: ReactNode
}

type Props = {
  isOpen: boolean
  toggle: () => void
  open: () => void
  className?: string
} & ContainerProps

const Component: VFC<Props> = ({ label, isOpen, toggle, open, children, className }) => (
  <div className={className}>
    <div>
      <button type="button" onClick={open}>
        {label}
      </button>
    </div>
    {isOpen && <DropDownBody {...{ toggle }}>{children}</DropDownBody>}
  </div>
)

const StyledComponent = styled(Component)``

const Container: VFC<ContainerProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => {
    if (isOpen) {
      return
    }

    setIsOpen(true)
  }

  const toggle = () => {
    setIsOpen((prev) => !prev)
  }

  return <StyledComponent {...{ isOpen, toggle, open, ...props }} />
}

export const DropDown = Container
