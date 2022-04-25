import SuccessfulImg from '../../assets/successfulImg.svg'
import Navbar from '../../Components/Navbar'
import Image from 'next/image'
import { useRouter } from 'next/router'

function SuccessfullySubmit() {
    const router = useRouter()
    return (
        <>
            <div className="md:flex hidden">
                <Navbar />
            </div>
            <div className="flex flex-col items-center mt-10">
                <Image src={SuccessfulImg} alt="" />
                <p className="text-[20px] font-bold text-[#212121] mt-3">Your Request has been Submited!</p>
                <p className="mt-1 text-[#7D8CAC]">We will notify you with the mail</p>
                <button className="w-[410px] h-[52px] rounded-xl border mt-7 text-[#AD7EFF] font-bold" onClick={() => { router.push("/landingPage") }}>Go back to home</button>
            </div>
        </>
    )
}

SuccessfullySubmit.displayName = 'SuccessfullySubmit';

export default SuccessfullySubmit
