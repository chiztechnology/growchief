import React from 'react'

const Benefit = () => {

    return (
        <div className='process-container p-8 pb-[60px] flex flex-col items-center'>
            <div className='m-2 md:m-6'>
                <h3 className="text-[#9D68F5]">THE BENEFIT</h3>
                <p className="text-3xl font-bold text-slate-300">Crafting quality<br />you&apos;ll remember</p>
            </div>
            <div className='flex flex-col w-full items-center'>
                {/* benefits cards */}
                <div className='flex flex-wrap p-4 mt-12'>

                    <div className='w-4/4 md:w-[629px] rounded-xl  bg-gradient-to-r from-gray-700 via-violet-900 to-gray-700 p-0.5 md:m-4 mt-2'>
                        <article className='p-4 h-[422px] w-full rounded-xl benefit-one bg-[#000000]'>
                            <h3 className="text-2xl font-regular text-slate-400 mt-4">Instant Impact</h3>
                            <p className="mt-4 mb-4 text-slate-200 font-sans font-light">From strategizing your optimal UX, to building a flexible back-end that syncs with your internal ops, our goal is beautifully fluid and flawlessly functional websites that solve the right problems—and look really good while they do it.</p>
                        </article>
                    </div>

                    <div className='w-4/4 md:w-[453px] rounded-xl  bg-gradient-to-r from-gray-700 via-violet-900 to-gray-700 p-0.5 md:m-4 mt-2'>
                        <article className='p-4 h-[422px] w-full rounded-xl benefit-branding bg-[#000000]'>
                            <h3 className="text-2xl font-regular text-slate-400 mt-4">Branding</h3>
                            <p className="mt-4 mb-4 text-slate-200 font-sans font-light">From strategizing your optimal UX, to building a flexible back-end that syncs with your internal ops, our goal is beautifully fluid</p>
                        </article>
                    </div>
                </div>
                <div className='flex flex-wrap p-4'>
                    <div className='w-4/4 md:w-[453px] rounded-xl  bg-gradient-to-r from-gray-700 via-violet-900 to-gray-700 p-0.5 md:m-4 mt-2'>
                        <article className='p-4 h-[422px] w-full rounded-xl benefit-three bg-[#000000]'>
                            <h3 className="text-2xl font-regular text-slate-400 mt-4">Get from 0 to 1</h3>
                            <p className="mt-4 mb-4 text-slate-200 font-sans font-light">From strategizing your optimal UX, to building a flexible back-end that syncs with your internal ops, our goal is beautifully fluid</p>
                        </article>
                    </div>

                    <div className='w-4/4 md:w-[629px] rounded-xl  bg-gradient-to-r from-gray-700 via-violet-900 to-gray-700 p-0.5 md:m-4 mt-2'>
                        <article className='p-4 h-[422px] w-full rounded-xl benefit-four bg-[#000000]'>
                            <h3 className="text-2xl font-regular text-slate-400 mt-4">Stay on Developers Mind</h3>
                            <p className="mt-4 mb-4 text-slate-200 font-sans font-light">From strategizing your optimal UX, to building a flexible back-end that syncs with your internal ops, our goal is beautifully fluid and flawlessly functional websites that solve the right problems—and look really good while they do it.</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefit;