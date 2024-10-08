"use client"
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import React from 'react';

// Dinamički importujemo komponente
const KesKreditComponent = dynamic(() => import('@/components/kalkulatori/KesKreditComponent'));
const AutoKreditComponent = dynamic(() => import('@/components/kalkulatori/AutoKreditComponent'));
const RefinansiranjeComponent = dynamic(() => import('@/components/kalkulatori/RefinansiranjeComponent'));
const StambeniKreditComponent = dynamic(() => import('@/components/kalkulatori/StambeniKreditComponent'));

const KalkulatorPage: React.FC = () => {
  const { krediti } = useParams<{ krediti: string }>();

  const renderKalkulator = () => {
    switch (krediti) {
      case 'kes-kredit':
        return <KesKreditComponent />;
      case 'auto-kredit':
        return <AutoKreditComponent />;
      case 'kredit-za-refinansiranje':
        return <RefinansiranjeComponent />;
      case 'stambeni-kredit':
        return <StambeniKreditComponent />;
      default:
        return <p>Nepoznat tip kalkulatora</p>;
    }
  };

  return <div>{renderKalkulator()}</div>;
};

export default KalkulatorPage;
