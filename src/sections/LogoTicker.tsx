
"use client"
import acmelogo from '@/assets/logo-acme.png'
import celestialLogo from '@/assets/logo-celestial.png'
import pulseLogo from '@/assets/logo-pulse.png'
import apexLogo from '@/assets/logo-apex.png'
import Image from 'next/image';
import {motion} from 'framer-motion'

export const LogoTicker = () => {
  return <div className='py-8 md:py-12 bg-white' >
    <div className='container'>
        <div className=' flex  overflow-hidden  [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
            <motion.div className='flex gap-14 flex-none pr-14' 
            animate={{
              translateX:'-50%',
            }}
            transition={{
              duration:20,
              repeat: Infinity,
              ease:"linear",
              repeatType: "loop"
            }}
            >
              
              <Image src = {acmelogo} alt="acmelogo" className='logo-ticker-size' />
              <Image src = {celestialLogo} alt="celestialLogo" className='logo-ticker-size' />
              <Image src = {pulseLogo} alt="pulseLogo"  className='logo-ticker-size'/>
              <Image src = {apexLogo} alt="apexLogo" className='logo-ticker-size' />
              
              <Image src = {acmelogo} alt="acmelogo" className='logo-ticker-size' />
              <Image src = {celestialLogo} alt="celestialLogo" className='logo-ticker-size' />
              <Image src = {pulseLogo} alt="pulseLogo"  className='logo-ticker-size'/>
              <Image src = {apexLogo} alt="apexLogo" className='logo-ticker-size' />
            </motion.div> 
          </div>
        </div>

    </div>
  
};
