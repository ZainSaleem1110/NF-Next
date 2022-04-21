import Navbar from '../../Components/Navbar'
import Image from 'next/image'
import { BiArrowBack } from 'react-icons/bi'
import { AiOutlineMail, AiFillLock } from 'react-icons/ai'
import { BsEyeSlashFill } from 'react-icons/bs'
import GoogleLogo from '../../assets/google.svg'
import FacebookLogo from '../../assets/facebook.svg'
import Link from 'next/link'

function Login () {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col items-center justify-center sm:my-20 mt-8'>
                <div className='sm:w-[410px] w-[70%] rounded-t-3xl h-[25px] bg-[#F1F4FB] opacity-50'></div>
                <div className='sm:w-[490px] w-[100%] bg-[#F1F4FB] sm:rounded-2xl rounded-t-2xl flex flex-col items-center sm:py-10 pt-10 pb-20 sm:px-10 px-2'>
                    <div className='flex w-full items-center text-[26px]'>
                        <div className='sm:w-[53px] sm:h-[53px] w-[35px] h-[35px] cursor-pointer rounded-full bg-[#FBFCFD] flex justify-center items-center '>
                            <BiArrowBack className='sm:text-[24px] text-[16px]'/>
                        </div>
                        <h1 className='text-center w-full font-semibold'>Glad to <br /> meet you again!</h1>
                    </div>
                    <div className='sm:w-[410px] w-[100%] h-[56px] bg-white text-[#7D8CAC] sm:rounded-xl rounded-lg border mt-10 flex items-center px-5'>
                        <AiOutlineMail className='text-[20px]' />
                        <input type="email" className='sm:w-[410px] w-full pl-4 focus:outline-none' placeholder='abc@email.com' />
                    </div>
                    <div className='sm:w-[410px] w-[100%] h-[56px] bg-white text-[#7D8CAC] sm:rounded-xl rounded-lg border mt-3 flex items-center px-5'>
                        <AiFillLock className='text-[20px]' />
                        <input type="password" className='sm:w-[410px] w-full pl-4 focus:outline-none' placeholder='Password' />
                        <BsEyeSlashFill className='text-[20px]' />
                    </div>
                    <div className='mt-3 flex flex-wrap justify-between gap-3 text-[14px] w-full'>
                        <div className='flex items-center'>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                            <h4 className='ml-3'>Remember Me</h4>
                        </div>
                        <Link href="/resetPassword" passHref>
                        <a>Forgot Password?</a>
                        </Link>
                    </div>
                    <button className='w-full h-[56px] bg-[#AD7EFF] mt-20 sm:rounded-xl rounded-lg text-white text-[18px] font-bold'>Login</button>
                    <p className='text-center text-[14px] font-semibold text-[#7D8CAC] mt-1'>or continue with</p>
                    <div className='flex flex-wrap justify-center items-center mt-5 gap-4'>
                        <div className='w-[157px] h-[56px] bg-white rounded-xl flex items-center justify-center'>
                            <Image src={GoogleLogo} alt="Navbar Logo" />
                            <h4 className='text-[16px] font-semibold ml-3'>Google</h4>
                        </div>
                        <div className='w-[157px] h-[56px] bg-white rounded-xl flex items-center justify-center'>
                            <Image src={FacebookLogo} alt="Navbar Logo" />
                            <h4 className='text-[16px] font-semibold ml-3'>Facebook</h4>
                        </div>
                    </div>
                    <Link href="/signUp" passHref>
                    <p className='text-[14px] mt-3 cursor-pointer'>Don’t have an account? <span className='text-[#AD7EFF]'> Sign up</span></p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

Login.displayName = 'Login';

export default Login;
