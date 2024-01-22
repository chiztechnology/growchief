'use client'
import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    return (
        <div className="flex flex-col footer-bg p-4 m-12">
            <hr className="separator" />
            <div className="flex justify-between flex-col md:flex-row mt-4">
                <div className="flex font-sans text-slate-300 mt-4">
                    <div>
                        <h3 className="text-xl font-bold">Page</h3>
                        {['Home', 'Pricing', 'Blog'].map((elt => (
                            <h4 className="mt-4">{elt}</h4>
                        )))}
                    </div>
                    <div className="ml-8">
                        <h3 className="text-xl font-bold">Resources</h3>
                        {['Book a Call', 'Term of Use', 'Privacy Policy'].map((elt => (
                            <h4 className="mt-4">{elt}</h4>
                        )))}
                    </div>
                </div>
                {/* right section */}
                <div className="flex mt-6 md:mt-0">

                    {['/Social icon.png', '/Social icon (1).png', '/Social icon (2).png'].map(elt => (
                        <Link href={'#'} className="m-2">
                            <Image
                                src={elt}
                                height={24}
                                width={24}
                                alt="social media icon"
                            />
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Footer;