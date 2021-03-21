import { VFC } from 'react'
import styled, { keyframes } from 'styled-components'
import { Color } from '../constants/Style/Color'

export type MessageType = 'info' | 'warning' | 'error'

type Props = {
  message: string
  messageType: MessageType
  isLoading: boolean
  hasCloseButton: boolean
  onCloseClick: () => void
  className?: string
}

const Component: VFC<Props> = ({ message, isLoading, hasCloseButton, onCloseClick, className }) => (
  <div className={className}>
    <div>
      {isLoading && <div className="loading" />}
      <p>{message}</p>
      <span>
        {hasCloseButton && (
          <button onClick={onCloseClick} type="button">
            x
          </button>
        )}
      </span>
    </div>
  </div>
)

const spinner = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const StyledComponent = styled(Component)<Props>`
  position: absolute;
  top: 1rem;
  left: 50%;

  > div {
    display: flex;
    align-items: center;
    width: 180px;
    padding: 0.5rem;
    border-radius: 0.25rem;
    opacity: 0.8;
    background-color: ${(props) => Color[props.messageType]};

    > div.loading {
      width: 18px;
      height: 18px;
      border: 2px solid ${Color.white};
      border-top-color: transparent;
      border-radius: 50%;
      animation: ${spinner} 1s linear infinite;
    }

    > span {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`

export const Toast = StyledComponent
