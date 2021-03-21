import { ReactPortal, useCallback, useState } from 'react'
import ReactDOM from 'react-dom'
import { Confirm, ClickEvent } from '../components/Confirm'

type ReturnValue = [() => void, () => ReactPortal | null]

type Option = {
  ok: PartiallyPartial<ClickEvent, 'text'>
  cancel: PartiallyPartial<ClickEvent, 'text'>
  subTitle?: string
}

export const useConfirm = (title: string, option: Option): ReturnValue => {
  const [isShow, setIsShow] = useState(false)

  const closeConfirm = useCallback(() => {
    setIsShow(false)
  }, [])

  const showConfirm = useCallback(() => {
    setIsShow(true)
  }, [])

  // TODO: ref のほうが良いか？
  const container = document.getElementById('app')
  const renderConfirm = () => {
    if (!container || !isShow) {
      return null
    }

    return ReactDOM.createPortal(
      <Confirm
        {...{ title, closeConfirm }}
        subTitle={option.subTitle}
        ok={{ text: option.ok.text || 'OK', handleClick: option.ok.handleClick }}
        cancel={{ text: option.cancel.text || 'キャンセル', handleClick: option.cancel.handleClick }}
      />,
      container
    )
  }

  return [showConfirm, renderConfirm]
}
