import Image from "next/image"
import Link from "next/link"

import NavItems from "./NavItems"
import UserDropdown from "./UserDropdown"

const Header = () => {
    const userr = {
        id: '1',
        name : 'Vishal Rauniyar',
        email: 'vishalkgupta3321@gmail.com'
    }
    return (
        <header className="sticky top-0 z-50 bg-background/80 supports-backdrop-filter:bg-background/60 header">
            <div className="container header-wrapper">
                <Link href='/' aria-label="Go to dashboard">
                    <Image 
                        src='/assets/icons/logo.svg'
                        alt="Signalist logo"
                        width={140}
                        height={32}
                        className="h-8 w-auto cursor-pointer"
                    />
                </Link>
                <nav className="hidden sm:block">
                    <NavItems initialStocks={[]} />
                </nav>

                <UserDropdown user={userr} initialStocks={[]} />
            </div>
        </header>
    )
}

export default Header