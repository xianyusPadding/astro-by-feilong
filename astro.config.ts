import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import expressiveCode from 'astro-expressive-code'
import remarkMermaid from 'remark-mermaidjs'
import sitemap from '@astrojs/sitemap'
import UnoCSS from 'unocss/astro'
import vue from '@astrojs/vue'

export default defineConfig({
  site: 'https://astro-theme-vitesse.netlify.app/',
  server: {
    port: 1977,
  },
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkMermaid],
    shikiConfig: {
      themes: {
        light: 'github-light-default',
        dark: 'github-dark-default',
      },
      wrap: true,
    },
  },
  integrations: [
    expressiveCode(),
    mdx(),
    sitemap(),
    UnoCSS({
      injectReset: true,
    }),
    vue(),
  ],
})
