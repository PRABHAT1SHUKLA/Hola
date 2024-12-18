
import { usePathname } from 'next/navigation'
import React from 'react'
import { Sheet, SheetTrigger } from './ui/sheet';
import Image from 'next/image';

const MobileNav = () => {

  const pathname = usePathname();


  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger asChild>
        <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="hamburger icon"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
      </Sheet>

    </section>
  )
}

export default MobileNav