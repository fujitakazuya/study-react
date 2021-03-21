import { ReactPortal, useCallback, useState } from 'react'
import ReactDOM from 'react-dom'
import { Toast, MessageType } from '../components/Toast'

type ReturnValue = [() => void, () => ReactPortal | null]

type Option = {
  messageType: MessageType
  timeout?: number
  isLoading?: boolean
  hasCloseButton?: boolean
}

export const useToast = (message: string, option?: Option): ReturnValue => {
  const messageType = option?.messageType ?? 'info'
  const timeout = option?.timeout ?? 1000
  const isLoading = option?.isLoading ?? false
  const hasCloseButton = option?.hasCloseButton ?? false

  const [isShow, setIsShow] = useState(false)

  const showToast = useCallback(() => {
    setIsShow(true)

    if (timeout > 0) {
      setTimeout(() => {
        setIsShow(false)
      }, timeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onCloseClick = useCallback(() => {
    setIsShow(false)
  }, [])

  // TODO: ref のほうが良いか？
  const container = document.getElementById('app')
  const renderToast = () => {
    if (!container || !isShow) {
      return null
    }

    return (
      container &&
      isShow &&
      ReactDOM.createPortal(<Toast {...{ message, messageType, isLoading, hasCloseButton, onCloseClick }} />, container)
    )
  }

  return [showToast, renderToast]
}
