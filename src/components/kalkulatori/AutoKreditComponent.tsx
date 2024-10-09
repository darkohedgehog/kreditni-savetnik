"use client"
import React, { useState } from 'react';

const AutoKreditComponent: React.FC = () => {
  const [kredit, setKredit] = useState<number>(0);
  const [meseci, setMeseci] = useState<number>(0);
  const kamata: number = 11.00;
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
    <div className="max-w-xl mx-auto p-6 bg-card-bg-light dark:bg-card-bg-dark rounded-lg shadow-md space-y-4 mt-16">
      <h1 className="text-xl font-bold mb-4 text-purple dark:text-accentblue">Auto krediti</h1>

      <div>
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
  );
};

export default AutoKreditComponent;
