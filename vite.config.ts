import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [
    react(),
    Unocss({
      presets: [presetUno(), presetAttributify({}), presetIcons({})]
    })
  ]
})
