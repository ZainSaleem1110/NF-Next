import AuthNavbar from '../../Components/AuthNavbar'
import Sidebar from '../../Components/Sidebar'
import Image from 'next/image';
import All from '../../assets/all.svg'
import Etherium from '../../assets/Etherium.svg'
import Polygon from '../../assets/Polygon.svg'
import Wax from '../../assets/Wax.svg'
import Solana from '../../assets/Solana.svg'
import Binance from '../../assets/Binance.svg'
import Tron from '../../assets/Tron.svg'
import Wave from '../../assets/Wave.svg'
import Avalanche from '../../assets/Avalanche.svg'
import Img01 from '../../assets/Img01.svg'
import Img02 from '../../assets/Img02.svg'
import Img03 from '../../assets/Img03.svg'
import Img04 from '../../assets/Img04.svg'
import Img05 from '../../assets/Img05.svg'
import Img06 from '../../assets/Img06.svg'
import BlogCard from '../../Components/BlogCard'
import Link from 'next/link'

const BlogImage = [
    Img01, Img02, Img03, Img04, Img05, Img06
]

function LandingPage() {
    return (
        <div className="w-[100%]">
            <AuthNavbar />
            <div className="flex">
                <div className="w-[290px] bg-[#F1F4FB] lg:flex h-full hidden">
                    <Sidebar />
                </div>
                <div className="w-full pt-8 sm:pl-8 pl-2 overflow-x-hidden">
                    <div className="overflow-x-auto category">
                        <div className="h-[44px] w-[1100px] flex justify-between">
                            <div className="flex px-4 rounded-lg bg-[#AD7EFF] items-center cursor-pointer">
                                <Image src={All} alt="" />
                                <span className="pl-3 text-white">All</span>
                            </div>
                            <div className="flex px-4 rounded-lg bg-white border items-center cursor-pointer">
                                <Image src={Etherium} alt="" />
                                <span className="pl-3">Etherium</span>
                            </div>
                            <div className="flex px-4 rounded-lg bg-white border items-center cursor-pointer">
                                <Image src={Polygon} alt="" />
                                <span className="pl-3">Polygon</span>
                            </div>
                            <div className="flex px-4 rounded-lg bg-white border items-center cursor-pointer">
                                <Image src={Wax} alt="" />
                                <span className="pl-3">Wax</span>
                            </div>
                            <div className="flex px-4 rounded-lg bg-white border items-center cursor-pointer">
                                <Image src={Solana} alt="" />
                                <span className="pl-3">Solana</span>
                            </div>
                            <div className="flex px-4 rounded-lg bg-white border items-center cursor-pointer">
                                <Image src={Binance} alt="" />
                                <span className="pl-3">Binance</span>
                            </div>
                            <div className="flex px-4 rounded-lg bg-white border items-center cursor-pointer">
                                <Image src={Tron} alt="" />
                                <span className="pl-3">Tron</span>
                            </div>
                            <div className="flex px-4 rounded-lg bg-white border items-center cursor-pointer">
                                <Image src={Wave} alt="" />
                                <span className="pl-3">Wave</span>
                            </div>
                            <div className="flex px-4 rounded-lg bg-white border items-center cursor-pointer">
                                <Image src={Avalanche} alt="" />
                                <span className="pl-3">Avalanche</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-col gap-5 mt-10 sm:pr-8 pr-2 h-[800px] overflow-y-auto category">
                        {BlogImage.map((Images, index) => {
                            return <Link href="/detailPage" passHref>
                                <a className="cursor-pointer">
                                    <BlogCard BlogImg={Images} key={index} />
                                </a>
                            </Link>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

LandingPage.displayName = 'LandingPage';

export default LandingPage