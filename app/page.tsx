import About from '@/components/About'
import Benefit from '@/components/Benefit'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Process from '@/components/Process'
import Testimonial from '@/components/Testimonial'
import TrustedBy from '@/components/TrustedBy'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col justify-center'>
      <Hero />
      <TrustedBy/>
      <About/>
      <Testimonial/>
      <Benefit/>
      <Process/>
      <Pricing />
    </div>
  )
}
