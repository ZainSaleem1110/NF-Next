import Navbar from '../../Components/Navbar'
import Image from 'next/image'
import { BiArrowBack } from 'react-icons/bi'
import MetaMask from '../../assets/metaMask.svg'
import { useRouter } from 'next/router'

function Checkout() {
    const router = useRouter()
    return (
        <div>
            <Navbar />
            <div className='flex flex-col items-center justify-center sm:mt-20 sm:mb-5 mt-8'>
                <div className='sm:w-[410px] w-[70%] rounded-t-3xl h-[25px] bg-[#F1F4FB] opacity-50'></div>
                <div className='sm:w-[490px] w-[100%] bg-[#F1F4FB] sm:rounded-2xl rounded-t-2xl flex flex-col items-center sm:py-10 pt-10 pb-20 sm:px-10 px-4'>
                    <div className='flex w-full items-center text-[26px]'>
                        <div className='w-[53px] h-[53px] cursor-pointer rounded-full bg-[#FBFCFD] sm:flex hidden justify-center items-center ' onClick={()=>{router.push("/createEvent")}}>
                            <BiArrowBack className='sm:text-[24px] text-[16px]' />
                        </div>
                        <h1 className='text-center w-[80%] font-semibold'>Checkout</h1>
                    </div>
                    <div className='sm:w-[410px] w-[100%] h-[56px] bg-white text-[16px] sm:rounded-xl rounded-lg border mt-10 flex items-center justify-between px-5'>
                        <p className="font-semibold">Listing Fees</p>
                        <p className="font-bold">2 ETH</p>
                    </div>
                    <button className='sm:w-[410px] w-[100%] h-[56px] bg-black text-[16px] sm:rounded-xl rounded-lg border mt-7 flex items-center justify-between px-5' onClick={() => { router.push("/successfullyListed") }}>
                        <Image src={MetaMask} alt="" />
                        <p className="w-[90%] text-center text-white font-bold">Connect with MetaMask</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

Checkout.displayName = 'Checkout';

export default Checkout
