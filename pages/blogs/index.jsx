import AuthNavbar from '../../Components/AuthNavbar'
import Sidebar from '../../Components/Sidebar'
import Img01 from '../../assets/blogs1.svg'
import Img02 from '../../assets/blogs2.svg'
import Img03 from '../../assets/blogs3.svg'
import Img04 from '../../assets/blogs4.svg'
import Img05 from '../../assets/blogs5.svg'
import Img06 from '../../assets/blogs6.svg'
import NewsCard from '../../Components/NewsCard'
import Link from 'next/link'

const NewsImage = [
    { NewImg: Img01, title: "NFTs And The Creative Economy: What’s It All About?", detail: "Crypto Eagles Club is a collection of 9999 criminal Eagles NFTs living in the Ethereum network..." },
    { NewImg: Img02, title: "What are Bored Ape NFTs and Why are Celebrities Buying Them?", detail: "Crypto Eagles Club is a collection of 9999 criminal Eagles NFTs living in the Ethereum network..." },
    { NewImg: Img03, title: "YouTube is Working on NFTs", detail: "Crypto Eagles Club is a collection of 9999 criminal Eagles NFTs living in the Ethereum network..." },
    { NewImg: Img04, title: "How Fashion NFTs Can Improve Sustainability in the Industry", detail: "Crypto Eagles Club is a collection of 9999 criminal Eagles NFTs living in the Ethereum network..." },
    { NewImg: Img05, title: "Johnny Depp is Selling NFTs of His Own Paintings", detail: "Crypto Eagles Club is a collection of 9999 criminal Eagles NFTs living in the Ethereum network..." },
    { NewImg: Img06, title: "Coachella is Planning to Sell NFT- Based Lifetime Festival Passes", detail: "Crypto Eagles Club is a collection of 9999 criminal Eagles NFTs living in the Ethereum network..." },
]

function Blogs() {
    return (
        <div className="w-[100%] h-[100vh] overflow-hidden">
            <AuthNavbar />
            <div className="flex overflow-hidden h-[100vh]">
                <div className=" bg-[#F1F4FB] lg:flex hidden overflow-y-auto category w-[370px] h-[80vh]">
                    <Sidebar />
                </div>
                <div className="w-full pt-8 sm:pl-8 pl-2 overflow-y-auto h-[80vh] pb-10 category">
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-col gap-5 mt-10 sm:pr-8 pr-2">
                        {NewsImage.map((element, index) => {
                            return <Link href="/blogDetail" passHref key={index}>
                                <a className="cursor-pointer">
                                    <NewsCard props={element} />
                                </a>
                            </Link>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

Blogs.displayName = "Blogs"

export default Blogs
