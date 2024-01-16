import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {

    return (
        <div className="bg-gradient-to-r from-gray-300 via-violet-500 to-gray-500 w-4/4 m-8 rounded-2xl p-0.5">
            <div className="w-full h-full p-2 rounded-2xl flex justify-between items-center bg-[#0d0d12] ">
                <Link href={"#"}>
                    <Image
                        className="ml-2"
                        src={'/Logo growchief.png'}
                        height={30}
                        width={220}
                        alt="Growchief logo"
                    />
                </Link>
                <ul className="font-sans text-white font-light w-1/4 flex justify-around">
                    <li className="inline "><Link href={""}>Home</Link></li>
                    <li className="inline "><Link href={""}>Product</Link></li>
                    <li className="inline "><Link href={""}>Pricing</Link></li>
                    <li className="inline "><Link href={""}>Blog</Link></li>
                </ul>
                <Link href={"https://github.com/chiztechnology/growchief"}>
                    <div className="rounded-xl mr-2 bg-gradient-to-r from-gray-700 via-violet-900 to-gray-700 p-0.5">
                        <div className=" p-1 rounded-xl flex items-center justify-center  bg-gradient-to-r from-gray-900">
                            <Image
                                className=" ml-2"
                                src={'/github Icon.png'}
                                height={24}
                                width={24}
                                alt="Github vector icon"
                            />
                            <h3 className="text-xl font-light ml-3 text-white mr-2">Star Us | 2.9k</h3>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar