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
import Image from 'next/image';
import Link from 'next/link'

function Sidebar() {
    let handleDropdown = () => {
        let Dropdown = document.querySelector(".dropdown")
        Dropdown.classList.toggle("dropOpen")
    }

    return (
        <div className="w-[290px] h-[950px] py-10 flex flex-col px-4 items-center">
            <div className="w-[252px] h-[50px] rounded-xl bg-white flex items-center justify-between px-5 cursor-pointer" onClick={handleDropdown}>
                <div className="flex">
                    <Image
                        src={EventIcon}
                        alt="EventIcon" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">Event Feed</span>
                </div>
                <MdKeyboardArrowDown className="text-[#AD7EFF] text-[24px]" />
            </div>
            <div className="overflow-hidden dropdown">
                <a className="flex px-5 w-[252px] h-[50px] items-center mt-2 border-b cursor-pointer">
                    <Image
                        src={Arrow}
                        alt="Arrow" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-6">Today</span>
                </a>
                <a className="flex px-5 w-[252px] h-[50px] items-center mt-2 border-b cursor-pointer">
                    <Image
                        src={UpComing}
                        alt="UpComing" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-6">Upcoming</span>
                </a>
                <a className="flex px-5 w-[252px] h-[50px] items-center mt-2 border-b cursor-pointer">
                    <Image
                        src={Calendar}
                        alt="Calendar" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-6">Ongoing</span>
                </a>
                <a className="flex px-5 w-[252px] h-[50px] items-center mt-2 cursor-pointer">
                    <Image
                        src={Notification}
                        alt="Notification" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-6">Newest</span>
                </a>
            </div>
            <div>
                <Link href="/marketplaces" passHref>
                    <a className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-4 items-center cursor-pointer">
                        <Image
                            src={World}
                            alt="World" />
                        <span className="text-[#485470] font-semibold text-[18px] ml-3">Marketplaces</span>
                    </a>
                </Link>
                <Link href="/news" passHref>
                <a className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center cursor-pointer">
                    <Image
                        src={News}
                        alt="News" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">NFT News</span>
                </a>
                </Link>
                <Link href="/blogs" passHref>
                <a className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center cursor-pointer">
                    <Image
                        src={Blog}
                        alt="Blog" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">NFT Blogs</span>
                </a>
                </Link>
                <Link href="/favourites" passHref>
                <a className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center cursor-pointer">
                    <Image
                        src={Heart}
                        alt="Heart" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">Favourites</span>
                </a>
                </Link>
                <Link href="/listing" passHref>
                <a className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center cursor-pointer">
                    <Image
                        src={Listing}
                        alt="Listing" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">My Listings</span>
                </a>
                </Link>
            </div>
            <div className="mt-24">
                <Link href="/contactUs" passHref>
                <a className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center cursor-pointer">
                    <Image
                        src={Chat}
                        alt="Listing" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">Contact us</span>
                </a>
                </Link>
                <Link href="/aboutUs" passHref>
                <a className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center cursor-pointer">
                    <Image
                        src={Alert}
                        alt="Listing" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">About us</span>
                </a>
                </Link>
            </div>
        </div>
    )
}

Sidebar.displayName = 'Sidebar';

export default Sidebar