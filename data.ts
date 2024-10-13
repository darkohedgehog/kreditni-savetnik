export type Credit = {
    id: number;
    slug: string;
    title: string;
    shortdesc: string;
    description: string;
    image: string;  // Dodaj polje za sliku
  };
  
  export const credits: Credit[] = [
    {
      id: 1,
      slug: 'dinarski-kes-kredit',
      title: 'Dinarski keš kredit',
      shortdesc: 'Kratak opis',
      description: 'Detaljan opis za dinarski keš kredit...',
      image: 'https://res.cloudinary.com/dhkmlqg4o/image/upload/v1728830535/kreditni_savetnik/kes-kredit-banner_ywguzd.jpg',
    },
    {
      id: 2,
      slug: 'auto-krediti',
      title: 'Auto krediti',
      shortdesc: 'Kratak opis',
      description: 'Detaljan opis za auto kredite...',
      image: 'https://res.cloudinary.com/dhkmlqg4o/image/upload/v1728830572/kreditni_savetnik/car-kredit-banner_cxeypv.jpg',
    },
    {
      id: 3,
      slug: 'kredit-za-refinansiranje',
      title: 'Kredit za refinansiranje',
      shortdesc: 'Kratak opis',
      description: 'Detaljan opis za refinansiranje kredita...',
      image: 'https://res.cloudinary.com/dhkmlqg4o/image/upload/v1728830592/kreditni_savetnik/ref-kredit-banner_xoubmr.jpg',
    },
    {
      id: 4,
      slug: 'stambeni-kredit',
      title: 'Stambeni kredit',
      shortdesc: 'Kratak opis',
      description: 'Detaljan opis za stambeni kredit...',
      image: 'https://res.cloudinary.com/dhkmlqg4o/image/upload/v1728830560/kreditni_savetnik/stambeni-kredit-banner_eyfv79.jpg',
    }
  ];
  