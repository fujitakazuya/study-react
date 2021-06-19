import { VFC, ReactNode, forwardRef, useRef } from 'react'
import styled from 'styled-components'
import { useOutsideClick } from '../../hooks/useOutsideClick'

type Props = {
  className?: string
  children: ReactNode
}

type ContainerProps = {
  toggle: () => void
  children: ReactNode
}

const Component = forwardRef<HTMLDivElement, Props>(({ children, className }, ref) => (
  <div className={className} ref={ref}>
    <div>{children}</div>
    <button type="button" onMouseDown={(event) => event.target}>
      a
    </button>
  </div>
))

const StyledComponent = styled(Component)`
  > div {
    border: 1px solid #ddd;
    margin: 1rem;
  }
`

const Container: VFC<ContainerProps> = ({ toggle, children }) => {
  const ref = useRef<HTMLDivElement>(null)
  useOutsideClick(ref, () => toggle())

  return <StyledComponent ref={ref}>{children}</StyledComponent>
}

export const DropDownBody = Container
