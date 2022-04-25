import Image from 'next/image'
import { useRouter } from 'next/router'

function MarketplacesCard({eventImg}) {
    const router=useRouter()
    return (
        <div className=" max-w-[460px] rounded-xl border">
            <Image src={eventImg} alt="" />
            <div className="px-4 pb-2">
                <h1 className="text-[24px] font-bold mt-1">OpenSea <span className="mt-2 text-[15px] text-[#485470] font-normal">(16580)</span></h1>
                <p className="mt-2 text-[15px] text-[#485470]">Upcoming Events : 141</p>
                <button class="h-[50px] text-[#AD7EFF] border border-[#AD7EFF] w-full rounded-xl mt-5" onClick={()=>{router.push("/marketplaceDetail")}}>See Events</button>
            </div>
        </div>
    )
}

export default MarketplacesCard
