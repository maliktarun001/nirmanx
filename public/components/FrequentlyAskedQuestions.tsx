import React from 'react'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import Image from 'next/image'

const FrequentlyAskedQuestions = () => {
  return (
    <div className='pt-18.75 pb-10 px-5 relative overflow-hidden'>
        <div className='size-99.25 rounded-full bg-dark-blue blur-[300px] absolute top-0 right-0 pointer-events-none'></div>
        <div className='size-99.25 rounded-full bg-yellow blur-[300px] absolute top-0 left-0 pointer-events-none'></div>
      <div className='max-w-285 mx-auto'>
        <div>
            <div>
                <Heading className='text-black!'>Frequently asked questions</Heading>
                <Paragraph className='text-black! mt-2.5!'>Everything you need to know about Learn 3D.</Paragraph>
            </div>
            <div>
                <Image width={354} height={354} src="/assets/images/webp/faq-vector.webp" alt='vector-img'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FrequentlyAskedQuestions
