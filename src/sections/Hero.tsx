"use client";
import ArrowIcon from '../assets/arrow-right.svg'
import Image from 'next/image';
import cogImage from '../assets/cog.png'
import cylinderImage from '@/assets/cylinder.png'
import noodleImage  from '@/assets/noodle.png'
import { motion , useScroll ,useTransform ,useMotionValueEvent} from 'framer-motion'
import {useRef} from "react";
export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset : ["start end" , "end start"]
  });

  const translateY = useTransform(scrollYProgress , [0,1] , [150,-150]);
  //useMotionValueEvent(translateY , 'change' , (latestValue) => console.log(latestValue) )
  return <section
         ref={heroRef}
         className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] text-white overflow-clip'>
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
              <motion.img src={cogImage.src} alt='cogImage' className='absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 '
              animate={{
                translateY :[-30,30]
              }}
              transition={{
                repeat:Infinity,
                repeatType : "mirror",
                duration : 2,
                ease:'easeInOut'
              }}
              />
              <motion.img src={cylinderImage.src} alt='cylinderImage' height={180} width={180} className='hidden md:absolute md:block -top-12 -left-32'
              style={{
                translateY : translateY,

              }}/>
              <motion.img 
                src={noodleImage.src}
                alt="noodle img"
                width = {220}
                className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]'
                style={{
                  rotate : 30,
                  translateY : translateY
                }}
              />
          </div>
        </div>
      </div>
  </section>
};
