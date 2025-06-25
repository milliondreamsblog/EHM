import Image from "next/image";
import Ehmlogo from "@/assets/Ehmlogo.png"

import SocialX from'@/assets/social-x.svg'
import SocialInsta from'@/assets/social-insta.svg'
import SocialLinkedIn from'@/assets/social-linkedin.svg'
import SocialYoutube from'@/assets/social-youtube.svg'
export const Footer = () => {
  return <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2  before:bottom-0  before:w-full before:h-full before:blur before:bg-[linear-gradient(to_right,_#F87BFF,_#FB92CF,_#FFDD9B,_#C2F0B1,_#2FD8FE)] before:content-[''] before:z-[-1]">
          <Image src={Ehmlogo} height={40} alt="Logo_img"  className="relative"/>
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex md:flex-row md:justify-center">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Contact</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6"> 
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialYoutube />
        </div>

        <p className="mt-6">2025 ClimAgro Analytics , Inc. All rights reserved.  </p>
      </div>
    
  </footer>
};
