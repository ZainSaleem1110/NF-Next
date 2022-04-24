import Navbar from '../../Components/Navbar'
import { BiArrowBack } from 'react-icons/bi'
import Link from 'next/link'

function Verification() {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col items-center justify-center sm:my-20 mt-10'>
                <div className='sm:w-[410px] w-[70%] rounded-t-3xl h-[25px] bg-[#F1F4FB] opacity-50'></div>
                <div className='sm:w-[490px] w-[100%] bg-[#F1F4FB] sm:rounded-2xl rounded-t-2xl flex flex-col items-center sm:py-10 pt-10 pb-20 sm:px-10 px-4'>
                    <div className='flex w-full items-center text-[26px]'>
                    <Link href="/resetPassword" passHref>
                            <a className='w-[53px] h-[53px] cursor-pointer rounded-full bg-[#FBFCFD] sm:flex hidden justify-center items-center '>
                                <BiArrowBack className='sm:text-[24px] text-[16px]' />
                            </a>
                        </Link>
                        <h1 className='text-center w-[80%] font-semibold'>Verification</h1>
                    </div>
                    <p className='pl-8 text-center text-[#444F68] text-[15px] leading-tight font-normal'>We’ve send you the verification code <br /> on abc@gmail.com</p>
                    <div className=' mt-10 w-full flex items-center justify-center sm:gap-x-5 gap-x-1'>
                        <input type="text" className='sm:w-[65px] w-[50px] sm:h-[63px] h-[48px] border bg-white focus:outline-none text-center rounded-lg text-[26px] font-semibold focus:outline-[#AD7EFF]' />
                        <input type="text" className='sm:w-[65px] w-[50px] sm:h-[63px] h-[48px] border bg-white focus:outline-none text-center rounded-lg text-[26px] font-semibold focus:outline-[#AD7EFF]' />
                        <input type="text" className='sm:w-[65px] w-[50px] sm:h-[63px] h-[48px] border bg-white focus:outline-none text-center rounded-lg text-[26px] font-semibold focus:outline-[#AD7EFF]' />
                        <input type="text" className='sm:w-[65px] w-[50px] sm:h-[63px] h-[48px] border bg-white focus:outline-none text-center rounded-lg text-[26px] font-semibold focus:outline-[#AD7EFF]' />
                        <input type="text" className='sm:w-[65px] w-[50px] sm:h-[63px] h-[48px] border bg-white focus:outline-none text-center rounded-lg text-[26px] font-semibold focus:outline-[#AD7EFF]' />
                    </div>
                    <button className='w-full sm:h-[56px] h-[40px] bg-[#AD7EFF] mt-20 sm:rounded-xl rounded-lg text-white text-[18px] font-bold'>Submit Code</button>
                </div>
            </div>
        </div>
    );
}

Verification.displayName = 'Verification';

export default Verification;