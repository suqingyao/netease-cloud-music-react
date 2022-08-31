import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './style'
import Views from '@/router'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Views />
    </BrowserRouter>
  )
}

export default App
