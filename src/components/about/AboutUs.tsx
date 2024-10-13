import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import Logo from '../logo/Logo';


const AboutUs = () => {
  return (
 <>
    <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-purple dark:text-accentblue lg:text-4xl">
                    Upoznajte naš tim: <br/> stručnjaci <span className="text-darkblue">posvećeni Vašem finansijskom uspehu</span>
                    </h1>
                    
                    <p className="mt-3 text-gray-600 dark:text-gray-400 text-xl">
                    Sa više od 15 godina iskustva u bankarskom sektoru i finansijama, naš tim predstavlja pouzdanog partnera koji Vam može pomoći da prođete kroz složene finansijske izazove. Naš pristup je usmeren na razumevanje Vaših individualnih potreba i pružanje prilagođenih rešenja koja će povećati vaš finansijski potencijal. Kroz kombinaciju stručnosti, posvećenosti i inovativnih tehnologija, posvećeni smo tome da vam pomognemo da ostvarite vaše finansijske ciljeve. Birajte nas kao svog savetnika koji će vas podržati u svakom koraku, omogućavajući vam sigurnost i prosperitet u svim aspektima vašeg finansijskog života.</p>
                    <Link href={'/kontakt'}>
                    <button className="relative inline-flex h-12 w-[200px] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-6    ">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-accentwhite dark:text-darkblue backdrop-blur-3xl gap-3">
                     Kontakt
                     <FaLocationArrow />
                    </span>
                    </button>
                    </Link>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <Image 
                className="w-full h-full lg:max-w-3xl rounded-lg shadow-lg shadow-darkblue" 
                src="/podrskaklijntu.webp" 
                alt="O_nama"
                width={500}
                height={400}
                priority/>
            </div>
        </div>
        <div className='flex items-center justify-center flex-col mt-20 gap-4'>
            <Logo  />
           <h1 className='text-2xl lg:text-3xl font-bold text-purple dark:text-accentblue'>
            INFINITUM MSS
           </h1>
           <p className='text-xl lg:text-2xl font-semibold text-gray-500 dark:text-darkblue'>
            Usluge iz oblasti konsaltinga
            </p>
           <p className='text-lg font-semibold text-gray-500 dark:text-darkblue'>
            Matični broj: 67051254
           </p>
        </div>
    </div>
</>
    
  )
}

export default AboutUs