import { VFC, ReactNode } from 'react'
import styled from 'styled-components'

type ContainerProps = {
  position?: 'top' | 'bottom'
  children: ReactNode | string
}

type Props = {
  className?: string
} & ContainerProps

const TextComponent: VFC<Props> = ({ children, position = 'bottom', className }) => (
  <span className={className} data-position={position}>
    {children}
  </span>
)

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

  &[data-position='top'] {
    bottom: 35px;
  }
`

const Container: VFC<ContainerProps> = (props) => {
  return <StyledTextComponent {...props} />
}
export const TooltipText = Container
