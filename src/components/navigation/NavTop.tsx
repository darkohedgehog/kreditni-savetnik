import React from 'react'
import Logo from '../logo/Logo'
import { ModeToggle } from '../hooks/useThemeSwitch'

const NavTop = () => {
  return (
    <div className='flex items-center justify-between mx-6'>
        <Logo />
        <ModeToggle  />
    </div>
  )
}

export default NavTop