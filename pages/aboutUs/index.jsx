import AuthNavbar from '../../Components/AuthNavbar'
import Sidebar from '../../Components/Sidebar'
import Image from 'next/image'
import { AiOutlineInstagram } from 'react-icons/ai'
import {FaFacebook,FaTwitter} from 'react-icons/fa'
import DecordImg from '../../assets/decord-white.svg'

function AboutUs() {
    return (
        <div className="w-[100%]">
            <AuthNavbar />
            <div className="flex">
                <div className="w-[290px] bg-[#F1F4FB] lg:flex hidden">
                    <Sidebar />
                </div>
                <div className="h-[1000px] overflow-y-auto category pb-10">
                    <div className="xl:w-[70%] lg:w-[90%] w-[100%] sm:pl-10 pl-5 lg:pr-0 sm:pr-10 pr-5 mt-5  text-[#212121]">
                        <h1 className="text-[28px] font-bold">About NF.Tea</h1>
                        <p className="mt-3 text-[18px]">NFTCalendar is the first calendar in the NFT Universe. We cover the most eye-catching drops, exciting events, and high-profile releases that keep the wheels of the Non-Fungible Token industry turning!</p>
                        <p className="mt-5 text-[18px]">We feature the releases of both well-known and fledgling artists who drop their collections or single pieces on various marketplaces and platforms.</p>
                        <p className="mt-5 text-[18px]">The mission of the NFTCalendar is to support the creators and contribute to their development in the crypto art field. That’s why any creator can add his drop or event in the NFTCalendar for free.</p>
                        <p className="mt-5 text-[18px]">There is also a knowledge base on our platform where beginners can clarify a lot about minting, selling, and promoting their non-fungible tokens. Besides, we keep an eye on everything happening in the industry and cover current news and events for our community to stay updated.</p>
                        <p className="mt-5 text-[18px]">We value the time and effort of each person who has joined the non-fungible movement. That is why we created a hub in the Universe of digital collectibles that is always there for you when it comes to NFT releases, news, and events.</p>
                        <p className="mt-5 text-[18px]">With love and respect for all NFT Collectors and the Community of crypto art connoisseurs!</p>
                    </div>
                    <div className="xl:w-[70%] lg:w-[90%] w-[100%] sm:pl-10 pl-5 lg:pr-0 sm:pr-10 pr-5 mt-10  text-[#212121]">
                        <h1 className="text-[28px] font-bold">Support us</h1>
                        <p className="mt-3 text-[18px]">We are working hard to empower creators and publishers on a daily basis.</p>
                        <p className="mt-5 text-[18px]">If you like our project and want to support our work, you can donate here.</p>
                        <p className="mt-5 text-[18px]">BTC:3R1kd5ZvfiUTV6rcVG5xuiWn5KFPscicGX</p>
                        <p className="mt-5 text-[18px]">ETH:0x263C09e02fDf5f36a99C5898DD21F88B24a5Ee2d</p>
                        <p className="mt-5 text-[18px]">XRP:rLBS2LytjifykTytPQeqDdvFCDnLG3nunq</p>
                    </div>
                    <div className="xl:w-[70%] lg:w-[90%] w-[100%] sm:pl-10 pl-5 lg:pr-0 sm:pr-10 pr-5 mt-10  text-[#212121]">
                        <h1 className="text-[28px] font-bold">Our Community</h1>
                        <div className="w-[240px] h-[44px] flex justify-between items-center mt-5">
                        <button className="w-[44px] h-[44px] rounded-full text-white bg-[#99A7C7] flex justify-center items-center text-[24px]">
                                <Image src={DecordImg} alt=""/>
                            </button>
                            <button className="w-[44px] h-[44px] rounded-full text-white bg-[#99A7C7] flex justify-center items-center text-[24px]">
                                <AiOutlineInstagram />
                            </button>
                            <button className="w-[44px] h-[44px] rounded-full text-white flex justify-center items-center text-[24px]">
                                <FaFacebook className="w-[44px] h-[44px] text-[#99A7C7]" />
                            </button>
                            <button className="w-[44px] h-[44px] rounded-full text-white bg-[#99A7C7] flex justify-center items-center text-[24px]">
                                <FaTwitter />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

AboutUs.displayName = "AboutUs"

export default AboutUs
