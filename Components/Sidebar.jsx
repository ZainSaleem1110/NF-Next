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
import { MdKeyboardArrowUp } from 'react-icons/md'
import Image from 'next/image';
function Sidebar() {
    return (
        <div className="w-[290px] overflow-hidden py-10 flex flex-col px-4 items-center">
            <div className="w-[252px] h-[50px] rounded-xl bg-white flex items-center justify-between border border-[#AD7EFF] px-5">
                <div className="flex">
                    <Image
                        src={EventIcon}
                        alt="EventIcon" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">Event Feed</span>
                </div>
                <MdKeyboardArrowUp className="text-[#AD7EFF] text-[24px]" />
            </div>
            <div>
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
                <a className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-4 items-center cursor-pointer">
                    <Image
                        src={World}
                        alt="World" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">Marketplaces</span>
                </a>
                <a className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center cursor-pointer">
                    <Image
                        src={News}
                        alt="News" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">NFT News</span>
                </a>
                <a className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center cursor-pointer">
                    <Image
                        src={Blog}
                        alt="Blog" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">NFT Blogs</span>
                </a>
                <a className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center cursor-pointer">
                    <Image
                        src={Heart}
                        alt="Heart" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">Favourites</span>
                </a>
                <a className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center cursor-pointer">
                    <Image
                        src={Listing}
                        alt="Listing" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">My Listings</span>
                </a>
            </div>
            <div className="mt-24">
                <a className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center cursor-pointer">
                    <Image
                        src={Chat}
                        alt="Listing" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">Contact us</span>
                </a>
                <a className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center cursor-pointer">
                    <Image
                        src={Alert}
                        alt="Listing" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">About us</span>
                </a>
            </div>
        </div>
    )
}

Sidebar.displayName = 'Sidebar';

export default Sidebar