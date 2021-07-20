import ReactDOM from 'react-dom'
import { Reset } from 'styled-reset'
import { GlobalStyle } from './components/GlobalStyle'
import { App } from './components/App'

ReactDOM.render(
  <>
    <Reset />
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('app')
)
