import Link from 'next/link';

const KalkulatoriPage = () => {
  return (
    <div>
      <h1 className='flex items-center justify-center text-3xl lg:text-4xl text-purple dark:text-accentblue mt-16 font-bold'>
        Kalkulatori
        </h1>
        <p className='flex items-center justify-center text-md mt-16 mx-auto px-6 text-gray-600 dark:text-blue-200'>
        Dobrodošli na stranicu za kreditne kalkulatore, gde možete brzo i jednostavno izračunati optimalne uslove za različite vrste kredita prema vašim potrebama. Bez obzira da li tražite dinarski keš kredit za pokrivanje neplaniranih troškova, auto kredit za finansiranje vozila, refinansirajući kredit za objedinjavanje postojećih obaveza ili stambeni kredit za kupovinu ili renoviranje doma, naši kalkulatori će vam pomoći da procenite mesečne rate i uslove otplate na najpovoljniji način. Iskoristite naše alate kako biste doneli informisane finansijske odluke.
        </p>
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-28 xl:max-w-7xl">
      <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 my-16'>
        <li className='rounded-lg border border-white bg-card-bg-light p-5 transition hover:border-blue-600 md:p-7 xl:p-10 dark:border-gray-800 dark:bg-card-bg-dark shadow-md shadow-accentblue dark:shadow-darkblue dark:hover:border-blue-400'>
          <Link 
          href="/kalkulatori/kes-kredit"
          className='flex items-center justify-center text-xl uppercase text-purple dark:text-darkblue'>
            Keš Kredit
          </Link>
        </li>
        <li className='rounded-lg border border-white bg-card-bg-light p-5 transition hover:border-blue-600 md:p-7 xl:p-10 dark:border-gray-800 dark:bg-card-bg-dark shadow-md shadow-accentblue dark:shadow-darkblue dark:hover:border-blue-400'>
          <Link 
          href="/kalkulatori/auto-kredit"
          className='flex items-center justify-center text-xl uppercase text-purple dark:text-darkblue'>
            Auto Kredit
          </Link>
        </li>
        <li className='rounded-lg border border-white bg-card-bg-light p-5 transition hover:border-blue-600 md:p-7 xl:p-10 dark:border-gray-800 dark:bg-card-bg-dark shadow-md shadow-accentblue dark:shadow-darkblue dark:hover:border-blue-400'>
          <h2>
            
          </h2>
          <Link 
          href="/kalkulatori/kredit-za-refinansiranje"
          className='flex items-center justify-center text-xl uppercase text-purple dark:text-darkblue text-center'>
            Kredit za Refinansiranje
          </Link>
        </li>
        <li className='rounded-lg border border-white bg-card-bg-light p-5 transition hover:border-blue-600 md:p-7 xl:p-10 dark:border-gray-800 dark:bg-card-bg-dark shadow-md shadow-accentblue dark:shadow-darkblue dark:hover:border-blue-400'>
          <Link 
          href="/kalkulatori/stambeni-kredit"
          className='flex items-center justify-center text-xl uppercase text-purple dark:text-darkblue'>
            Stambeni Kredit
          </Link>
          </li>
      </ul>
      </div>
    </div>
  );
};

export default KalkulatoriPage;
