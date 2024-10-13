import React from 'react'
import Logo from '../logo/Logo'
import { ModeToggle } from '../hooks/useThemeSwitch'
import Link from 'next/link'

const NavTop = () => {
  return (
    <div className='flex items-center justify-between gap-10 w-full z-20 mt-4 px-4'>
      <Link  href='/'>
        <Logo />
      </Link>
        <ModeToggle />
    </div>
  )
}

export default NavTop
