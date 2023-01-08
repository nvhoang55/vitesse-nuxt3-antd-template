import {
  defineConfig,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
  ],
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        header: 'Noto Serif Display',
        sans: 'Noto Sans',
        serif: 'Noto Serif',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
