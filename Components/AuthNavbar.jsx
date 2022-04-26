import Logo from '../assets/navbarLogo.svg'
import Bars from '../assets/bars.svg'
import Image from 'next/image'
import { BsSearch } from 'react-icons/bs'
import { useRouter } from 'next/router'
import EventIcon from '../assets/events.svg'
import Arrow from '../assets/arrow.svg'
import Calendar from '../assets/calendar.svg'
import UpComing from '../assets/speaker.svg'
import Notification from '../assets/notification.svg'
import World from '../assets/world.svg'
import News from '../assets/news.svg'
import Listing from '../assets/listing.svg'
import Blog from '../assets/blog.svg'
import Heart from '../assets/heart.svg'
import Chat from '../assets/chat.svg'
import Alert from '../assets/alert.svg'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Link from 'next/link'
import { MdClose } from 'react-icons/md'

function AuthNav() {
    let handleDropdown = () => {
        let Dropdown = document.querySelector(".dropdown")
        Dropdown.classList.toggle("dropOpen")
    }
    let handleClose = () => {
        let mobileSidebar = document.querySelector(".mobileSidebar").style
        mobileSidebar.width = "0%"
        mobileSidebar.transition = "2s"
    }
    let handleOpen = () => {
        let mobileSidebar = document.querySelector(".mobileSidebar").style
        mobileSidebar.width = "100%"
        mobileSidebar.transition = "2s"
    }
    const router = useRouter()
    return (
        <div className='relative'>
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
                        <button className="bg-[#7D8CAC] text-white px-7 rounded-xl font-semibold text-[18px]" onClick={() => { router.push("/login") }}>Sign in</button>
                    </div>
                </div>
                <div className="lg:hidden flex bg-white rounded-full w-[47px] h-[47px] items-center justify-center cursor-pointer" onClick={handleOpen}>
                    <Image
                        src={Bars}
                        alt="Navbar three bars"
                    />
                </div>
            </div>
                <div className='h-[100vh] mobileSidebar z-50 overflow-y-auto category absolute top-0 right-0' style={{ background: 'rgba(0,0,0,40%)' }}>
            <div className="flex justify-end">
                    <div className="w-[290px] pt-5 pb-10 flex flex-col px-4 items-center bg-[#F1F4FB] h-[100vh] overflow-y-auto category">
                        <div className='h-auto'>
                            <div className='flex justify-end w-[255px] pb-10' onClick={handleClose}>
                                <div className="w-[47px] h-[47px] rounded-full bg-white flex justify-center items-center text-[24px]"><MdClose /></div>
                            </div>
                            <div className='w-[255px] h-[46px] bg-white text-[#7D8CAC] sm:rounded-xl rounded-lg flex items-center px-5'>
                                <BsSearch className='text-[20px]' />
                                <input type="text" className='w-full pl-4 focus:outline-none' placeholder="Search" />
                            </div>
                            <div className="w-[255px] h-[50px] rounded-xl bg-white flex items-center justify-between px-5 cursor-pointer mt-5" onClick={handleDropdown}>
                                <div className="flex h-[50px] items-center">
                                    <Image
                                        src={EventIcon}
                                        alt="EventIcon" />
                                    <span className="text-[#485470] font-semibold text-[18px] ml-3">Event Feed</span>
                                </div>
                                <MdKeyboardArrowDown className="text-[#AD7EFF] text-[24px]" />
                            </div>
                            <div className="overflow-hidden dropdown">
                                <a className="flex px-5 w-[255px] h-[50px] items-center mt-2 border-b cursor-pointer">
                                    <Image
                                        src={Arrow}
                                        alt="Arrow" />
                                    <span className="text-[#485470] font-semibold text-[18px] ml-6">Today</span>
                                </a>
                                <a className="flex px-5 w-[255px] h-[50px] items-center mt-2 border-b cursor-pointer">
                                    <Image
                                        src={UpComing}
                                        alt="UpComing" />
                                    <span className="text-[#485470] font-semibold text-[18px] ml-6">Upcoming</span>
                                </a>
                                <a className="flex px-5 w-[255px] h-[50px] items-center mt-2 border-b cursor-pointer">
                                    <Image
                                        src={Calendar}
                                        alt="Calendar" />
                                    <span className="text-[#485470] font-semibold text-[18px] ml-6">Ongoing</span>
                                </a>
                                <a className="flex px-5 w-[255px] h-[50px] items-center mt-2 cursor-pointer">
                                    <Image
                                        src={Notification}
                                        alt="Notification" />
                                    <span className="text-[#485470] font-semibold text-[18px] ml-6">Newest</span>
                                </a>
                            </div>
                            <div>
                                <Link href="/marketplaces" passHref>
                                    <a className="w-[255px] h-[50px] rounded-xl bg-white flex px-5 mt-4 items-center cursor-pointer">
                                        <Image
                                            src={World}
                                            alt="World" />
                                        <span className="text-[#485470] font-semibold text-[18px] ml-3">Marketplaces</span>
                                    </a>
                                </Link>
                                <Link href="/news" passHref>
                                    <a className="w-[255px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center cursor-pointer">
                                        <Image
                                            src={News}
                                            alt="News" />
                                        <span className="text-[#485470] font-semibold text-[18px] ml-3">NFT News</span>
                                    </a>
                                </Link>
                                <Link href="/blogs" passHref>
                                    <a className="w-[255px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center cursor-pointer">
                                        <Image
                                            src={Blog}
                                            alt="Blog" />
                                        <span className="text-[#485470] font-semibold text-[18px] ml-3">NFT Blogs</span>
                                    </a>
                                </Link>
                                <Link href="/favourite" passHref>
                                    <a className="w-[255px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center cursor-pointer">
                                        <Image
                                            src={Heart}
                                            alt="Heart" />
                                        <span className="text-[#485470] font-semibold text-[18px] ml-3">Favourites</span>
                                    </a>
                                </Link>
                                <Link href="/listing" passHref>
                                    <a className="w-[255px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center cursor-pointer">
                                        <Image
                                            src={Listing}
                                            alt="Listing" />
                                        <span className="text-[#485470] font-semibold text-[18px] ml-3">My Listings</span>
                                    </a>
                                </Link>
                            </div>
                            <Link href="/contactUs" passHref>
                                <a className="w-[255px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center cursor-pointer">
                                    <Image
                                        src={Chat}
                                        alt="Listing" />
                                    <span className="text-[#485470] font-semibold text-[18px] ml-3">Contact us</span>
                                </a>
                            </Link>
                            <Link href="/aboutUs" passHref>
                                <a className="w-[255px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center cursor-pointer">
                                    <Image
                                        src={Alert}
                                        alt="Listing" />
                                    <span className="text-[#485470] font-semibold text-[18px] ml-3">About us</span>
                                </a>
                            </Link>
                            <button className="bg-[#AD7EFF] text-white px-8 rounded-xl font-semibold text-[18px] h-[46px] w-[255px] mt-5" onClick={() => { router.push("/createEvent") }}>Create Event</button>
                            <button className="bg-[#7D8CAC] text-white px-7 rounded-xl font-semibold text-[18px] h-[46px] w-[255px] mt-5" onClick={() => { router.push("/login") }}>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

AuthNav.displayName = 'AuthNav';

export default AuthNav