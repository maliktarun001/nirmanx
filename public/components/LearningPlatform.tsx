import Image from 'next/image'
import React from 'react'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import Cta from './common/Cta'

const LearningPlatform = () => {
  return (
    <div className='relative'>
        <Image width={1920} height={600} src="/assets/images/webp/learning-bg-layer.webp" alt='learning-bg' className='absolute w-full h-full inset-0'/>
    <div className='py-12 sm:py-15 lg:py-25 px-5 max-w-325.75 mx-auto relative z-1'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-stretch lg:items-center'>
        <div className='flex items-center md:rounded-lg overflow-clip'>
<video loop muted autoPlay playsInline src="/assets/video/learningPlatform.mp4" className='w-full lg:h-116 object-cover'></video>
        </div>
        <div>
            <p className='text-black text-base lg:text-xl font-bold leading-120 flex items-center gap-2 mb-2.5'>
               <Image width={38} height={38} className='size-7 lg:size-9.5' src="/assets/images/svg/learningPlatform.svg" alt="learning-platform"/> Join No #1 Learning Plateform
            </p>
            <Heading className='text-black! mb-3'>Start building your first project today.</Heading>
            <Paragraph className='text-base lg:text-lg! text-gray! mb-5'>Join millions of students, educators, and creators making amazing things.</Paragraph>
            <Cta showArrow>Start Free</Cta>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LearningPlatform
