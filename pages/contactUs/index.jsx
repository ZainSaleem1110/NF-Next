import AuthNavbar from '../../Components/AuthNavbar'
import Sidebar from '../../Components/Sidebar'
import { useRouter } from 'next/router'

function ContactUs() {
    const router = useRouter()
    return (
        <div className="w-[100%] h-[100vh] overflow-hidden">
            <AuthNavbar />
            <div className="flex overflow-hidden h-[100vh]">
                <div className=" bg-[#F1F4FB] lg:flex hidden overflow-y-auto category w-[370px] 2xl:h-[85vh] h-[80vh]">
                    <Sidebar />
                </div>
                <div className='flex flex-col items-center my-10 w-full 2xl:h-[85vh] h-[75vh] overflow-y-auto pb-10 category'>
                <div className='sm:w-[410px] w-[70%] rounded-t-3xl h-[25px] bg-[#F1F4FB] opacity-50 md:hidden flex'></div>
                    <div className='md:w-[752px] sm:w-[600px] w-[100%] bg-[#F1F4FB] sm:rounded-2xl rounded-t-2xl flex flex-col items-center sm:py-10 pt-10 pb-20 sm:px-10 px-4'>
                        <div className='flex w-full items-center text-[26px] bord er-b-2 pb-7'>
                            <h1 className='text-center w-[100%] font-semibold'>Contact Us</h1>
                        </div>
                        <div className='text-[#7D8CAC] mt-5 w-full'>
                            <label htmlFor="emailAddress" className="font-semibold text-[#485470]">Your Name</label>
                            <input type="text" className='w-full h-[56px] bg-white text-[#7D8CAC] sm:rounded-xl rounded-lg border mt-2 flex items-center px-5 focus:outline-none' placeholder='Your Name' />
                        </div>
                        <div className='text-[#7D8CAC] mt-6 w-full'>
                            <label htmlFor="emailAddress" className="font-semibold text-[#485470]">Email Address</label>
                            <input type="email" className='w-full h-[56px] bg-white text-[#7D8CAC] sm:rounded-xl rounded-lg border mt-2 flex items-center px-5 focus:outline-none' placeholder='Your Email Address' />
                        </div>
                        <div className="mt-6 pb-8 w-full">
                        <div className="flex justify-between items-center">
                            <label htmlFor="text" className="font-semibold text-[#485470]">Event Description (Content)</label>
                            <p className="text-[12px] text-[#485470]">0/150 Words</p>
                        </div>
                        <textarea type="text" className='w-full min-h-[291px] pl-3 mt-1 rounded-xl border focus:outline-none'/>
                    </div>
                    <p className="text-center mt-5 text-[#7D8CAC] sm:w-[58%] w-[70%]">Our support team will try to reach you ine 24 hours{','} You will be notified via Email</p>
                    <button className="sm:w-[410px] w-[90%] h-[56px] bg-[#AD7EFF] text-white font- mt-5 rounded-xl" onClick={()=>{router.push("/successfullySubmit")}}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

ContactUs.displayName = "ContactUs"

export default ContactUs
