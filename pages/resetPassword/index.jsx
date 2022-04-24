import Navbar from '../../Components/Navbar'
import { BiArrowBack } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'

function ResetPassword() {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col items-center justify-center sm:my-20 pt-10'>
                <div className='sm:w-[410px] w-[70%] rounded-t-3xl h-[25px] bg-[#F1F4FB] opacity-50'></div>
                <div className='sm:w-[490px] w-[100%] bg-[#F1F4FB] sm:rounded-2xl rounded-t-2xl flex flex-col items-center sm:py-10 pt-10 pb-20 sm:px-10 px-4'>
                    <div className='flex w-full items-center text-[26px]'>
                    <Link href="/login" passHref>
                            <a className='w-[53px] h-[53px] cursor-pointer rounded-full bg-[#FBFCFD] sm:flex hidden justify-center items-center '>
                                <BiArrowBack className='sm:text-[24px] text-[16px]' />
                            </a>
                        </Link>
                        <h1 className='text-center w-[80%] font-semibold'>Reset Password</h1>
                    </div>
                    <p className='pl-8 text-center text-[#444F68] text-[15px] leading-tight font-normal'>Please enter your email address to  <br /> request a password reset</p>
                    <div className='sm:w-[410px] w-[100%] sm:h-[56px] h-[40px] bg-white text-[#7D8CAC] sm:rounded-xl rounded-lg border mt-10 flex items-center px-5'>
                        <AiOutlineMail className='text-[20px]' />
                        <input type="email" className='sm:w-[410px] w-full pl-4 focus:outline-none' placeholder='abc@email.com' />
                    </div>
                    <Link href="/verification" passHref>
                    <a className='w-full sm:h-[56px] h-[40px] bg-[#AD7EFF] mt-20 sm:rounded-xl rounded-lg text-white text-[18px] font-bold flex justify-center items-center'>Send Code</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

ResetPassword.displayName = 'ResetPassword';

export default ResetPassword;