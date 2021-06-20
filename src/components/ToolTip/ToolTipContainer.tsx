import { VFC, ReactNode } from 'react'
import styled from 'styled-components'

type ContainerProps = {
  children: ReactNode | string
}

type Props = {
  className?: string
} & ContainerProps

const Component: VFC<Props> = ({ children, className }) => <div className={className}>{children}</div>

const StyledComponent = styled(Component)`
  position: relative;
  display: inline-block;

  &:hover > span {
    opacity: 1;
    visibility: visible;
  }
`

const Container: VFC<ContainerProps> = (props) => {
  return <StyledComponent {...props} />
}

export const TooltipContainer = Container
