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
  className?: string
} & ContainerProps

const Component: VFC<Props> = ({ label, isOpen, toggle, children, className }) => (
  <div className={className}>
    <div>
      <button type="button" onClick={toggle}>
        {label}
      </button>
    </div>
    {isOpen && <DropDownBody {...{ toggle }}>{children}</DropDownBody>}
  </div>
)

const StyledComponent = styled(Component)``

const Container: VFC<ContainerProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen((prev) => !prev)
  }

  return <StyledComponent {...{ isOpen, toggle, ...props }} />
}

export const DropDown = Container
