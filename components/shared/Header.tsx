import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full">
        <div className="wrapper flex items-center justify-between">
            <div className="w-32">
            <Link href="/" className="w-32">
                <Image 
                    src="/assets/images/logo.png"
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="object-contain object-center min-w-[50vw] sm:min-w-[12vw]"
                />
                
            </Link>
            </div>

            <div className="md:flex hidden justify-end">
                <NavItems />
            </div>

            <div className="md:hidden flex justify-end">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header