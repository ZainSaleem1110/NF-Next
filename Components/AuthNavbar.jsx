import Logo from '../assets/navbarLogo.svg'
import Bars from '../assets/bars.svg'
import Image from 'next/image'
import { BsSearch } from 'react-icons/bs'
import { useRouter } from 'next/router'

function AuthNav() {
    const router = useRouter()
    return (
        <>
            <div className="bg-[#F1F4FB] w-[100%] xl:py-10 py-5 xl:px-20 sm:px-10 px-5 justify-between flex overflow-x-hidden">
                <div className="w-[306px]">
                    <Image
                        src={Logo}
                        alt="Navbar Logo"
                    />
                </div>
                <div className="justify-between w-[100%] lg:flex hidden">
                    <div className='xl:w-[475px] w-[375px] h-[56px] bg-white text-[#7D8CAC] sm:rounded-xl rounded-lg flex items-center px-5'>
                        <BsSearch className='text-[20px]' />
                        <input type="text" className='w-full pl-4 focus:outline-none' placeholder="Search" />
                    </div>
                    <div className="flex gap-5">
                        <button className="bg-[#AD7EFF] text-white px-8 rounded-xl font-semibold text-[18px]" onClick={() => { router.push("/createEvent") }}>Create Event</button>
                        <button className="bg-[#7D8CAC] text-white px-7 rounded-xl font-semibold text-[18px]" onClick={()=>{router.push("/login")}}>Sign in</button>
                    </div>
                </div>
                <div className="lg:hidden flex bg-white rounded-full w-[47px] h-[47px] items-center justify-center cursor-pointer">
                    <Image
                        src={Bars}
                        alt="Navbar three bars"
                    />
                </div>
            </div>
        </>
    )
}

AuthNav.displayName = 'AuthNav';

export default AuthNav