import AuthNavbar from '../../Components/AuthNavbar'
import Sidebar from '../../Components/Sidebar'
import NotFavourite from '../../assets/notFavourite.svg'
import Image from 'next/image'
import BlogCard from '../../Components/BlogCard'
import Img01 from '../../assets/Img01.svg'

const Data = ["abcd"]

function Favourite() {
    return (
        <div className="w-[100%]">
            <AuthNavbar />
            <div className="flex">
                <div className="w-[290px] bg-[#F1F4FB] lg:flex hidden">
                    <Sidebar />
                </div>
                <div className="w-full pt-8 sm:pl-8 pl-2 overflow-x-hidden">
                    {Data.length === 0 && (
                        <div className="w-full flex flex-col items-center mt-20">
                            <Image src={NotFavourite} alt="" />
                            <h1 className="text-[22px] font-bold mt-4">No Favourites Yet!</h1>
                            <p className="w-[30%] text-[#7D8CAC] font-medium text-center mt-3">You can add your favourite NFTs by clicking the Heart icon</p>
                        </div>
                    )}
                    {Data.length > 0 && (
                        <div className="w-full pt-8 sm:pl-8 pl-2 overflow-x-hidden">
                        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-col gap-5 mt-10 sm:pr-8 pr-2 overflow-y-auto category">
                            <BlogCard BlogImg={Img01}/>
                        </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

Favourite.displayName = "Favourite"

export default Favourite
