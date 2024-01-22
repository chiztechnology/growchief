import Image from "next/image";
import React from "react";

const Pricing = () => {

    return (
        <div className="pt-12 pb-12 flex flex-col justify-center items-center pricing-bg">
            <div className="flex flex-col items-center">
                <h3 className="text-[#9D68F5]">PRICING</h3>
                <p className="text-3xl font-bold text-slate-300">The Startup Package</p>
                <p className="mt-2 text-slate-300 font-sans font-light w-[320px] text-center">Should you be unsatisfied with the initial article, we are committed to offering a full refund.</p>
            </div>
            {/* card */}
            <div className="mt-4 rounded-2xl mr-2 bg-gradient-to-r from-gray-700 via-violet-900 to-gray-700 p-0.5 w-[80%] md:w-[493px] h-[488px]">
                <div className="pricing-table p-6 w-full h-full rounded-2xl">
                    <h2 className="mt-4 font-bold text-3xl font-sans text-slate-300">Explosive Growth</h2>
                    <p className="font-sans font-thin w-[320px] text-slate-300 mt-2">Perfect for your next content, leave to us and enjoy the result!</p>
                    <hr className="mt-8 separator"/>

                    <div className="flex items-center mt-8">
                        <Image
                            src={'/check-vector.png'}
                            width={26}
                            height={26}
                            alt="check vector icon"
                        />
                        <h3 className="ml-2 text-slate-300">10 Launch Weeks</h3>
                    </div>
                    <div className="flex items-center mt-3">
                        <Image
                            src={'/check-vector.png'}
                            width={26}
                            height={26}
                            alt="check vector icon"
                        />
                        <h3 className="ml-2 text-slate-300">10 Influencers Posts</h3>
                    </div>
                    <div className="flex items-center mt-3">
                        <Image
                            src={'/check-vector.png'}
                            width={26}
                            height={26}
                            alt="check vector icon"
                        />
                        <h3 className="ml-2 text-slate-300">100,000 views</h3>
                    </div>
                    <div className="flex items-center mt-3">
                        <Image
                            src={'/check-vector.png'}
                            width={26}
                            height={26}
                            alt="check vector icon"
                        />
                        <h3 className="ml-2 text-slate-300">10 Reddit Posts</h3>
                    </div>
                    <div className="flex items-center mt-3">
                        <Image
                            src={'/check-vector.png'}
                            width={26}
                            height={26}
                            alt="check vector icon"
                        />
                        <h3 className="ml-2 text-slate-300">2 Hours Marketing Consultation</h3>
                    </div>

                    <div className="customButton mt-4 bg-gradient-to-b from-violet-400 via-violet-700 to-violet-700 flex items-center justify-center p-2 rounded-full">
                        <h3 className="font-sans text-xl font-light text-white ml-3 mr-3">Book a Call</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Pricing;