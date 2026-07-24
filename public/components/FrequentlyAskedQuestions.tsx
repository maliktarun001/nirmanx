'use client'
import React, { useState } from 'react'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import Image from 'next/image'
import { FAQ_DATA_LIST } from '@/utils/helper'

const FrequentlyAskedQuestions = () => {
    const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set([0]));

  const toggleAccordion = (index: number) => {
    const newOpen = new Set(openIndexes);
    newOpen.clear();
    if (!openIndexes.has(index)) newOpen.add(index);
    setOpenIndexes(newOpen);
  };
  return (
    <div className='py-12 sm:pt-15 md:pt-18.75 sm:pb-10 px-5 relative overflow-hidden'>
        <div className='size-99.25 rounded-full bg-dark-blue blur-[300px] absolute top-0 right-0 pointer-events-none'></div>
        <div className='size-99.25 rounded-full bg-yellow blur-[300px] absolute top-0 left-0 pointer-events-none'></div>
      <div className='max-w-285 mx-auto'>
        <div className='grid md:grid-cols-2 relative gap-5'>
            <div>
                <Heading className='text-black! max-md:text-center'>Frequently asked questions</Heading>
                <Paragraph className='text-black! mt-2.5! max-md:text-center'>Everything you need to know about Learn 3D.</Paragraph>
                <div className="mt-8 lg:mt-12">
          {FAQ_DATA_LIST.map((item, index) => {
            const isOpen = openIndexes.has(index);
            return (
              <div
                key={index}
                className={`rounded-xl px-4 sm:px-6 md:px-9 lg:px-8 transition-all duration-300 bg-white flex gap-3 md:gap-7.5 ${
                  isOpen
                    ? "bg-light-green border-light-black"
                    : "border-light-black/10"
                } ${index > 0 ? "mt-4" : ""}`}
              >
                <div className="flex flex-col items-center justify-center">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex gap-4 sm:gap-8 items-center w-full py-3 md:py-5 px-2 text-left cursor-pointer"
                  >
                        <span
                      className={`transform transition-all duration-300 ease-in-out text-3xl ${
                        isOpen ? "rotate-180 text-blue" : "text-black"
                      }`}
                    >  {isOpen ? "−" : "+"}</span>
                    <span
                      className="text-black font-medium leading-normal font-barlow text-base sm:text-lg"
                    >
                      {item.question}
                    </span>
                
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-2 pt-0 pb-5 text-black text-sm sm:text-base md:text-lg font-barlow font-normal">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
            </div>
            <div className='flex items-center justify-center'>
                <Image width={354} height={354} src="/assets/images/webp/faq-vector.webp" alt='vector-img' className='max-sm:max-w-50 max-lg:max-w-70'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FrequentlyAskedQuestions
