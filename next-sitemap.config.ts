import { IConfig, ISitemapField } from 'next-sitemap';
const siteMetadata = require('./src/app/utils/siteMetadata').default;

const config: IConfig = {
  siteUrl: siteMetadata.siteUrl,
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  additionalPaths: async (_config): Promise<ISitemapField[]> => {
    return [
      {
        loc: '/', // Home page
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/o-nama', // About page
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/kontakt', // Contact page
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/krediti', // Blog page
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/uslovi-koristenja', // Terms page
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/pravila-privatnosti', // Privacy page
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/kalkulatori', // Complaint page
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
    ];
  },
  transform: async (_config, path): Promise<ISitemapField> => {
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};

export default config;
