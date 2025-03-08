// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IPS CUIDADO SEGURO EN CASA',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://vercel.com/jose-uhias-projects',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Jaug18', // Usually your GitHub org/user name.
  projectName: 'DocuSaurusIPS', // Usually your repo name.

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
            'https://github.com/Jaug18/DocuSaurusIPS/edit/main/',
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
            'https://github.com/Jaug18/DocuSaurusIPS/edit/main/blog/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: `IPS CUIDADO
         SEGURO EN CASA`,
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
            className: 'nav-docs-label',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Jaug18/DocuSaurusIPS',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Enlaces rapidos',
            items: [
              {
                label: 'Alianza de Usuarios',
                href: 'https://cuidadoseguro.com.co/csc3/alianza-de-usuarios/',
              },
              {
                label: 'Contacto',
                href: 'https://cuidadoseguro.com.co/csc3/contacto/',
              },
              {
                label: 'Intranet',
                href: 'https://cuidadoseguro.com.co/intranet/login/',
              }
            ],
          },
          {
            title: 'Vigilancia en salud pública',
            items: [
              {
                label: 'Vigilancia y Análisis del Riesgo en Salud Pública',
                href: 'https://www.ins.gov.co/Direcciones/Vigilancia/Paginas/default.aspx',
              },
              {
                label: 'INS',
                href: 'https://www.ins.gov.co/Paginas/Inicio.aspx',
              },
            ],
          },
          {
            title: 'Links de interés',
            items: [
              {
                label: 'SARLAFT',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Atención al Usuario',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Trabaje con Nosotros',
                href: 'https://x.com/docusaurus',
              },
              {
                label: 'Política de Tratamiento de Datos Personales',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Realizar denuncia por corrupción',
                href: 'https://www.desqubrapp.com.co/denuncias/responder_denuncias/84',
              },
              {
                label: 'Consultar denuncias realizadas',
                href: 'https://www.desqubrapp.com.co/consulta_denuncia',
              }
            ],
          },
          {
            title: 'Horario',
            items: [
              {
                label: `8:00 a.m. - 5:00 p.m. / Lunes – Viernes 8:00 a.m. – 12:00 m. / Sábados`,
                to: '/blog',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cuidado Seguro en Casa S.A. Todos los derechos reservados.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;