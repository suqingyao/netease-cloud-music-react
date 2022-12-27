import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
  presetIcons,
  presetUno
} from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    animation: {
      'spin-slow': 'spin 3s linear infinite'
    }
  }
})
