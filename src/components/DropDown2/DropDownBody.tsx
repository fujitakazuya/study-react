import { VFC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  toggle: () => void
  className?: string
  children: ReactNode
}

const Component: VFC<Props> = ({ toggle, children, className }) => (
  <div className={className}>
    <div role="button" onClick={toggle} aria-hidden="true" tabIndex={-1} />
    <div>{children}</div>
  </div>
)

const StyledComponent = styled(Component)`
  > div:first-of-type {
    position: fixed;
    background: transparent;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    cursor: auto;
  }

  > div:nth-of-type(2) {
    border: 1px solid #ddd;
    margin: 1rem;
    position: relative;
    z-index: 1;
  }
`

export const DropDownBody = StyledComponent
