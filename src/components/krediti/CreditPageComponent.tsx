import Link from 'next/link'
import React from 'react'
import { credits } from '../../../data'

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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div>
            {credits.map((credit) => (
            <div key={credit.id}>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src={`https://example.com/image/${credit.slug}.jpg`}
                alt={credit.title}
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

            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">Auto krediti</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        Kupovina auta na kredit
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>

                    <div className="flex items-center justify-start mt-4">

                        <Link href="/" className="inline-block text-blue-500 underline hover:text-blue-400">
                            Read more
                        </Link>
                    </div>

                </div>
            </div>

            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt=""/>

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">Kredit za refinansiranje</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        Refinansirajte sve svoje obaveze
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>

                    <div className="flex items-center justify-start mt-4">

                        <Link href="/" className="inline-block text-blue-500 underline hover:text-blue-400">
                            Read more
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt=""/>

                <div className="mt-8">
                    <span className="text-blue-500 uppercase">Stambeni krediti</span>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                        Kupite svoj kutak za sebe i svoju porodicu
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi
                        recusandae nulla veritatis id tempore sapiente
                    </p>

                    <div className="flex items-center justify-start mt-4">

                        <Link href="/" className="inline-block text-blue-500 underline hover:text-blue-400">
                            Read more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default CreditPageComponent