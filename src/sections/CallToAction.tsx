import ArrowRight from '@/assets/arrow-right.svg'
import starImage from '@/assets/star.png'
import springImage from '@/assets/spring.png'
import Image from 'next/image';
export const CallToAction = () => {
  return <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container">
      <div className="section-heading relative">
        <h2 className="section-title ">Get your free call today</h2>
        <p className="section-body mt-5"> Talk to our experts and discover how EHM can simplify your tech challenges with tailored, end-to-end solutions. No obligations—just value.</p>
        <div className="flex gap-2 mt-10 justify-center">
          <Image 
              src={starImage} 
              alt="star Image" 
              width={360} 
              className='absolute -left-[350px] -top-[137px]' 
            />
            <Image 
              src={springImage} 
              alt="Spring Image" 
              width={360} 
              className='absolute -right-[331px] -top-[19px]' 
            />
          <button className="btn btn-primary">Book a call now</button>
          <button className="btn btn-text">
            <span>Learn More</span>
            <ArrowRight className='h-5 w-5 gap-1' />
          </button>
        </div>
      </div>
    </div>
  </section>
};
