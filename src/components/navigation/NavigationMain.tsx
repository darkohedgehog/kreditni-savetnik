import React from 'react'
import NavTop from './NavTop'
import { Nav } from './Nav'

const NavigationMain = () => {
  return (
    <div>
        <NavTop  />
        <div className='flex items-center justify-center'>
            <Nav />
        </div>
    </div>
  )
}

export default NavigationMain