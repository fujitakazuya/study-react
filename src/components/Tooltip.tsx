import { VFC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
  className?: string
}

type TextProps = {
  children: ReactNode | string
  className?: string
}

const Component: VFC<Props> = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
)

const TextComponent: VFC<TextProps> = ({ children, className }) => (
  <span className={className}>{children}</span>
)

const StyledComponent = styled(Component)`
  position: relative;
  display: inline-block;

  &:hover > span {
    opacity: 1;
    visibility: visible;
  }
`

const StyledTextComponent = styled(TextComponent)`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -35px;
  display: inline-block;
  padding: 5px;
  white-space: nowrap;
  font-size: 10.5px;
  line-height: 1.3;
  background: #333;
  color: #fff;
  border-radius: 3px;
  transition: 0.3s ease-in;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`

export const Tooltip = StyledComponent
export const TooltipText = StyledTextComponent
