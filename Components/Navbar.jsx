import Image from 'next/image'
import Logo from '../assets/navbarLogo.svg'

function Navbar() {
    return (
        <>
            <div className="bg-[#F1F4FB] w-full sm:py-10 py-5 justify-center sm:flex hidden">
                <Image
                    src={Logo}
                    alt="Navbar Logo"
                />
            </div>
            <h1 className="sm:hidden flex">Hello</h1>
        </>
    );
}

export default Navbar;
