import '@unocss/reset/tailwind.css'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'uno.css'
import App from './App'
import { ThemeProvider } from './context'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
)

const queryClient = new QueryClient()

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
)
