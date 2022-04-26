import AuthNavbar from '../../Components/AuthNavbar'
import Sidebar from '../../Components/Sidebar'
import Image from 'next/image'
import Link from 'next/link'
import Share from '../../assets/share.svg'

function BlogDetail() {
    return (
        <div className="w-[100%] h-[100vh] overflow-hidden">
            <AuthNavbar />
            <div className="flex overflow-hidden h-[100vh]">
                <div className=" bg-[#F1F4FB] lg:flex justify-center hidden overflow-y-auto category 2xl:h-[85vh] h-[80vh] w-[370px]">
                    <Sidebar />
                </div>
                <div className="2xl:h-[85vh] h-[80vh] overflow-y-auto category pb-10 w-full">
                    <div className="w-[100%] sm:pl-10 pl-5 lg:pr-0 sm:pr-10 pr-5 mt-5  text-[#212121]">
                        <Link href="/blogs" passHref>
                            <a className="text-[15px] text-[#FE7762] font-semibold cursor-pointer">Go Back</a>
                        </Link>
                        <div className="lg:flex hidden flex justify-between w-full pr-5">
                            <h1 className="lg:text-[28px] sm:text-[20px] text-[16px] font-bold mt-3 leading-tight lg:w-[70%]">Walmart Will Soon Use NFTs to Sell Products <span className="text-[17px] font-bold text-[#AD7EFF]"> (This is page is going to be same for both News and blog details)</span></h1>
                            <button className="w-[57px] h-[57px] rounded-full bg-[#F1F4FB] flex justify-center items-center">
                                <Image src={Share} alt="" />
                            </button>
                        </div>
                        <h1 className="lg:text-[28px] sm:text-[20px] text-[16px] font-bold mt-3 leading-tight lg:hidden flex">Walmart Will Soon Use NFTs to Sell Products</h1>
                        <div className="xl:w-[70%] lg:w-[80%] w-[100%]">
                            <p className="text-[15px] text-[#ADB9D2] mt-1">Feb 8, 2022 1:38 AM</p>
                            <p className="mt-3 text-[18px]">Walmart, one of the most valuable companies in the world, has started to consider NFTs. The retail giant is now going to use NFTs to sell their products. How? Well, they will offer their customers a virtual currency and lots o f other virtual goods. Sounds vague? Keep reading. </p>
                            <h1 className="lg:text-[28px] sm:text-[20px] text-[16px] font-bold mt-7 leading-tight lg:w-[70%]">Walmart NFTs are Around the Corner</h1>
                            <p className="mt-3 text-[18px]">Walmart filed 7 new trademarks at the US Patent Office on December 30, 2021. Among them were trademarks to offer their customers non-fungible tokens and a digital currency. </p>
                            <p className="mt-5 text-[18px]">Walmart intends to sell electronics, home decorations, toys, grooming products, etc. using NFTs. It’s all part of Walmart’s grand plan to enter the metaverse. That’s right, Facebook’s plan to create a virtual world has everyone, including Walmart in a frenzy.</p>
                            <p className="mt-5 text-[18px]">A Walmart spokesperson confirmed to Engadget that the filed trademarks were business as usual for the company. It was also confirmed that the company would be “continuously exploring” new technologies and their influence on shopping.</p>
                            <h1 className="lg:text-[28px] sm:text-[20px] text-[16px] font-bold mt-7 leading-tight lg:w-[70%]">Other Companies Pivoting to NFTs In Anticipation for the Metaverse</h1>
                            <p className="mt-5 text-[18px]">Walmart is not the only company delving into NFTs to sell their products. Adidas and NIKE have both entered the NFT space. NIKE bought RTFKT Studios which creates sneaker NFTs, and Adidas sold nearly 30,000 NFTs partnering with Bored Ape Yacht Club. </p>
                            <p className="mt-5 text-[18px]">Gucci is also selling NFTs in conjunction with Superplastic, a toy brand. Together, they’ve branded their collaboration SuperGucci. It’s a collection of 10 NFTs to start with. The entire project will consist of a 3-part series of “ultra-limited NFTs”. </p>
                            <p className="mt-5 text-[18px]">Projects like these will become the norm for big brands in the future. Walmart’s venture is no outlier. It’s just ahead of the curve. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

BlogDetail.displayName = "BlogDetail"

export default BlogDetail
