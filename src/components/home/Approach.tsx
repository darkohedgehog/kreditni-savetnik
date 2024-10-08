import React from 'react'
import { MdOutlineContactMail, MdOutlineFindInPage } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { LiaBusinessTimeSolid } from "react-icons/lia";



export default function Approach() {
    return (
      <>
        {/* Features Section: Boxes with Icons */}
        <div className="">
          <h1 className='flex items-center justify-center text-3xl lg:text-4xl font-bold text-purple dark:text-darkblue mt-16'>
            Kako mi to radimo?
          </h1>
          <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-28 xl:max-w-7xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border border-white bg-card-bg-light p-5 transition hover:border-blue-600 md:p-7 xl:p-10 dark:border-gray-800 dark:bg-card-bg-dark shadow-md shadow-accentblue dark:shadow-darkblue dark:hover:border-blue-400">
              <MdOutlineContactMail 
                  className="hi-outline hi-rectangle-stack mb-5 inline-block size-12 text-blue-600 dark:text-blue-500"/>
                  
                <h4 className="mb-2 text-lg font-bold">
                  1. Zatražite ponudu
                </h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Klilkom na opciju forma za prijavu na sajtu unosite podatke na osnovu kojih ćemo mi formirati ponudu prema Vašem zahtevu.
                </p>
              </div>
              <div className="rounded-lg border border-white bg-card-bg-light p-5 transition hover:border-blue-600 md:p-7 xl:p-10 dark:border-gray-800 dark:bg-card-bg-dark shadow-md shadow-accentblue dark:shadow-darkblue dark:hover:border-blue-400">
              <GrWorkshop 
                  className="hi-outline hi-rectangle-stack mb-5 inline-block size-12 text-blue-600 dark:text-blue-500"/>
                <h4 className="mb-2 text-lg font-bold">
                  2. Obrada zahteva
                </h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Naš iskusni tim kreditnih savetnika obrađuje zahtev i za Vas pronalazi ponudu sa najboljim uslovima u skladu sa Vašim potrebama.
                </p>
              </div>
              <div className="rounded-lg border border-white bg-card-bg-light p-5 transition hover:border-blue-600 md:p-7 xl:p-10 dark:border-gray-800 dark:bg-card-bg-dark shadow-md shadow-accentblue dark:shadow-darkblue dark:hover:border-blue-400">
              <MdOutlineFindInPage 
                  className="hi-outline hi-rectangle-stack mb-5 inline-block size-12 text-blue-600 dark:text-blue-500"/>
                <h4 className="mb-2 text-lg font-bold">3. Pronalazak najbolje ponude</h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Obrađujemo Vaš zahtev i u najkraćem mogućem roku kontaktiramo Vas i dostavljamo ponudu koja je u tom trenutku najpovoljnija za Vas.
                </p>
              </div>
              <div className="rounded-lg border border-white bg-card-bg-light p-5 transition hover:border-blue-600 sm:col-span-2 md:p-7 lg:col-span-1 xl:p-10 dark:border-gray-800 dark:bg-card-bg-dark shadow-md shadow-accentblue dark:shadow-darkblue dark:hover:border-blue-400">
              <LiaBusinessTimeSolid 
                  className="hi-outline hi-rectangle-stack mb-5 inline-block size-12 text-blue-600 dark:text-blue-500"/>
                <h4 className="mb-2 text-lg font-bold">4. Realizacija i sastanak</h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Nakon odabira ponude, naš savetnik Vam prosleđuje celokupnu dokumentaciju  i zakazuje sastanak u Vama najbližoj poslovnici.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* END Features Section: Boxes with Icons */}
      </>
    );
  }
  

