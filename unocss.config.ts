import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
  presetIcons,
  presetUno
} from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetIcons({})],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
