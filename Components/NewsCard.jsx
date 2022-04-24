import Image from 'next/image'

function NewsCard({ props }) {
    return (
        <div className=" max-w-[460px] h-[470px] rounded-xl border">
            <Image src={props.NewImg} alt="" />
            <div className="px-2 py-2 ">
                <div>
                <h1 className="text-[24px] font-bold mt-2">{props.title}</h1>
                <p className="mt-2 text-[15px] text-[#485470]">{props.detail}</p>
                </div>
                <p className="mt-2 text-[15px] text-[#ADB9D2]">Feb 8, 2022 1:38 AM</p>
            </div>
        </div>
    )
}

export default NewsCard
