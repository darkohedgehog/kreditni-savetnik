"use client"

import Image from 'next/image';
import React, { useState } from 'react';

const RefinansiranjeComponent: React.FC = () => {
  const [kredit, setKredit] = useState<number>(0);
  const [meseci, setMeseci] = useState<number>(0);
  const kamata: number = 8.95;
  const [rata, setRata] = useState<string>('');
  const [ukupno, setUkupno] = useState<string>('');

  const izracunajRatu = (): void => {
    if (kredit > 0 && meseci > 0) {
      const mesecnaKamata: number = kamata / 100 / 12;
      const rataBroj: number =
        (kredit * mesecnaKamata) /
        (1 - Math.pow(1 + mesecnaKamata, -meseci));
      const ukupnoBroj: number = rataBroj * meseci;
      setRata(rataBroj.toFixed(2));
      setUkupno(ukupnoBroj.toFixed(2));
    } else {
      setRata('');
      setUkupno('');
    }
  };

  return (
    <>
    <h1 className='flex items-center justify-center uppercase text-3xl lg:text-4xl font-bold text-purple dark:text-accentblue mt-16'>
      Kredit za refinansiranje
      </h1>
    <div className='grid grid-cols-1 lg:grid-cols-2 container items-center justify-evenly mx-auto mb-8'>
      <div className="mx-2 lg:mx-auto lg:w-[420px] max-w-screen-sm p-6 bg-card-bg-light dark:bg-card-bg-dark rounded-lg shadow-lg space-y-4 mt-16 shadow-darkblue">
        <h2 className='flex items-center justify-center text-purple dark:text-darkblue font-semibold text-2xl lg:text-3xl mt-10'>
          Refinansirajući kredit
        </h2>
        <p className='font-semibold leading-5 mt-4'>
        Refinansirajući kredit omogućava vam da objedinite postojeće obaveze i smanjite mesečne rate uz povoljnije uslove otplate.
        </p>
   <Image 
     src={'/ref-kredit.svg'} 
     alt={'kredit'}
     width={500}
     height={500}
     priority={false}
     className='flex items-center justify-center object-center mx-auto' />
      </div>
    <div className="mx-auto p-6 bg-card-bg-light dark:bg-card-bg-dark rounded-lg shadow-lg space-y-4 mt-16 shadow-darkblue">
      <h1 className="text-xl font-bold text-purple dark:text-accentblue mb-4">Refinansirajući krediti</h1>

      <div className='w-[320px] lg:w-[400px]'>
        <label className="block text-sm font-medium">Iznos kredita</label>
        <input
          type="number"
          placeholder="Unesite iznos kredita"
          value={kredit}
          onChange={(e) => setKredit(Number(e.target.value))}
          className="w-full px-4 py-2 border rounded-md focus:outline-none
          focus:ring focus:ring-blue-300"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Broj meseci otplate</label>
        <input
          type="number"
          placeholder="Unesite broj meseci"
          value={meseci}
          onChange={(e) => setMeseci(Number(e.target.value))}
          className="w-full px-4 py-2 border rounded-md focus:outline-none
          focus:ring focus:ring-blue-300"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Kamata (%)</label>
        <input
          type="text"
          value={kamata}
          readOnly
          className="w-full px-4 py-2 border bg-gray-100 rounded-md
          focus:outline-none text-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Iznos mesečne rate</label>
        <input
          type="text"
          placeholder="Iznos rate"
          value={rata}
          readOnly
          className="w-full px-4 py-2 border bg-gray-100 rounded-md
          focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Ukupno za vraćanje</label>
        <input
          type="text"
          placeholder="Ukupan iznos"
          value={ukupno}
          readOnly
          className="w-full px-4 py-2 border bg-gray-100 rounded-md
          focus:outline-none"
        />
      </div>

      <button
        onClick={izracunajRatu}
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600
        focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Izračunaj
      </button>
    </div>
    </div>
    </>
  );
};

export default RefinansiranjeComponent;
