import Image from 'next/image'
import React from 'react'

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
                    
                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Kontakt</button>
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
    </div>
</>
    
  )
}

export default AboutUs