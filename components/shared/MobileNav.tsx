import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Image from "next/image"
  import NavItems from "./NavItems"
  
  
  const MobileNav = () => {
    return (
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle ml-5">
            <Image 
              src="/assets/icons/menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
            <NavItems />
          </SheetContent>
        </Sheet>
      </nav>
    )
  }
  
  export default MobileNav