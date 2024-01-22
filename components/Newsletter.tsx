import Image from "next/image"

const Newsletter = () => {

    return (
        <div className="flex justify-between items-center p-4 flex-col md:flex-row m-12">
            <div>
                <Image
                    src={'/Logo growchief.png'}
                    width={290}
                    height={64}
                    alt="Growchief logo"
                />
                <p className="text-slate-400 font-sans text-light mt-6 w-[329px]">We do a whole week of launch around your prouct, including an article, Reddit promotion, influencers posts, and so much more</p>
            </div>

            <div className="mt-4 md:mt-0">
                <h2 className="text-2xl text-slate-200 font-sans font-bold">Subscribe to Our Newsletter</h2>
                <div className="flex flex-col md:flex-row mt-4">
                    <input type="email" className="w-[317px] rounded-full bg-[#181228] border-1 border text-slate-300 p-2" placeholder="example@email.com" />
                    <div className="customButton mt-2 md:mt-0 md:ml-4 bg-gradient-to-b from-violet-400 via-violet-700 to-violet-700 flex items-center justify-center p-2 rounded-full">
                        <h3 className="font-sans text-xl font-light text-white ml-3 mr-3">Subscribe</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter