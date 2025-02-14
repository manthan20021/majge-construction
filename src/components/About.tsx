"use client"

import { SVGMaskEffectDemo } from "./SVGMaskEffectDemo";



export default function About() {

  

    return(
        <div className=" h-auto w-full flex bg-black flex-col items-center justify-center sm:pt-20 overflow-hidden">
       <h2 className="bg-clip-text text-gray-400 sm:text-transparent text-center
        sm:bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-8xl sm:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
       Welcome to
       <br />
        Majge Construction.
      </h2>      
      
      <SVGMaskEffectDemo/>

      
    </div>
    )
}