import AuthNavbar from '../../Components/AuthNavbar'
import Sidebar from '../../Components/Sidebar'
import Empty from '../../assets/empty.svg'
import ListingArrow from '../../assets/listingArrow.svg'
import Image from 'next/image'
import BlogCard from '../../Components/favouriteCard'
import Img01 from '../../assets/Img01.svg'
import { useRouter } from 'next/router'

const Data = ["abcd"]

function Listing() {
    const router = useRouter()
    return (
        <div className="w-[100%]">
            <AuthNavbar />
            <div className="flex">
                <div className="w-[290px] bg-[#F1F4FB] lg:flex hidden">
                    <Sidebar />
                </div>
                <div className="w-full pt-8 sm:pl-8 pl-2 overflow-x-hidden">
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
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-col gap-5 mt-10 sm:pr-8 pr-2 overflow-y-auto category">
                            <BlogCard BlogImg={Img01}/>
                        <div className="max-w-[460px] h-[420px] rounded-xl border border-[#AD7EFF] cursor-pointer flex flex-col justify-center items-center" onClick={()=>{router.push("/createEvent")}}>
                            <button className="text-white h-[65px] w-[65px] font-bold text-[24px] bg-[#AD7EFF] rounded-full">+</button>
                            <h1 className="text-[20px] font-bold mt-2 text-[#AD7EFF]">Create Event</h1>
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
