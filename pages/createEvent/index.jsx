import Navbar from '../../Components/Navbar'
import { BiArrowBack } from 'react-icons/bi'
import { useRouter } from 'next/router';

function CreateEvent() {
    const router=useRouter()
    return (
        <div>
            <Navbar/>
            <div className='flex flex-col items-center justify-center sm:my-20 mt-8'>
                <div className='md:w-[680px] w-[70%] rounded-t-3xl h-[25px] bg-[#F1F4FB] opacity-50'></div>
                <div className='md:w-[752px] w-[100%] bg-[#F1F4FB] sm:rounded-2xl rounded-t-2xl flex flex-col sm:py-10 pt-10 pb-20 sm:px-10 px-4'>
                    <div className='flex items-center text-[26px] border-b-2 pb-4'>
                        <div className='w-[53px] h-[53px] cursor-pointer rounded-full bg-[#FBFCFD] sm:flex hidden justify-center items-center'>
                            <BiArrowBack className='sm:text-[24px] text-[16px]'/>
                        </div>
                        <h1 className='text-center w-[80%] font-semibold text-[#485470]'>Create your Event</h1>
                    </div>
                    <div className="w-full mt-4">
                        <h1 className="font-semibold text-[21px] text-[#485470]">Event Details</h1>
                    </div>
                    <div className="w-full mt-10">
                        <label htmlFor="emailAddress" className="font-semibold text-[#485470]">Email Address</label>
                        <input type="email" className='w-full h-[60px] pl-3 mt-2 rounded-xl border focus:outline-none' placeholder='Your Email Address'/>
                    </div>
                    <div className="w-full mt-6">
                        <label htmlFor="ProjectName" className="font-semibold text-[#485470]">Your Project Name</label>
                        <input type="text" className='w-full h-[60px] pl-3 mt-2 rounded-xl border focus:outline-none' placeholder='Type Here'/>
                    </div>
                    <div className="font-semibold mt-6">
                        <h1 className="text-[#485470]">What is the status of your project?</h1>
                        <div className="rounded-xl px-4 py-5 bg-white text-[16px] font-medium mt-2">
                            <div>
                                <input type="radio" name="fav_language"/>
                                <label htmlFor="a" className="ml-3 text-[#485470]">All NFTs are minted and revealed and on OpenSea (or other marketplace)</label>
                            </div>
                            <div className="mt-4">
                                <input type="radio" name="fav_language"/>
                                <label htmlFor="b" className="ml-3 text-[#485470]">Sale is ongoing and/or not all items have been minted or revealed.</label>
                            </div>
                            <div className="mt-4">
                                <input type="radio" name="fav_language"/>
                                <label htmlFor="c" className="ml-3 text-[#485470]">Sale is upcoming, date is known.</label>
                            </div>
                            <div className="mt-4">
                                <input type="radio" name="fav_language"/>
                                <label htmlFor="d" className="ml-3 text-[#485470]">Sale is upcoming, date unknown</label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="text" className="font-semibold text-[#485470]">What is the maximum number of items in your collection?</label>
                        <p className="mt-1 text-[12px] text-[#485470]">Or at least the first batch that you would like to be listed.</p>
                        <input type="text" className='w-full h-[60px] pl-3 mt-4 rounded-xl border focus:outline-none' placeholder='Your Answer'/>
                    </div>
                    <div className="mt-6 sm:flex gap-5">
                        <div className="sm:w-[50%]">
                            <h1 className="text-[#485470] font-semibold">Select Blockchain</h1>
                            <select
                                name="categories"
                                className="w-[100%] py-2 rounded-lg px-3 focus:outline-none cursor-pointer h-[60px] mt-2"
                                style={{ display: 'block' }}>
                                <option
                                    label="Etherium"
                                    htmlFor="text"
                                    className=" border border-teal-700 text-[#485470]">
                                    Etherium
                                </option>
                                <option
                                    label="Polygon"
                                    htmlFor="text"
                                    className=" border border-teal-700 text-[#485470]">
                                    Polygon
                                </option>
                            </select>
                        </div>
                        <div className="sm:w-[50%] sm:mt-0 mt-6">
                            <h1 className="text-[#485470] font-semibold">NFT Marketplace</h1>
                            <select
                                name="categories"
                                className="w-[100%] py-2 rounded-lg px-3 focus:outline-none cursor-pointer h-[60px] mt-2"
                                style={{ display: 'block' }}>
                                <option
                                    label="Opensea"
                                    className=" border border-teal-700 text-[#485470]">
                                    Opensea
                                </option>
                                <option
                                    label="Polygon"
                                    className=" border border-teal-700 text-[#485470]">
                                    Polygon
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="text" className="font-semibold text-[#485470]">What is your collection{"'"}s contract address(es)? (If available)</label>
                        <input type="text" className='w-full h-[60px] pl-3 mt-2 rounded-xl border focus:outline-none' placeholder='Your Answer'/>
                    </div>
                    <div className="font-semibold mt-6">
                        <h1 className="text-[#485470]">What kind of token standard is your contract?</h1>
                        <div className="rounded-xl px-4 py-5 bg-white text-[16px] font-medium mt-2">
                            <div>
                                <input type="radio" name="token"/>
                                <label htmlFor="a" className="ml-3 text-[#485470]">ERC721</label>
                            </div>
                            <div className="mt-4">
                                <input type="radio" name="token"/>
                                <label htmlFor="b" className="ml-3 text-[#485470]">ERC1155</label>
                            </div>
                            <div className="mt-4">
                                <input type="radio" name="token"/>
                                <label htmlFor="c" className="ml-3 text-[#485470]">I don't know</label>
                            </div>
                            <div className="mt-4">
                                <input type="radio" name="token"/>
                                <label htmlFor="d" className="ml-3 text-[#485470]">Other</label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h1 className="font-semibold text-[#485470]">What kind of token standard is your contract?</h1>
                        <p className="text-[12px] mt-1 text-[#485470]">Specify future date if not launched yet{","} past date if sale already started. Can leave blank if not determined yet or so long ago it doesn{"'"}t matter.</p>
                        <div className="flex justify-between items-end w-full">
                            <div className="mt-4 flex flex-col w-[45%]">
                                <label htmlFor="text" className="font-semibold text-[#485470]">Date</label>
                                <input type="date" className='h-[60px]  px-3 mt-2 rounded-xl border focus:outline-none'/>
                            </div>
                            <div className="mt-4 flex flex-col w-[30%]">
                                <label htmlFor="text" className="font-semibold text-[#485470]">Time</label>
                                <input type="text" className='h-[60px] text-center px-3 mt-2 rounded-xl border focus:outline-none' placeholder="00:00"/>
                            </div>
                            <select
                                name="categories"
                                className="w-[20%] py-2 rounded-lg px-3 focus:outline-none cursor-pointer h-[60px] mt-2 text-[#485470]"
                                style={{ display: 'block' }}>
                                <option
                                    label="AM"
                                    className=" border border-teal-700 text-[#485470]">
                                    AM
                                </option>
                                <option
                                    label="PM"
                                    className=" border border-teal-700 text-[#485470]">
                                    PM
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h1 className="font-semibold text-[#485470]">Your Project{"'"}s Sale End Date (If available)</h1>
                        <p className="text-[12px] mt-1 text-[#485470]">Specify future date if not ended yet{","} past date if sale already ended. Can leave blank if not determined yet or so long ago it doesn{"'"}t matter.</p>
                        <div className="flex justify-between items-end w-full">
                            <div className="mt-4 flex flex-col w-[100%]">
                                <label htmlFor="text" className="font-semibold text-[#485470]">Date</label>
                                <input type="date" className='h-[60px]  px-3 mt-2 rounded-xl border focus:outline-none'/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h1 className="font-semibold text-[#485470]">Your Project{"'"}s Reveal Date (If available)</h1>
                        <p className="text-[12px] mt-1 text-[#485470]">Specify future date if not revealed yet{","} past date if already revealed. Can leave blank if not determined yet or so long ago it doesn{"'"}t matter.</p>
                        <div className="flex justify-between items-end w-full">
                            <div className="mt-2 flex flex-col w-[100%]">
                                <input type="text" className='h-[60px]  pl-3 rounded-xl border focus:outline-none' placeholder="Your Answer"/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="text" className="font-semibold text-[#485470]">If your project is upcoming{","} what is your Unit Price (ETH)</label>
                        <input type="text" className='w-full h-[60px] pl-3 mt-4 rounded-xl border focus:outline-none' placeholder='Your Answer'/>
                    </div>
                    <div className="mt-6 border-b-4 pb-8">
                        <div className="flex justify-between items-center">
                            <label htmlFor="text" className="font-semibold text-[#485470]">Event Description (Content)</label>
                            <p className="text-[12px] text-[#485470]">0/150 Words</p>
                        </div>
                        <textarea type="text" className='w-full min-h-[291px] pl-3 mt-1 rounded-xl border focus:outline-none'/>
                    </div>
                    <h1 className="font-semibold text-[21px] mt-10 text-[#485470]">Event Links</h1>
                    <div className="mt-6">
                        <label htmlFor="text" className="font-semibold ">OpenSea Link (Important)</label>
                        <input type="text" className='w-full h-[60px] pl-3 mt-4 rounded-xl border focus:outline-none' placeholder='https://opensea.io/collection/yournftproject'/>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="text" className="font-semibold text-[#485470]">Website URL</label>
                        <input type="text" className='w-full h-[60px] pl-3 mt-4 rounded-xl border focus:outline-none' placeholder='https//:yourwebsitelink.com'/>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="text" className="font-semibold text-[#485470]">Your Project{"'"}s Official Twitter *
                        </label>
                        <p className="text-[12px] text-[#485470]">if you don{"'"}t have an official twitter for the project provide your personal twitter
                        </p>
                        <input type="text" className='w-full h-[60px] pl-3 mt-4 rounded-xl border focus:outline-none' placeholder='https//:yourwebsitelink.com'/>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="text" className="font-semibold text-[#485470]">Official Discord Server</label>
                        <input type="text" className='w-full h-[60px] pl-3 mt-4 rounded-xl border focus:outline-none' placeholder='https://discord.gg/yournftserver'/>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="text" className="font-semibold text-[#485470]">If your project is upcoming{","} what is your Unit Price (ETH)</label>
                        <input type="text" className='w-full h-[60px] pl-3 mt-4 rounded-xl border focus:outline-none' placeholder='Your answer'/>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="text" className="font-semibold text-[#485470]">Do you agree to pay the 2 ETH listing fee?
                        </label>
                        <p className="text-[12px] text-[#485470]">This allows your project to be listed on rarity.tools forever (as long as the site exists)
                        </p>
                        <div className="flex items-center h-[60px] rounded-xl border mt-2 bg-white px-3">
                            <input type="radio" name="fee"/>
                            <label htmlFor="c" className="ml-3 text-[#485470]">Yes</label>
                        </div>
                    </div>
                    <p className="text-[13px] text-[#485470]">By clicking the {"'"}Submit{"'"} button, I agree to the Terms of Use, on behalf of myself and the entity that I am submitting this form on behalf of, and I acknowledge and represent that I have read and fully understand the Terms of Use (https://NFTTREE/terms/).</p>
                    <p className="text-[16px] text-center mt-10 font-bold text-[#485470]">A copy of your responses will be emailed to the address that you provided.</p>
                </div>
                <div className="flex justify-between items-center mt-4 md:w-[752px] w-[100%]">
                    <button className="w-[220px] h-[56px] bg-[#AD7EFF] rounded-xl text-white" onClick={()=>{router.push("/checkout")}}>Submit</button>
                    <button className="w-[220px] h-[56px] bg-white border rounded-xl text-[#7D8CAC]">Clear Form</button>
                </div>
            </div>
        </div>
    )
}

CreateEvent.displayName = 'CreateEvent';

export default CreateEvent
