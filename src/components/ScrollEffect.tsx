"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
//import Image from "next/image";


export function HeroScrollDemo() {
 //const imageLink = 'https://i.pinimg.com/originals/45/fd/8b/45fd8beb0901720dc26ef9e558770c37.png'
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-gray-300">
              Unleash the power of<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        {/* <Image
          src={`https://i.pinimg.com/originals/45/fd/8b/45fd8beb0901720dc26ef9e558770c37.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        /> */}

        <img 
        src="https://i.pinimg.com/originals/45/fd/8b/45fd8beb0901720dc26ef9e558770c37.png" 
        alt="elevetionImg"
        height={720}
        width={1400}
        className="mx-auto rounded-2xl object-cover h-full object-left-top"
        draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
