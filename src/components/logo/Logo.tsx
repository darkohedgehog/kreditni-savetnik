import Image from 'next/image';
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Image
            src={'/logo.png'}
            className="h-10 w-14 lg:h-16 lg:w-16"
            alt="Logo"
            width={40}
            height={40}
            priority={true}
          />
    </div>
  )
}

export default Logo;