import { BiArrowBack } from 'react-icons/bi'
import MainImg from '../assets/detailPageImg.svg'
import Share from '../assets/share.svg'
import Image from 'next/image'
import Link from 'next/link'
import PromotedIcon from '../assets/promoted.svg'
import Time from '../assets/time.svg'
import Twitter from '../assets/twitter.svg'
import Decord from '../assets/decord.svg'
import Instagram from '../assets/insta.svg'

function mobileViewDetailPage() {
    return (
        <div className="w-full">
            <div className="bg-[#F1F4FB] h-[75px] w-[100%] flex items-center px-5">
                <Link href="/landingPage" passHref>
                    <a className='w-[53px] h-[53px] cursor-pointer rounded-full bg-[#FBFCFD] flex justify-center items-center '>
                        <BiArrowBack className='sm:text-[24px] text-[16px]' />
                    </a>
                </Link>
                <h1 className='text-center w-[80%] font-bold text-[18px]'>NFT Details</h1>
            </div>
            <div className="mt-1 relative">
                <Image src={MainImg} alt="" />
                <button className="w-[57px] h-[57px] rounded-full bg-[#F1F4FB] flex justify-center items-center absolute top-5 right-5">
                    <Image src={Share} alt="" />
                </button>
            </div>
            <div className="px-5 pb-5">
                <div className="mt-4 flex items-center">
                    <h1 className="text-[28px] text-[#212121] font-bold">NFT Baby Grid Gang</h1>
                    <div className="flex ml-3 items-center">
                        <Image src={PromotedIcon} alt="" />
                        <p className="text-[15px] text-[#485470] ml-2">Promoted</p>
                    </div>
                </div>
                <div className="h-[32px] max-w-[249px] mt-4 bg-[#F1F4FB] rounded-2xl flex items-center px-3 py-1">
                    <Image src={Time} alt="" />
                    <span className="ml-2 text-[15px] text-[#485470]">Apr 16, 2022 – Apr 23, 2022</span>
                </div>
                <div className="mt-4 w-[100%] bg-[#F1F4FB] rounded-xl p-4">
                    <button className="bg-[#FE7762] rounded-xl text-[18px] font-bold text-white h-[52px] w-full">Go to Project</button>
                    <button className="text-[#FE7762] bg-white rounded-xl text-[18px] font-bold text-white h-[52px] w-full mt-5">+ Add to Calender</button>
                </div>
                <div className="mt-4">
                    <p className="text-[20px] text-[#485470] font-bold">Detail</p>
                    <div className="p-5 mt-4 rounded-xl bg-[#F1F4FB] text-[14px]">
                        <p className=" text-[#212121]">Grid Gang is the first of its kind NFT platform built on top of the Waves blockchain.
                            <span className="block mt-4">Buying and selling of the NFTs all happen within a 1024x1024 square grid. In a unique feature with Grid Gang, your NFT will evolve to a high generation as you claim squares In groups of 4. This will happen automatically at the time of minting with all of the assets making up the evolution being burnt. This creates a deflationary environment making the total supply starting at 1,048,576 decrease to a mere 1024 at generation 5. At the time of minting, you are able to add a social handle or website to promote your brand and facilitate the buying/selling of squares.
                            </span>
                            <span className="block mt-4">In the future, we are working with 2 affiliations to give you exclusive access to events and drops.
                                Sign up on gridgang.io and Discord to get all the info before anyone else.
                            </span>
                            <span className="block mt-4">Public-sale Price: 0.08 WAVES</span>
                        </p>
                    </div>
                </div>
                <div className="mt-3">
                    <p className="text-[20px] text-[#485470] font-bold">Detail</p>
                    <div className="w-[100%] bg-[#F1F4FB] rounded-xl p-4 mt-3">
                        <button className="bg-white rounded-xl text-[16px] text-[#485470] h-[52px] w-full flex items-center justify-between px-5">
                            <div className="flex items-center">
                                <Image src={Twitter} alt="" />
                                <p className="ml-4"><span className="font-bold">3.7k</span> Followers</p>
                            </div>
                            <a className="text-white font-bold bg-[#FE7762] px-4 py-1 rounded-2xl">View</a>
                        </button>
                        <button className="bg-white rounded-xl text-[16px] text-[#485470] h-[52px] w-full flex items-center justify-between px-5 mt-3">
                            <div className="flex items-center">
                                <Image src={Decord} alt="" />
                                <p className="ml-4"><span className="font-bold">2.5k</span> Followers</p>
                            </div>
                            <a className="text-white font-bold bg-[#FE7762] px-4 py-1 rounded-2xl">View</a>
                        </button>
                        <button className="bg-white rounded-xl text-[16px] text-[#485470] h-[52px] w-full flex items-center justify-between px-5 mt-3">
                            <div className="flex items-center">
                                <Image src={Instagram} alt="" />
                                <p className="ml-4"><span className="font-bold">1.6k</span> Followers</p>
                            </div>
                            <a className="text-white font-bold bg-[#FE7762] px-4 py-1 rounded-2xl">View</a>
                        </button>
                    </div>
                </div>
                <div className="mt-3">
                    <p className="text-[20px] text-[#485470] font-bold">Detail</p>
                    <div className=" w-[100%] bg-[#F1F4FB] rounded-xl p-4 mt-4">
                        <button className="bg-white rounded-xl sm:text-[16px] text-[14px] sm:font-bold font-semibold text-[#485470] h-[52px] w-full flex items-center justify-between px-5">
                            <p>Launch Date</p>
                            <p>12 Apr, 2022</p>
                        </button>
                        <button className="bg-white rounded-xl sm:text-[16px] text-[14px]
                         sm:font-bold font-semibold text-[#485470] h-[52px] w-full flex items-center justify-between px-5 mt-3">
                            <p>Mint Price</p>
                            <p>0.08</p>
                        </button>
                        <button className="bg-white rounded-xl sm:text-[16px] text-[14px]
                         sm:font-bold font-semibold text-[#485470] h-[52px] w-full flex items-center justify-between px-5 mt-3">
                            <p>Mint URL</p>
                            <p>Gridgang.io</p>
                        </button>
                        <button className="bg-white rounded-xl sm:text-[16px] text-[14px]
                         sm:font-bold font-semibold text-[#485470] h-[52px] w-full flex items-center justify-between px-5 mt-3">
                            <p>Token Quantity</p>
                            <p>10,000</p>
                        </button>
                        <button className="bg-white rounded-xl sm:text-[16px] text-[14px]
                         sm:font-bold font-semibold text-[#485470] h-[52px] w-full flex items-center justify-between px-5 mt-3">
                            <p>Marketplace</p>
                            <p>Opensea</p>
                        </button>
                        <button className="bg-white rounded-xl sm:text-[16px] text-[14px]
                         sm:font-bold font-semibold text-[#485470] h-[52px] w-full flex items-center justify-between px-5 mt-3">
                            <p>Blockchain</p>
                            <p>Etherium</p>
                        </button>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="text-[20px] text-[#485470] font-bold">Tags</p>
                </div>
                <div className="mt-5 h-[52px] flex items-center gap-5 overflow-x-auto category">
                    <div className="bg-[#F1F4FB] px-4 py-2 rounded-lg text-[#485470] font-semibold">Collectable</div>
                    <div className="bg-[#F1F4FB] px-4 py-2 rounded-lg text-[#485470] font-semibold">Reward</div>
                    <div className="bg-[#F1F4FB] px-4 py-2 rounded-lg text-[#485470] font-semibold">Collection</div>
                    <div className="bg-[#F1F4FB] px-4 py-2 rounded-lg text-[#485470] font-semibold">Game</div>
                    <div className="bg-[#F1F4FB] px-4 py-2 rounded-lg text-[#485470] font-semibold">Trending</div>
                </div>
            </div>
        </div>
    )
}

export default mobileViewDetailPage
