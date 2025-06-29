import ArrowRight from '@/assets/arrow-right.svg'
import Ehmlogo  from '@/assets/Ehmlogo.png'
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg'
export const Navbar = () => {
  return <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className=" flex justify-center items-center p-3 bg-black text-white gap-3 padding-inline-start:0] [margin-inline-start:0]"> 
        <p className='text-white/60 hidden md:block'> Streamline your workflow and boost your productivity </p>
        <div className='inline-flex gap-1 items-center'>
          <p>Book a call for free</p>
          <ArrowRight  className = "h-4 w-4 inline-flex justify-center items-center"/>
        </div>
      </div>
      <div className='py-3'>
        <div className='container '>
          <div className='flex items-center justify-between ' >
            <Image src= {Ehmlogo} alt="EHM logo" height={120} width={120} />
            <MenuIcon className = "h-7 w-7 md:hidden"/>
            <nav className='hidden  md:flex gap-6 text-black/60  items-center justify-between '>
              <a href="#" > About </a>
              <a href="#" > Features </a>
              <a href="#" > Customers </a>
              <a href="#" > Updates </a>
              <a href="#" > Help </a>
              <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight'> Get for free </button>
            </nav>
          </div>
        </div>
      </div>
      
  </header>
};
