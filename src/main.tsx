import '@unocss/reset/tailwind.css'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import 'uno.css'
import App from './App'
import { ThemeProvider } from './context'
import { store } from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
)

const queryClient = new QueryClient()

root.render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
)
