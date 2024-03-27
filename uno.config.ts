import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWebFonts,
} from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetWebFonts({
      fonts: {
        sans: 'Noto Sans SC',
      },
    }),
  ],
  transformers: [transformerDirectives()],
});
