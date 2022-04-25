import Heart from '../assets/Heart-red.svg'
import Time from '../assets/time.svg'
import BoxIcon from '../assets/ethem-color.svg'
import UpComing from '../assets/speaker-color.svg'
import World from '../assets/world-color.svg'
import Image from 'next/image'

function FavouriteCard({ BlogImg }) {
    return (
        <div className=" max-w-[460px] rounded-xl border">
            <Image src={BlogImg} alt="" />
            <div className="px-4 py-2">
                <div className="flex justify-between">
                    <div className="h-[32px] bg-[#F1F4FB] rounded-2xl flex items-center px-3 py-1">
                        <Image src={Time} alt="" />
                        <span className="ml-2 text-[15px] text-[#485470]">Apr 16, 2022 – Apr 23, 2022</span>
                    </div>
                    <Image src={Heart} alt="" />
                </div>
                <h1 className="text-[24px] font-bold mt-3">Crypto Eagles Club</h1>
                <p className="mt-2 text-[15px] text-[#485470]">Crypto Eagles Club is a collection of 9999 criminal Eagles NFTs living in the Ethereum network...</p>
                <div className="flex justify-between mt-4">
                    <div className="flex gap-2 cursor-pointer">
                        <Image src={BoxIcon} alt="" />
                        <span className="text-[15px] text-[#485470]">Etherium</span>
                    </div>
                    <div className="flex gap-2 cursor-pointer">
                        <Image src={World} alt="" />
                        <span className="text-[15px] text-[#485470]">Opensea</span>
                    </div>
                    <div className="flex gap-2 cursor-pointer">
                        <Image src={UpComing} alt="" />
                        <span className="text-[15px] text-[#485470]">Promoted</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavouriteCard
