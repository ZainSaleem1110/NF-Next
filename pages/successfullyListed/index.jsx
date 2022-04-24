import SuccessfulImg from '../../assets/successfulImg.svg'
import Navbar from '../../Components/Navbar'
import Image from 'next/image'
import { useRouter } from 'next/router'

function SuccessfullyListed() {
    const router = useRouter()
    return (
        <>
            <div className="sm:flex hidden">
                <Navbar />
            </div>
            <div className="flex flex-col items-center mt-10">
                <Image src={SuccessfulImg} alt="" />
                <p className="text-[20px] font-bold text-[#212121] mt-3">Congrats! Your NFT is successfully listed</p>
                <button className="w-[410px] h-[52px] rounded-xl border mt-7 text-[#AD7EFF] font-bold" onClick={() => { router.push("/landingPage") }}>Go back to home</button>
            </div>
        </>
    )
}

SuccessfullyListed.displayName = 'SuccessfullyListed';

export default SuccessfullyListed
