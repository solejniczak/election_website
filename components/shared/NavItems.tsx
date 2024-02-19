'use client';

import { headerLinks } from '@/constants'
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
  const pathname = usePathname();
  console.log("path", pathname)
  return (
    <ul className="md:flex-between flex w-full flex-col gap-10 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        
        return (
          <li
            key={link.route}
            className={`${
              isActive && 'text-blue-500'
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
                  <Image 
                src="/assets/icons/facebook.png"
                alt="facebook"
                width={32}
                height={32}
            />
    </ul>
  )
}

export default NavItems