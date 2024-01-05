import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWebFonts,
} from 'unocss';

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
});
