"use client"

import * as React from "react"
import { MdOutlineLightMode, MdOutlineDarkMode, MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <MdOutlineLightMode className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-400" />
          <MdOutlineDarkMode className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-cyan-100" />
          <span className="sr-only"></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
        className='gap-1 flex text-darkblue dark:text-accentblue' 
        onClick={() => setTheme("light")}>
          <MdOutlineLightMode />
          Svetla
        </DropdownMenuItem>
        <DropdownMenuItem 
        className='gap-1 flex text-darkblue dark:text-accentblue' 
        onClick={() => setTheme("dark")}>
          <MdOutlineDarkMode />
          Tamna
        </DropdownMenuItem>
        <DropdownMenuItem 
        className='gap-1 flex text-darkblue dark:text-accentblue' 
        onClick={() => setTheme("system")}>
          <MdOutlineSystemSecurityUpdateGood />
          Sistem
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}