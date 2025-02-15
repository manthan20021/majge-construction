"use client";
import React from "react";  
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { SparklesCore } from "./ui/sparkles";

export default function Hero(){

    return(
        <div className="h-auto
         bg-black w-full flex flex-col items-center justify-center relative overflow-hidden
        mx-auto py-10 ma:py-0"
        >
             <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

<img className="sm:w-40 sm:h-40 w-28 h-28 mt-24 sm:mt-28 rounded-full border-2 border-blue-200 bg-blue-300" src="https://thumbs.dreamstime.com/z/asian-indian-engineer-portrait-looking-away-standing-front-construction-crane-inspecting-progress-project-40876891.jpg"/>

            <div className="sm:p-4 relative z-10 w-full text-center flex flex-col items-center justify-center">
                <h1 
                className="md:text-7xl text-3xl lg:text-8xl font-bold text-center text-white
                 mb-2
                "
                >
                    Majge Construction
                    </h1>
    <div className="w-[40rem] sm:h-40 h-16 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
                <p 
                className="font-normal absolute top-30 text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
                >Lorem ipsum dolor Quia vitae e quo enim voluptas adipisci vero quod quisquam, perspiciatis tempore incidunt, aut necessitatibus, assumenda est?
                </p>
                <div className="mt-9 sm:mt-0" >
                    <Link href={"/About"}>
                    <Button
        borderRadius="1.75rem"
        className=" bg-slate-900  text-white border-slate-800"
      >
         Explore Srvises   
      </Button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

