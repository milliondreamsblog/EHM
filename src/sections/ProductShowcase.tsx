"use client"
import productImage from "@/assets/product-image.png"
import Image from "next/image";
import tubeImage from "@/assets/tube.png"
import pyramidImage from "@/assets/pyramid.png"
import { motion , useScroll , useTransform } from "framer-motion"
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset : ['start end' , 'end start']
  });
  const translateY =  useTransform(scrollYProgress , [0,1] ,[-150,150]);
  return <section ref ={sectionRef}className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container ">
      <div className="section-heading">
      <div className="flex justify-center">
        <div className="tag">
            Boost your productivity
        </div>
        </div>
        <h1 className="section-title mt-5">
            A more effective way to track progress
        </h1>
        <p className="section-body mt-5">
            Effortlessly turn your ideas into a fully functional , responsive , SaaS website in just minutes with this template.
        </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt ="Product Image" className="mt-10"  />
          <motion.img src={pyramidImage.src} alt ="pyramid Image" height={262} width={262} className="absolute hidden md:block md:absolute -right-36 -top-36" 
            style={{translateY}}
          />
          <motion.img src={tubeImage.src} alt ="tube Image" height={248} width= {248} className="absolute hidden md:block md:absolute bottom-24 -left-36"  
            style={{translateY}}
          />
        </div>
      
      
      
       
    </div>
  </section>
};
