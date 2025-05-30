// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'docusaur-gh',
  tagline: 'Documentation site for docusaur-gh',
  url: 'https://mawbydp.github.io',
  baseUrl: '/docusaur-gh/',
  organizationName: 'mawbydp',
  projectName: 'docusaur-gh',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg', // Replace with your actual Open Graph image file if available
    navbar: {
      title: 'Docusaur GH',
      logo: {
        alt: 'Docusaur GH Logo',
        src: 'img/logo.svg' // Make sure 'img/logo.svg' exists in the static/img folder
      },
      items: [
        {
          to: '/docs/intro', // You should create or restore docs/intro.md
          label: 'Docs',
          position: 'left'
        },
        {
          href: 'https://github.com/mawbydp/docusaur-gh',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    colorMode: {
      respectPrefersColorScheme: true
    }
  }
};

export default config;
