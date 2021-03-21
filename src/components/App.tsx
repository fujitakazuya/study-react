import { VFC, ReactPortal } from 'react'
import { useToast } from '../hooks/useToast'
import { useConfirm } from '../hooks/useConfirm'

type Props = {
  showToast: () => void
  renderToast: () => ReactPortal | null
  showConfirm: () => void
  renderConfirm: () => ReactPortal | null
}

const Component: VFC<Props> = ({ showToast, renderToast, showConfirm, renderConfirm }) => (
  <div>
    {renderToast()}
    {renderConfirm()}
    <h1>This is App</h1>
    <button type="button" onClick={showToast}>
      トーストを表示
    </button>
    <button type="button" onClick={showConfirm}>
      確認する
    </button>
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
