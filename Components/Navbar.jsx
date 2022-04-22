import Image from 'next/image'
import Logo from '../assets/navbarLogo.svg'
import { BiArrowBack } from 'react-icons/bi'

function Navbar() {
    return (
        <>
            <div className="sm:bg-[#F1F4FB] bg-white sm:w-full w-[70%] xl:py-10 py-5 sm:pl-0 pl-5 sm:justify-center justify-between flex">
            <div className='w-[53px] h-[53px] cursor-pointer rounded-full bg-[#FBFCFD] flex sm:hidden justify-center items-center '>
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
