export type Credit = {
    id: number;
    slug: string;
    title: string;
    shortdesc: string;
    description: string;
    image: string;
  };
  
  export const credits: Credit[] = [
    {
      id: 1,
      slug: 'dinarski-kes-kredit',
      title: 'Dinarski keš kredit',
      shortdesc: 'Važno je biti upućen u to da se krediti mogu klasifikovati kao zahtevniji i manje zahtevni. Osnovne razlike između njih proizilaze iz iznosa novca potrebnog za njihovo odobrenje od strane banke. Stoga je ključno da pre podnošenja zahteva za kredit izvršite temeljnu procenu i utvrdite svoje stvarne potrebe i finansijske kapacitete...',
      description: 'Detaljan opis za dinarski keš kredit...',
      image: 'https://res.cloudinary.com/dhkmlqg4o/image/upload/v1728830535/kreditni_savetnik/kes-kredit-banner_ywguzd.jpg',
    },
    {
      id: 2,
      slug: 'auto-krediti',
      title: 'Auto krediti',
      shortdesc: 'Auto krediti su veoma traženi jer pojednostavljuju proces kupovine novih ili polovnih vozila. Da biste izbegli stres i dugotrajno pretraživanje brojnih ponuda na internetu, preporučujemo da se obratite jednom od naših savetnika. Oni će vam pružiti sve neophodne informacije i pomoći da napravite najbolji izbor...',
      description: 'Detaljan opis za refinansiranje kredita...',
      image: 'https://res.cloudinary.com/dhkmlqg4o/image/upload/v1728830572/kreditni_savetnik/car-kredit-banner_cxeypv.jpg',
    },
    {
      id: 3,
      slug: 'kredit-za-refinansiranje',
      title: 'Kredit za refinansiranje',
      shortdesc: 'Kredit za refinansiranje je kredit koji se uzima u situacijama kada je potrebno zameniti postojeći dug po osnovu jednog ili više dobijenih kredita novim kreditom. Novi kredit se uzima najčešće u istom iznosu ali pod različitim uslovima (kamatna stopa, duži rok otplate)...',
      description: 'Detaljan opis za refinansiranje kredita...',
      image: 'https://res.cloudinary.com/dhkmlqg4o/image/upload/v1728830592/kreditni_savetnik/ref-kredit-banner_xoubmr.jpg',
    },
    {
      id: 4,
      slug: 'stambeni-kredit',
      title: 'Stambeni kredit',
      shortdesc: 'Najtraženiji i napopularniji kredit u Srbiji koji može mnogo da olakša pitanje kupovine stana, ali kada uspeju da se prevaziđu sve prepreke oko dobijanja pravih infomacija i uslova za najpovoljiji kredit...',
      description: 'Detaljan opis za stambeni kredit...',
      image: 'https://res.cloudinary.com/dhkmlqg4o/image/upload/v1728830560/kreditni_savetnik/stambeni-kredit-banner_eyfv79.jpg',
    }
  ];
  