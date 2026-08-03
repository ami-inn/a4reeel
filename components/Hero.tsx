import React from 'react'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'

const Hero = () => {
  return (
     <BackgroundGradientAnimation>
      <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 text-center">
        <div className="max-w-3xl">
          <h1 className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-3xl font-extrabold text-transparent drop-shadow-2xl md:text-4xl lg:text-7xl">
            A4REEEL
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-white/75 md:text-base lg:text-lg">
            Discover AI Prompts and Edits
          </p>
        </div>
      </div>
    </BackgroundGradientAnimation>
  )
}

export default Hero