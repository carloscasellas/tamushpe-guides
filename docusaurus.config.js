/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'tamuSHPE Guides',
  tagline: 'An inclusive environemnt for individuals who are passionate about using technology to improve themselves and the life of others.',
  url: 'https://tech.tamushpe.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TAMUSHPE', // Usually your GitHub org/user name.
  projectName: 'tamushpe-guides', // Usually your repo name.
  themeConfig: {
    // announcementBar: {
    //   id: 'shpeathon_apply',
    //   content:
    //     'Learn about our upcoming SHPEathon competition <a rel="noopener noreferrer" href="/docs/shpeathon/event-details/event-details">here</a>. <span style="font-weight: bold;">Date: Feb 4th-6th</span>',
    //   backgroundColor: '#FCBB19',
    //   textColor: '#000',
    //   isCloseable: false,
    // },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Tech Affairs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo_light.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'personal-website/Purpose/introduction',
          position: 'right',
          label: 'Personal Website',
        },
        {
          type: 'doc',
          docId: 'python/getting-started/course-introduction',
          position: 'right',
          label: 'Python',
        },
        // {
        //   type: 'doc',
        //   docId: 'transfer-of-knowledge/Introduction/introduction',
        //   position: 'right',
        //   label: 'Transfer of Knowledge',
        // },
        // {
        //   label: 'Join Now',
        //   to: 'https://www.tamushpe.org/committees.html',
        //   position: 'right',
        //   className: 'nav-button-blue',
        // },
        {
          type: 'doc',
          docId: 'shpeathon/event-details/event-details',
          position: 'right',
          className: 'nav-button-orange',
          label: 'SHPEathon',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Pages',
          items: [
            {
              label: 'Personal Website',
              to: '/docs/personal-website/Purpose/introduction',
            },
            {
              label: 'Python',
              to: '/docs/python/getting-started/course-introduction',
            },
            {
              label: 'SHPEathon',
              to: '/docs/shpeathon/event-details',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Instagram',
              to: 'https://www.instagram.com/tamushpe/?hl=en',
            },
            {
              label: 'LinkedIn',
              to: 'https://www.linkedin.com/company/tamushpe/',
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/tamushpe?lang=en',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Main Site',
              to: 'https://www.tamushpe.org',
            },
            {
              label: 'MemberSHPE Portal',
              to: 'https://www.membershpe.org',
            },
            {
              label: 'Join Tech Affairs',
              to: 'https://www.tamushpe.org/committees.html',
            },
          ],
        },
        // {
        //   title: 'Admin',
        //   items: [
        //     {
        //       label: 'Log In',
        //       to: '/docs/transfer-of-knowledge/introduction',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TAMU SHPE`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
