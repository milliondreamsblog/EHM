import ArrowIcon from '../assets/arrow-right.svg'
import Image from 'next/image';
import cogImage from '../assets/cog.png'
import cylinderImage from '@/assets/cylinder.png'

export const Hero = () => {
  return <section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] text-white overflow-clip'>
    <div className="container p-0 ">
      <div className='md:flex items-center'>
        <div className='md:w-[478px]'>
          <div className="tag">
            Version 2.0
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#0047ab]  text-transparent bg-clip-text mt-5" >
            Transforming ESG into Competitive Advantage
          </h1>
          <p className="text-xl tracking-tighter text-[#0047ab] mt-6">
            EHM delivers sustainability-focused solutions aligned with the UN SDGs, helping industries and governments strengthen ESG practices, comply with regulations, and enhance brand value.
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">
              Book call for free
            </button>
            <button className="btn btn-text">
              <span>Learn more</span>
              <ArrowIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
              <Image src={cogImage} alt='cogImage' className='absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0' />
              <Image src={cylinderImage} alt='cylinderImage' height={220} width={220} className='hidden md:absolute md:block -top-12 -left-32' />
          </div>
        </div>
      </div>
  </section>
};
