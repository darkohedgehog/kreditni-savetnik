import Link from 'next/link'
import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { RiMessengerLine, RiLinkedinBoxFill, RiNextjsFill } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GiHedgehog } from "react-icons/gi";
import Logo from './logo/Logo';

const Footer = () => {
  return (
    <>
      <footer className="dark:bg-card-bg-dark bg-card-bg-light rounded-lg m-4 bottom-0 w-full mx-0">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link href={"/"} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Logo />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-accentDark"></span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-accentblue">
                <li>
                    <Link href={"/terms"} className="hover:underline me-4 md:me-6">Uslovi korištenja</Link>
                </li>
                <li>
                    <Link href={"/privacy"} className="hover:underline me-4 md:me-6">Pravila privatnosti</Link>
                </li>
                <li>
                    <Link href={"/contact"} className="hover:underline">Kontakt</Link>
                </li>
            </ul>  
        </div>
        <div className='flex items-center justify-center my-16 flex-col'>
            <h3 className='text-purple dark:text-accentblue text-sm mb-4 font-semibold'>
                Budimo u kontaktu
                </h3>
        <span className="inline-flex mx-4">
                  <Link 
                  className="text-blue-500" 
                  href={'https://www.facebook.com/?locale=hr_HR'} target='blank'>
                  <FiFacebook className='h-6 w-6' />
                  </Link>
                  <Link 
                  className="text-blue-500 mx-2" 
                  href={'https://business.facebook.com/latest/inbox/messenger?asset_id=137597493551735&business_id=1133499703746344'}
                  target='blank'>
                  <RiMessengerLine className='h-6 w-6' />
                  </Link>
                  <Link 
                  className="mx-2 text-blue-500" 
                  href={'mailto:prodaja@zivic-elektro.com'} target='blank'>
                  <MdOutlineAlternateEmail className='h-6 w-6' />
                  </Link>
                  <Link 
                  className="text-blue-500 mx-2" 
                  href={'https://www.linkedin.com'} target='blank'>
                  <RiLinkedinBoxFill className='h-6 w-6' />
                  </Link>
                </span>
                </div>
        <div className="flex items-center justify-center gap-2 my-3 text-sm text-gray-700 sm:text-center dark:text-darkblue"> 
         Powered by 
         <Link href={'https://nextjs.org/'} target='blank'>
         <RiNextjsFill className='w-6 h-6' />
         </Link>
        </div>
        <div className="flex items-center justify-center gap-2 my-6 text-sm text-purple sm:text-center dark:text-accentblue"> 
         Developed by Hedgehog
         <Link href={'https://www.hedgehogwebdev.com'} target='blank'>
         <GiHedgehog className='w-6 h-6' />
         </Link>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-800 lg:my-8" />
        <span className="block text-sm text-purple sm:text-center dark:text-darkblue"> 
        © {new Date().getFullYear()} INFINITUM MSS. Sva prava zadržana. 
        <Link href={"/"} className="hover:underline">
        </Link> 
        <div className="flex items-center justify-center gap-2 my-6 text-sm text-gray-500 sm:text-center dark:text-accentblue"> 
         <Link href={'/sitemap.xml'} target='blank'>
            sitemap.xml
         </Link>
        </div>
        </span>
    </div>
</footer>


    </>
  )
}

export default Footer