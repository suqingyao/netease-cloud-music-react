import Views from '@/router'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Loading from './components/loading'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Views />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
