import '@unocss/reset/tailwind.css'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import 'uno.css'
import App from './App'
import { ThemeProvider } from './context'
import { store } from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
)

root.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
)
