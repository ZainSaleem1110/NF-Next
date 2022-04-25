import MarketplacesCard from '../../Components/MarketplacesCard'
import AuthNavbar from '../../Components/AuthNavbar'
import Sidebar from '../../Components/Sidebar'
import Link from 'next/link'
import EventImg1 from '../../assets/marketplaces (1).png'
import EventImg2 from '../../assets/marketplaces (2).png'
import EventImg3 from '../../assets/marketplaces (3).png'
import EventImg4 from '../../assets/marketplaces (4).png'
import EventImg5 from '../../assets/marketplaces (5).png'
import EventImg6 from '../../assets/marketplaces (6).png'

const EventImage=[
    EventImg1,EventImg2,EventImg3,EventImg4,EventImg5,EventImg6
]

function Marketplaces() {
    return (
        <div className="w-[100%]">
            <AuthNavbar />
            <div className="flex">
                <div className="w-[290px] bg-[#F1F4FB] lg:flex h-full hidden">
                    <Sidebar />
                </div>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-col gap-5 mt-10 sm:pr-8 pr-2 h-[800px] md:pl-10 pl-5 overflow-y-auto category">
                        {EventImage.map((Images, index) => {
                            return <Link href="/marketplaceDetail" passHref key={index}>
                                <a className="cursor-pointer">
                                    <MarketplacesCard eventImg={Images} key={index} />
                                </a>
                            </Link>
                        })}
                    </div>
            </div>
        </div>
    )
}

Marketplaces.displayName = "Marketplaces"

export default Marketplaces
