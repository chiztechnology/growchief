'use client'
import React from "react";
import Image from "next/image";
import { TrustedCompaniesLogo } from '@/constant'

const TrustedBy = () => {

    return (
        <div className="mb-8 flex flex-col items-center justify-center">
            <h3 className="font-sans text-white text-xl font-light mb-10">Trusted by</h3>
            <div className="flex scrollable-container">
                {TrustedCompaniesLogo.map((logo) => (
                    <Image
                        key={logo}
                        src={logo}
                        height={12}
                        width={100}
                        alt="company logo"
                        className="mr-8 ml-8 inline-block"
                    />
                ))}
            </div>
        </div>
    )
}

export default TrustedBy;