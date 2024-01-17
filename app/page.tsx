import About from '@/components/About'
import Benefit from '@/components/Benefit'
import Hero from '@/components/Hero'
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
    </div>
  )
}
