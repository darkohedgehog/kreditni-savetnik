interface SiteMetaData {
    title: string;
    author: string;
    headerTitle: string;
    description: string;
    language: string;
    theme: 'system' | 'dark' | 'light';
    siteUrl: string;
    siteLogo: string;
    socialBanner: string;
    email: string;
    twitter: string;
    facebook: string;
    linkedin: string;
    instagram: string;
    locale: string;
    keywords: string[];
    robots: string;
    openGraph: {
      title: string;
      description: string;
      url: string;
      type: string;
      images: {
        url: string;
        alt: string;
      }[];
    };
  }
  
  const siteMetadata: SiteMetaData = {
    title: 'INFINITUM MSS||Kreditni savetnik',
    author: 'Darko Živić',
    headerTitle: 'Kreditni savetnik',
    description: 'Finansijski i kreditni saveti, keš krediti, auto krediti, refinansirajući krediti, stambeni krediti',
    language: 'sr-SR',
    theme: 'system', // system, dark or light
    siteUrl: process.env.SITE_URL || 'http://localhost:3000', // your website URL
    siteLogo: '/logo.png',
    socialBanner: '/podrskaklijntu.wepb', // add social banner in the public folder
    email: 'kreditnisaveti@gmail.com',
    twitter: 'https://x.com/',
    facebook: 'https://www.facebook.com/',
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com/',
    locale: 'sr-SR',
    keywords: [
      'Finansijski saveti',
      'Krediti',
      'Keš kredit',
      'Auto kredit',
      'Refinansirajući kredit',
      'Stambeni kredit',
    ], // Additional SEO keywords
    robots: 'index, follow', // SEO - for search engine robots
    openGraph: {
      title: 'INFINITUM MSS || Kreditni savetnik',
      description:
        'Finansijski i kreditni saveti, keš krediti, auto krediti, refinansirajući krediti, stambeni krediti',
      url: process.env.SITE_URL || 'http://localhost:3000',
      type: 'website',
      images: [
        {
          url: '/podrskaklijntu.wepb', // Social media banner
          alt: 'INFINITUM MSS || Kreditni savetnik Social Banner',
        },
      ],
    },
  };
  
  export default SiteMetaData;
  