"use client"
import { useParams } from 'next/navigation';
import { credits } from '../../../../data';


const CreditDetailPage = () => {
  const params = useParams();
  const { slug } = params;

  // Pronađi kredit na osnovu slug-a
  const credit = credits.find(c => c.slug === slug);

  if (!credit) {
    return <p>Kredit nije pronađen</p>;
  }

  return (
    <div className="container px-6 py-10 mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{credit.title}</h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400">{credit.description}</p>
    </div>
  );
};

export default CreditDetailPage;
