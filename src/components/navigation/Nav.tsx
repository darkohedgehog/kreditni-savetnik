"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Logo from "../logo/Logo"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Keš krediti",
    href: "/kalkulatori/kes-kredit",
    description:
      "Dinarski keš kredit omogućava brzu i jednostavnu pozajmicu bez devizne klauzule, idealan za pokrivanje neplaniranih troškova.",
  },
  {
    title: "Auto krediti",
    href: "/kalkulatori/auto-kredit",
    description:
      "Auto kredit vam pruža priliku da jednostavno i povoljno finansirate kupovinu novog ili polovnog automobila.",
  },
  {
    title: "Refinansirajući kredit",
    href: "/kalkulatori/kredit-za-refinansiranje",
    description:
      "Refinansirajući kredit omogućava vam da objedinite postojeće obaveze i smanjite mesečne rate uz povoljnije uslove otplate.",
  },
  {
    title: "Stambeni krediti",
    href: "/kalkulatori/stambeni-kredit",
    description: "Stambeni kredit je dugoročna finansijska podrška za kupovinu, izgradnju ili renoviranje vašeg doma, uz prilagođene uslove otplate.",
  },
]

export function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-purple dark:text-darkblue">Naslovna</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    
                    <Logo  />
                    
                    <div className="mb-2 mt-4 text-lg font-medium text-purple">
                      Kreditni savtenik
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground text-darkblue">
                      INFINITUM MSS: Vaš partner u finansijskom planiranju
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/o-nama" title="O nama">
               Više od 15 godina iskustva u bankarskom sektoru i finansijama
              </ListItem>
              <ListItem href="/krediti" title="Krediti">
                U najkraćem roku pronalazimo najbolje rešenje za Vas...
              </ListItem>
              <ListItem href="/krediti" title="Krediti">
                Uštedite vreme i novac uz našu pomoć...
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-purple dark:text-darkblue">Kalkulatori</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/kontakt" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-purple dark:text-darkblue`}>
              Kontakt
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
