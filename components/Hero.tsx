import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
    return (
        <div className="w-full flex items-center justify-center flex-col md:flex-row font-sans">
            <div className="ml-8 mt-12 md:mt-2 md:ml-0 mr-2 md:mr-0">
                {/* no more wasted time */}
                <div className="flex items-center">
                    <div className="flex items-center justify-center rounded-full w-10 h-10 bg-[#FFFFFF0D] border-2 border-[#FFFFFF0D]">
                        <Image
                            src={'/watch vector.png'}
                            height={21}
                            width={15}
                            alt="watch vector icon"
                        />
                    </div>
                    <div className="flex items-center justify-center h-10 bg-[#FFFFFF0D] rounded-full pl-2 pr-2 border-2 border-[#FFFFFF0D]">
                        <h3 className="font-sans text-[#B28DFF] font-bold">NO MORE WASTED TIME</h3>
                    </div>
                </div>
                {/* title */}
                <h1 className="text-6xl font-bold md:font-extrabold text-[#ffffff]">Devtools<br /><span className="text-[#9D68F5]">Launch Weeks</span></h1>
                <p className="w:4/4 md:w-[460px] font-sans text-white font-light">We do a whole week of launch around your prouct, including an article, Reddit promotion, influencers posts, and so much more</p>
                {/* cta */}
                <div className="mt-6 flex items-center">
                    <Link href=''>
                        <div className="bg-gradient-to-b from-violet-400 via-violet-700 to-violet-700 flex items-center justify-center p-2 rounded-full">
                            <h3 className="text-xl font-light text-white ml-3 mr-3">Book a Call</h3>
                        </div>
                    </Link>
                    <Link href=''>
                        <div className="flex items-center justify-center border-2 p-2 border-white rounded-full m-3">
                            <h3 className="text-xl font-light text-white ml-3 mr-3">Gitroom Blog</h3>
                        </div>
                    </Link>
                </div>
            </div>

            <Image
                src={'/cube.png'}
                height={251}
                width={400}
                alt="light cube"
                className="light-cube"
            />

        </div>
    )
}

export default Hero