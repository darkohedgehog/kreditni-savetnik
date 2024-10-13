import Link from 'next/link'
import React from 'react'
import { credits } from '../../../data'
import Image from 'next/image'

const CreditPageComponent = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                Vrste kredita 
            </h1>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700"/>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            
            {credits.map((credit) => (
            <div key={credit.id}>
              <Image
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src={credit.image}
                alt={credit.title}
                width={500}
                height={300}
                priority
              />
              <div className="mt-8">
                <span className="text-blue-500 uppercase">{credit.title}</span>
                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  {credit.title}
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">{credit.description}</p>
                <div className="flex items-center justify-start mt-4">
                  <Link href={`/krediti/${credit.slug}`} className="inline-block text-blue-500 underline hover:text-blue-400">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
            
        </div>
    </div>
</section>
  )
}

export default CreditPageComponent