"use client"

import Image from 'next/image';
import React, { useState } from 'react';

const KesKreditComponent: React.FC = () => {
  const [kredit, setKredit] = useState<number | undefined>(undefined);;
  const [meseci, setMeseci] = useState<number | undefined>(undefined);;
  const [kamata, setKamata] = useState<number | undefined>(undefined);
  const [rata, setRata] = useState<string>('');
  const [ukupno, setUkupno] = useState<string>('');

  const izracunajRatu = (): void => {
    if (
      kredit !== undefined &&
      meseci !== undefined &&
      kamata !== undefined &&
      kredit > 0 &&
      meseci > 0 &&
      kamata > 0
    ) {
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
      Dinarski keš kredit
      </h1>
    <div className='grid grid-cols-1 lg:grid-cols-2 container items-center justify-evenly mx-auto mb-8'>
      <div className="mx-2 lg:mx-auto lg:w-[420px] max-w-screen-sm p-6 bg-card-bg-light dark:bg-card-bg-dark rounded-lg shadow-lg space-y-4 mt-16 shadow-darkblue">
        <h2 className='flex items-center justify-center text-purple dark:text-darkblue font-semibold text-2xl lg:text-3xl mt-10'>
          Brzi keš krediti
        </h2>
        <p className='font-semibold leading-5 mt-4'>
        Dinarski keš kredit omogućava brzu i jednostavnu pozajmicu bez devizne klauzule, idealan za pokrivanje neplaniranih troškova.
        </p>
   <Image 
     src={'/cash-credit.svg'} 
     alt={'kes-kredit'}
     width={500}
     height={500}
     priority={false}
     className='flex items-center justify-center py-6' />
      </div>
    <div className="mx-auto p-6 bg-card-bg-light dark:bg-card-bg-dark rounded-lg shadow-lg space-y-4 mt-16 shadow-darkblue">
      <h1 className="text-xl font-bold text-purple dark:text-accentblue mb-4">Dinarski keš kredit</h1>

      <div className='w-[320px] lg:w-[400px]'>
        <label className="block text-sm font-medium">Iznos kredita</label>
        <input
          type="number"
          placeholder="Unesite iznos kredita"
          value={kredit !== undefined ? kredit : ''}
          onChange={(e) =>
            setKredit(e.target.value !== '' ? Number(e.target.value) : undefined)
          }
          className="w-full px-4 py-2 border rounded-md focus:outline-none
          focus:ring focus:ring-blue-300"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Broj meseci otplate</label>
        <input
          type="number"
          placeholder="Unesite broj meseci"
          value={meseci !== undefined ? meseci : ''}
          onChange={(e) =>
            setMeseci(e.target.value !== '' ? Number(e.target.value) : undefined)
          }
          className="w-full px-4 py-2 border rounded-md focus:outline-none
          focus:ring focus:ring-blue-300"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Kamata (%)</label>
        <input
          type="number"
          step="0.01"
          min="0"
          placeholder="Unesite kamatnu stopu"
          value={kamata !== undefined ? kamata : ''}
          onChange={(e) =>
            setKamata(e.target.value !== '' ? Number(e.target.value) : undefined)
          }
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
          focus:outline-none text-black"
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
          focus:outline-none text-black"
        />
      </div>

      <button
        onClick={izracunajRatu}
        disabled={
          kredit === undefined ||
          meseci === undefined ||
          kamata === undefined ||
          kredit <= 0 ||
          meseci <= 0 ||
          kamata <= 0
        }
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600
        focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-400"
      >
        Izračunaj
      </button>
    </div>
    </div>
    </>
  );
};

export default KesKreditComponent;
