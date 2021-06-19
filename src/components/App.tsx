import { VFC, ReactPortal } from 'react'
import { useToast } from '../hooks/useToast'
import { useConfirm } from '../hooks/useConfirm'
import { DropDown } from './DropDown/DropDown'
import { TooltipContainer } from './ToolTip/ToolTipContainer'
import { TooltipText } from './ToolTip/ToolTipText'
import { Images } from './Images'

const images = [
  { path: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', alt: 'airplane' },
  { path: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png', alt: 'arctichare' },
  { path: 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png', alt: 'baboon' },
]

type Props = {
  showToast: () => void
  renderToast: () => ReactPortal | null
  showConfirm: () => void
  renderConfirm: () => ReactPortal | null
}

const Component: VFC<Props> = ({ showToast, renderToast, showConfirm, renderConfirm }) => (
  <div>
    <Images {...{ images }} />
    <TooltipContainer>
      <TooltipText>
        {[0, 1, 2].map((value) => (
          <span key={value.toString()}>{value}</span>
        ))}
      </TooltipText>
      <div>ここにホバーしてね</div>
    </TooltipContainer>
    {renderToast()}
    {renderConfirm()}
    <h1>This is App</h1>
    <button type="button" onClick={showToast}>
      トーストを表示
    </button>
    <button type="button" onClick={showConfirm}>
      確認する
    </button>
    <DropDown label="toggle drop down">
      <h1>DropDown Title</h1>
      <div>
        <p>DropDown Body</p>
        <input type="text" />
      </div>
    </DropDown>
    <DropDown label="toggle drop down">
      <h1>DropDown Title</h1>
      <div>
        <p>DropDown Body</p>
        <input type="text" />
      </div>
    </DropDown>
  </div>
)

const Container: VFC = () => {
  const [showToast, renderToast] = useToast('保存中...', { messageType: 'error', timeout: -1, isLoading: true })

  const handleOkClick = () => {
    console.log('OK')
  }

  const handleCancelClick = () => {
    console.log('Cancel')
  }

  const [showConfirm, renderConfirm] = useConfirm('確認してください!', {
    ok: { handleClick: handleOkClick },
    cancel: { handleClick: handleCancelClick },
  })

  return <Component {...{ showToast, renderToast, showConfirm, renderConfirm }} />
}

export const App = Container
