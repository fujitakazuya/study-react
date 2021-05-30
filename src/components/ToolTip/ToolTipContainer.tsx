import { VFC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
  className?: string
}

const Component: VFC<Props> = ({ children, className }) => <div className={className}>{children}</div>

const StyledComponent = styled(Component)`
  position: relative;
  display: inline-block;

  &:hover > span {
    opacity: 1;
    visibility: visible;
  }
`

export const TooltipContainer = StyledComponent
