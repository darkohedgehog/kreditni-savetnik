"use client"
import { useParams } from 'next/navigation';
import { credits } from '../../../../data';
import ContactForm from '@/components/kontakt/ContactForm';
import Image from 'next/image';
import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa6';
import { CiCalculator1 } from "react-icons/ci";


const CreditDetailPage = () => {
  const params = useParams();
  const { slug } = params;

  // Pronađi kredit na osnovu slug-a
  const credit = credits.find(c => c.slug === slug);

  if (!credit) {
    return <p>Kredit nije pronađen</p>;
  }

  return (
    <>
    <div className="container px-6 py-10 my-16 mx-auto bg-card-bg-light dark:bg-card-bg-dark rounded-lg shadow-lg shadow-darkblue">
      <h1 className="text-3xl lg:text-4xl uppercase font-bold text-purple dark:text-darkblue flex items-center justify-center my-16">
        {credit.title}
      </h1>
      <Image
            className="object-cover object-center w-full h-64 rounded-lg lg:h-80 my-10"
            src={credit.image}
            alt={credit.title}
            width={500}
            height={300}
            priority
              />
      <h1 className="text-2xl lg:text-3xl flex items-center justify-center mb-4 font-bold text-accentblue">
        {credit.blogtitle}
        </h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        {credit.description}
        </p>
      <h1 className="text-xl lg:text-2xl flex items-center justify-center my-4 font-bold text-accentblue">{
      credit.title1}
      </h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        {credit.paragraph1}
        </p>
      <h1 className="text-xl lg:text-2xl flex items-center justify-center my-4 font-bold text-accentblue">
        {credit.title2}
        </h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        {credit.paragraph2}
        </p>
      <h1 className="text-xl lg:text-2xl flex items-center justify-center my-4 font-bold text-accentblue">
        {credit.title3}
        </h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        {credit.paragraph3}
        </p>
      <h1 className="text-xl lg:text-2xl flex items-center justify-center my-4 font-bold text-accentblue">
        {credit.title4}
        </h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        {credit.paragraph4}
        </p>
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        {credit.paragraph5}
        </p>
    </div>

    {/* Linkovi do kontakt stranice i stranice za kalkulator */}

    <div className='flex items-center justify-center my-16 flex-col gap-8'>
    <Link href={'/kontakt'}>
        <button className="relative inline-flex h-12 w-[200px] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-accentwhite dark:text-accentblue backdrop-blur-3xl gap-3">
    Kontakt
    <FaLocationArrow />
    </span>
    </button>
        </Link>

        <Link href={'/kalkulatori'}>
        <button className="relative inline-flex h-12 w-[200px] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-accentwhite dark:text-accentblue backdrop-blur-3xl gap-3">
    Kalkulatori
    <CiCalculator1 />
    </span>
    </button>
        </Link>
    </div>
    {/* Kontakt forma */}
    <ContactForm />
    </>
  );
};

export default CreditDetailPage;
