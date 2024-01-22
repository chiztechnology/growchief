'use client'

import React from "react";
import Image from "next/image";

const Process = () => {

    return (
        <div className="process-container flex flex-col items-center justify-center flex-wrap">
            <div className="flex flex-col items-center">
                <h3 className="text-[#9D68F5]">OUR PROCESS</h3>
                <p className="text-3xl font-bold text-slate-300">How We Work</p>
            </div>
            <div className="flex flex-col items-center justify-center mb-12">
                {/* cards */}
                <div className="flex flex-col md:flex-row  justify center items-center p-4">
                    <div className="w-full md:w-[477px]">
                        <h3 className="text-2xl font-regular text-slate-400 mt-4">Topic Selection and Article Preparation</h3>
                        <p className="mt-4 mb-4 text-slate-200 font-sans font-light">The process begins with the provision of various topics from which you can choose. This selection phase typically takes 1-2 days. Once the topic is selected, the next step is to work on the article. This stage involves research, drafting, and finalizing the article, which usually takes about 7 days.</p>
                    </div>
                    <Image
                        src={'/Group 40214.png'}
                        width={601}
                        height={484}
                        alt="topic selection vector image"
                    />
                </div>

                {/* second card */}
                <div className="flex flex-col md:flex-row space-between justify center items-center p-1 md:p-2">
                    <div className="w-full md:w-[477px]">
                        <h3 className="text-2xl font-regular text-slate-400 mt-4">Topic Selection and Article Preparation</h3>
                        <p className="mt-4 mb-4 text-slate-200 font-sans font-light">The process begins with the provision of various topics from which you can choose. This selection phase typically takes 1-2 days. Once the topic is selected, the next step is to work on the article. This stage involves research, drafting, and finalizing the article, which usually takes about 7 days.</p>
                    </div>
                    <Image
                        src={'/Group 40213.png'}
                        width={601}
                        height={484}
                        alt="topic selection vector image"
                    />
                </div>
                {/* third card */}
                <div className="flex flex-col md:flex-row space-between justify center items-center p-1 md:p-2">
                    <div className="w-full md:w-[477px]">
                        <h3 className="text-2xl font-regular text-slate-400 mt-4">Topic Selection and Article Preparation</h3>
                        <p className="mt-4 mb-4 text-slate-200 font-sans font-light">The process begins with the provision of various topics from which you can choose. This selection phase typically takes 1-2 days. Once the topic is selected, the next step is to work on the article. This stage involves research, drafting, and finalizing the article, which usually takes about 7 days.</p>
                    </div>
                    <Image
                        src={'/Group 40212.png'}
                        width={601}
                        height={484}
                        alt="topic selection vector image"
                    />
                </div>

            </div>
        </div>
    )
}

export default Process