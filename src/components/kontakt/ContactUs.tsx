import React from 'react'
import { MdOutlineLocalPhone, MdMailOutline } from "react-icons/md";

const ContactUs = () => {
  return (
    <>
    <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
            <p className="text-purple dark:text-blue-400 mt-16 text-3xl lg:text-4xl uppercase font-semibold">
                Očekujemo Vaš poziv
            </p>
            <h1 className="mt-4 text-2xl font-semibold text-gray-600 md:text-3xl dark:text-white">
                Budimo u kontaktu
            </h1>
            <p className="mt-4 font-bold text-gray-500 dark:text-gray-400">
                Uvek smo raspoloženi za razgovor
            </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <MdMailOutline className='w-8 h-8' />
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Uvek spremni da pomognemo</p>
                <p className="mt-2 text-blue-500 dark:text-blue-400">kreditnisaveti@gmail.com</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <MdOutlineLocalPhone className='w-8 h-8' />
                </span>
                
                <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Telefon</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Pon-Pet od 09:00h do 17:00h.</p>
                <p className="mt-2 text-blue-500 dark:text-blue-400">+381645002058</p>
            </div>
        </div>
    </div>
</>
  )
}

export default ContactUs