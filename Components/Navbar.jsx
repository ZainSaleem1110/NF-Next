import Image from 'next/image'
import Logo from '../assets/navbarLogo.svg'
import { BiArrowBack } from 'react-icons/bi'

function Navbar() {
    return (
        <>
            <div className="bg-[#F1F4FB] w-full xl:py-10 py-5 justify-center sm:flex hidden">
                <Image
                    src={Logo}
                    alt="Navbar Logo"
                />
            </div>
            <div className="bg-white w-[70%] py-5 pl-5 justify-between sm:hidden flex">
                <div className='w-[53px] h-[53px] cursor-pointer rounded-full bg-[#FBFCFD] flex justify-center items-center '>
                    <BiArrowBack className='sm:text-[24px] text-[16px]' />
                </div>
                <Image
                    src={Logo}
                    alt="Navbar Logo"
                />
            </div>
        </>
    );
}

export default Navbar;
