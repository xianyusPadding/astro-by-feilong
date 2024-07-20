export const siteConfig = {
  author: 'Feilong Xie',
  title: 'Feilong Xie',
  subtitle: 'feilong.xie home, supports Vue and UnoCSS.',
  description: 'A Minimal, SEO-friendly portfolio and blog theme for Astro.',
  image: {
    src: '/hero.jpg',
    alt: 'Website Main Image',
  },
  email: '841583918@qq.com',
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/xianyusPadding',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
    {
      text: '掘金',
      href: 'https://juejin.cn/user/2946346890836206',
      icon: 'i-simple-icons:juejin',
      header: 'i-simple-icons:juejin',
    },
  ],
  header: {
    logo: {
      src: '/avatar.jpg',
      alt: 'Logo Image',
    },
    navLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
      {
        text: 'Projects',
        href: '/projects',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
    ],
  },
  footer: {
    navLinks: [
      {
        text: 'Posts Props',
        href: '/posts-props',
      },
      {
        text: 'Markdown Style',
        href: '/md-style',
      },
      {
        text: 'View on Astro',
        href: 'https://astro.build/themes/details/vitesse-theme-for-astro/',
      },
      {
        text: 'GitHub Repository',
        href: 'https://github.com/xianyusPadding/astro-by-feilong',
      },
    ],
  },
}

export default siteConfig
