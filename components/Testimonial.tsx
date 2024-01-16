'use client'

import React from "react";
import { Clients } from "@/constant";
import Image from "next/image";
const Testimonial = () => {

    return (
        <div className="testimonial-container flex items-center justify-center flex-wrap">
            <div>
                <h3 className="text-[#9D68F5]">TESTIMONIALS</h3>
                <p className="text-3xl font-bold text-slate-300">What our<br />clients say</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center mt-12 mb-12">
                {/* cards */}
                {Clients.map((client) => (
                    <div key={client.id} className="rounded-xl mr-2 bg-gradient-to-r from-gray-700 via-violet-900 to-gray-700 p-0.5 m-2">
                        <div className="w-full flex flex-col  p-4 bg-[#13131a] rounded-xl mr-2">
                            {/* card header */}
                            <div className="flex">
                                <Image
                                    src={client.picture}
                                    height={50}
                                    width={50}
                                    alt="Thumbnail"
                                />
                                <div className="ml-2">
                                    <h3 className="font-sans font-regular text-l text-white">{client.name}</h3>
                                    <h4 className="font-sans font-light text-slate-400 ">{client.title}</h4>
                                </div>
                            </div>
                            {/* card content */}
                            <p className="mt-4 mb-4 text-slate-200 font-sans font-light">{client.message}</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial