import Image from "next/image";
import React from "react";

const About = () => {

    return (
        <div className="flex flex-col items-center font-sans p-2 blury-corners pb-12">
            <div className="mt-8 ml-8 md:ml-0">
                <h3 className="text-[#9D68F5]">WHAT&apos;S GROWCHIEF</h3>
                <p className="text-4xl font-medium text-slate-300 w-4/5 md:w-[860px]">We specialize in human-centered design where technology serves humanity, not the other way around.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center jutify-center mt-4">
                <Image
                    src={'/blury-cube.png'}
                    height={251}
                    width={400}
                    alt="light cube"
                    className=""
                />
                <p className="w-4/5 md:w-[475px] text-white">
                    This not only elevates your brand but also solves real-world problems. We see ourselves as your long-term partner – working closely with you for true collaboration, from initial concept to final product. This way, we’re invested in your success.
                </p>
            </div>
        </div>
    )
}

export default About;