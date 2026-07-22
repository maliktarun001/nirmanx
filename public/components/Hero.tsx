import React from 'react'
import Header from './common/Header'
import Paragraph from './common/Paragraph'
import Cta from './common/Cta'
import Icons from './common/Icons'

const Hero = () => {
  return (
    <div className="bg-secondary-blue pt-5 md:pt-10 px-5 flex flex-col overflow-hidden">
        <Header/>
      <div className="max-w-325.75 w-full mx-auto relative flex items-center justify-between py-12 sm:py-15 md:py-20">
        <div className="w-full max-w-180 space-y-6 z-10">
          <h1 className="text-3xl md:text-4xl xl:text-custom-xl text-white font-bold leading-tight max-sm:text-center">Create, Learn, and <span className="text-yellow">Share</span> <span className="text-yellow">in Minutes.</span></h1>
          <Paragraph className="text-lg lg:text-xl text-white/90 max-sm:text-center!">The beginner-friendly browser tool for building projects, circuits, and 3D models. Perfect for students, educators, and curious creators.</Paragraph>
          <div className="flex gap-6 items-center max-sm:flex-col">
            <Cta variant="secondary" showArrow>Start Learning Free</Cta>
            <button className="text-white font-bold text-base md:text-lg leading-normal cursor-pointer flex items-center gap-2 hover:text-yellow transition-all duration-300">
              Watch 60s Demo <Icons icon="playVideoIcon"/>
            </button>
          </div>
        </div>
       {/* <div className="w-full max-w-[700px] flex justify-center">
<div className="relative w-full max-w-[700px] h-[500px]">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="
      absolute
      bottom-0
      right-0
      w-[650px]
      xl:w-[800px]
      object-contain
    "
  >
    <source src="/assets/video/hero-video.mp4" type="video/mp4" />
  </video>
</div>
</div> */}
      </div>
    </div>
  )
}

export default Hero
