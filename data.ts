export type Credit = {
    id: number;
    slug: string;
    title: string;
    description: string;
  };
  
  export const credits: Credit[] = [
    {
      id: 1,
      slug: 'dinarski-kes-kredit',
      title: 'Dinarski keš kredit',
      description: 'Detaljan opis za dinarski keš kredit...',
    },
    {
      id: 2,
      slug: 'auto-krediti',
      title: 'Auto krediti',
      description: 'Detaljan opis za auto kredite...',
    },
    {
      id: 3,
      slug: 'refinansiranje',
      title: 'Kredit za refinansiranje',
      description: 'Detaljan opis za refinansiranje kredita...',
    },
    {
      id: 4,
      slug: 'stambeni-kredit',
      title: 'Stambeni kredit',
      description: 'Detaljan opis za stambeni kredit...',
    }
  ];
  