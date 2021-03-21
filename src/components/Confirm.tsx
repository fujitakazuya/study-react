import { VFC } from 'react'
import styled from 'styled-components'
import { Color } from '../constants/Style/Color'

export type ClickEvent = {
  text: string
  handleClick: () => void
}

type Props = {
  title: string
  subTitle?: string
  ok: ClickEvent
  cancel: ClickEvent
  closeConfirm: () => void
  className?: string
}

const Component: VFC<Props> = ({ title, subTitle, ok, cancel, closeConfirm, className }) => (
  <div className={className}>
    <div>
      <h4>{title}</h4>
      {!!subTitle && <p>{subTitle}</p>}
      <span>
        <button type="button" onClick={closeConfirm}>
          X
        </button>
      </span>
    </div>
    <div>
      <button type="button" onClick={ok.handleClick}>
        {ok.text}
      </button>
      <button type="button" onClick={cancel.handleClick}>
        {cancel.text}
      </button>
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  position: absolute;
  top: 1rem;
  left: 50%;
  padding: 1rem;
  background-color: ${Color.white};
  border: 1px solid ${Color.border};
  border-radius: 0.25rem;

  > div {
    width: 320px;

    > span {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
    }
  }
`

export const Confirm = StyledComponent
