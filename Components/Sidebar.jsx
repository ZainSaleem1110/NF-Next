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
        <div className="w-[306px] h-[972px] overflow-hidden py-10 flex flex-col bg-[#F1F4FB] px-4">
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
                <div className="flex px-5 w-[252px] h-[50px] items-center mt-2 border-b">
                    <Image
                        src={Arrow}
                        alt="Arrow" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-6">Today</span>
                </div>
                <div className="flex px-5 w-[252px] h-[50px] items-center mt-2 border-b">
                    <Image
                        src={UpComing}
                        alt="UpComing" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-6">Upcoming</span>
                </div>
                <div className="flex px-5 w-[252px] h-[50px] items-center mt-2 border-b">
                    <Image
                        src={Calendar}
                        alt="Calendar" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-6">Ongoing</span>
                </div>
                <div className="flex px-5 w-[252px] h-[50px] items-center mt-2">
                    <Image
                        src={Notification}
                        alt="Notification" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-6">Newest</span>
                </div>
            </div>
            <div>
                <div className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-4 items-center">
                    <Image
                        src={World}
                        alt="World" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">Marketplaces</span>
                </div>
                <div className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center">
                    <Image
                        src={News}
                        alt="News" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">NFT News</span>
                </div>
                <div className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center">
                    <Image
                        src={Blog}
                        alt="Blog" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">NFT Blogs</span>
                </div>
                <div className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center">
                    <Image
                        src={Heart}
                        alt="Heart" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">Favourites</span>
                </div>
                <div className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center">
                    <Image
                        src={Listing}
                        alt="Listing" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">My Listings</span>
                </div>
            </div>
            <div className="mt-24">
                <div className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center">
                    <Image
                        src={Chat}
                        alt="Listing" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">Contact us</span>
                </div>
                <div className="w-[252px] h-[50px] rounded-xl bg-white flex px-5 mt-5 items-center">
                    <Image
                        src={Alert}
                        alt="Listing" />
                    <span className="text-[#485470] font-semibold text-[18px] ml-3">About us</span>
                </div>
            </div>
        </div>
    )
}

Sidebar.displayName = 'Sidebar';

export default Sidebar