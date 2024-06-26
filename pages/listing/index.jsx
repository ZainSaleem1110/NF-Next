import AuthNavbar from '../../Components/AuthNavbar'
import Sidebar from '../../Components/Sidebar'
import Empty from '../../assets/empty.svg'
import ListingArrow from '../../assets/listingArrow.svg'
import Image from 'next/image'
import BlogCard from '../../Components/favouriteCard'
import Img01 from '../../assets/Img01.svg'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Data = ["abcd"]

function Listing() {
    const router = useRouter()
    return (
        <div className="w-[100%] h-[100vh] overflow-hidden">
            <AuthNavbar />
            <div className="flex overflow-hidden 2xl:h-[85vh] h-[80vh] pb-5">
                <div className=" bg-[#F1F4FB] lg:flex hidden overflow-y-auto category w-[370px] 2xl:h-[85vh] h-[80vh]">
                    <Sidebar />
                </div>
                <div className="w-full pt-8 sm:pl-8 pl-2 overflow-x-hidden category">
                    {Data.length === 0 && (
                        <div className="relative">
                            <div className=" flex flex-col items-center mt-20">
                                <Image src={Empty} alt="" />
                                <h1 className="text-[22px] font-bold mt-4">There is no Listing yet!</h1>
                                <p className="text-[#7D8CAC] font-medium text-center mt-3">You can list all your NFT Event</p>
                            </div>
                        </div>
                    )}
                    {Data.length > 0 && (
                        <div className="w-full pt-3 sm:pl-8 pl-2 overflow-x-hidden">
                            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-col gap-5 mt-10 sm:pr-8 pr-2 overflow-y-auto category">
                                <Link href="/detailPage" passHref>
                                    <div className='cursor-pointer'>
                                    <BlogCard BlogImg={Img01} />
                                    </div>
                                </Link>
                                <div className="max-w-[460px] rounded-xl border border-[#AD7EFF] cursor-pointer flex flex-col justify-center items-center" onClick={() => { router.push("/createEvent") }}>
                                    <button className="text-white h-[65px] w-[65px] font-bold text-[24px] bg-[#AD7EFF] rounded-full">+</button>
                                    <h1 className="text-[20px] font-bold mt-2 text-[#AD7EFF]">Create Event</h1>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

Listing.displayName = "Listing"

export default Listing
