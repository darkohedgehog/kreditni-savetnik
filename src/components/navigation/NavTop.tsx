import React from 'react'
import Logo from '../logo/Logo'
import { ModeToggle } from '../hooks/useThemeSwitch'

const NavTop = () => {
  return (
    <div className='flex items-center justify-between gap-10 w-full sticky z-20 top-0 px-4'>
        <Logo />
        <ModeToggle />
    </div>
  )
}

export default NavTop
