'use client';
import CheckIcon from '@/assets/check.svg'
import { twMerge } from 'tailwind-merge'

import {motion} from 'framer-motion'
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className='section-heading'>
          <h2 className="section-title">Services</h2>
          <p className="section-body mt-5">
            We offer end-to-end solutions, from Smart site analysis, data-driven planning, and seamless project execution.
          </p>
        </div>
        <div className='flex flex-col gap-6 items-center mt-10 lg:flex-row lg:justify-center lg:items-end'>
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }, index) => (
              <div 
                key={title} // Using title as key since it should be unique
                className={twMerge('card', inverse === true && 'border border-black text-white bg-black')}
              >
                <div className='flex justify-between'>
                  <h3 className={twMerge('text-lg font-bold text-black/50', inverse === true && 'text-white/60')}>
                    {title}
                  </h3>
                  <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
                    {popular === true &&
                    <motion.span 
                      animate={{
                        backgroundPositionX: "-100%", 
                      }}
                      transition={{
                        duration : 2,
                        repeat : Infinity,
                        repeatType : 'loop',
                        ease :'linear',

                      }}
                      className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C1EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C1EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium'>
                        popular
                      </motion.span>
                    }
                  </div>
                </div>
                <div className='flex items-baseline gap-1 mt-[30px]'>
                  <span className='text-4xl font-bold tracking-tighter leading-none'>${monthlyPrice}</span>
                  <span className={twMerge('tracking-tighter font-bold text-black/50', inverse===true && 'text-white/60')}>
                    /month
                  </span>
                </div>
                <button className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && 'bg-white text-black')}>
                  {buttonText}
                </button>
                <ul className='flex flex-col gap-5 mt-8'>
                  {features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='flex items-center text-sm gap-4'>
                      <CheckIcon className="h-6 w-6" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}