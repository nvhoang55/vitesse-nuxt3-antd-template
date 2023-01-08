import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { antdTheme } from './assets/styles/antd-theme'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  vite: {
    plugins: [
      Components({
        // add option {resolveIcons: true} as parameter for resolving problem with icons
        resolvers: [AntDesignVueResolver({ resolveIcons: true, importStyle: 'less' })],
      }),
    ],
    ssr: {
      noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue', '@ant-design/icons-vue'],
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: antdTheme(),
        },
      },
    },
  },
})
