import React from "react";

const Cta = () => {

    return (
        <div className="cta-bg p-4 md:p-8 m-12 rounded-3xl h-[444px] flex items-center">
            <div className="">
                <h1 className="text-slate-300 text-3xl md:text-5xl font-bold font-sans">Ready to build<br />something?<br />Go with us!</h1>
                <p className="w-[90%] md:w-[515px] text-slate-400 mt-2">We merge tech with marketing. Helping you trend on different platforms. Gain genuine clients, effortlessly.</p>

                <div className="customButton mt-4 bg-gradient-to-b from-violet-400 via-violet-700 to-violet-700 flex items-center justify-center p-2 rounded-full w-[185px]">
                    <h3 className="font-sans text-xl font-light text-white ml-3 mr-3">Book a Call</h3>
                </div>
            </div>
        </div>
    )
}

export default Cta;