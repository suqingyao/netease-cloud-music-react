import { createContext, ReactNode, useContext, useState } from 'react'

export const enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ThemeContextProps {
  theme: Theme
  toggle: () => void
}

export const ThemeContext = createContext({
  theme: Theme.LIGHT,
  toggle: () => {}
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(Theme.LIGHT)

  const toggle = () => {
    if (theme === Theme.LIGHT) {
      setTheme(Theme.DARK)
    } else {
      setTheme(Theme.LIGHT)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
