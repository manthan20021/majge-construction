import About from "@/components/About";
import Hero from "@/components/Hero";
import { ImagesSliderDemo } from "@/components/SlidingAnimetion";
import { HeroScrollDemo } from "@/components/ScrollEffect";
//import { ThreeDCardDemo } from "@/components/SrvisesCard";
import SrvisesCoponent from "@/components/ProjectCoponent";
import { AnimatedTestimonialsDemo } from "@/components/Testimonials";
import { TimelineDemo } from "@/components/Services";
//import Image from "next/image";

export default function Home() {
  return (
   <div className="bg-[#0A0A0A]">
    <Hero/>
    <About/>
    <HeroScrollDemo/>
    <ImagesSliderDemo/>
    <SrvisesCoponent/>
    <AnimatedTestimonialsDemo/>
    <TimelineDemo/>
    
   </div>
  );
}
