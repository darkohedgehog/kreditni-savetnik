export type Credit = {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;  // Dodaj polje za sliku
  };
  
  export const credits: Credit[] = [
    {
      id: 1,
      slug: 'dinarski-kes-kredit',
      title: 'Dinarski keš kredit',
      description: 'Detaljan opis za dinarski keš kredit...',
      image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 2,
      slug: 'auto-krediti',
      title: 'Auto krediti',
      description: 'Detaljan opis za auto kredite...',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 3,
      slug: 'refinansiranje',
      title: 'Kredit za refinansiranje',
      description: 'Detaljan opis za refinansiranje kredita...',
      image: 'https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80',
    },
    {
      id: 4,
      slug: 'stambeni-kredit',
      title: 'Stambeni kredit',
      description: 'Detaljan opis za stambeni kredit...',
      image: 'https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80',
    }
  ];
  