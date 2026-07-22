import Image from 'next/image'
import React from 'react'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import Cta from './common/Cta'

const ExploreTemplets = () => {
  return (
    <div className='bg-blue py-15 sm:py-25 xl:py-38.25 px-5 relative'>
          <Image width={1920} height={600} src="/assets/images/webp/learning-bg-layer.webp" alt='learning-bg' className='absolute w-full h-full inset-0 object-cover opacity-5 pointer-events-none'/>
      <Heading align='center'>Start building your first project today.
</Heading>
<Paragraph align='center' className='mt-2.5'>oin millions of students, educators, and creators making amazing things.</Paragraph>
<div className='mx-auto gap-4 flex justify-center mt-6 max-[425px]:flex-col items-center'>
   <Cta variant="yellow" showArrow>
  Start Free
</Cta>
<Cta variant="outline" showArrow>
  Explore Templates
</Cta>
</div>
    </div>
  )
}

export default ExploreTemplets
