import About from '@/components/About'
import Hero from '@/components/Hero'
import TrustedBy from '@/components/TrustedBy'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col justify-center'>
      <Hero />
      <TrustedBy/>
      <About/>
    </div>
  )
}
