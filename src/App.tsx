import Router from '@/router'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Loading from './components/loading'

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
