"use client";
import React from 'react'
import { ThreeDCardDemo } from './ProjectCard'

export default function SrvisesCoponent() {

  interface Service {
    id: number;
    title: string;
    description: string;
    cevelEngineer: string;
    img: string;
  }

  interface ServicesData {
    services: Service[];
  }

  const servicesData: ServicesData = {
    services: [
      {
        id: 1,
        title: "Web Development",
        description:
          "Offering full-stack web development solutions using modern frameworks and best practices.",
        cevelEngineer: "John Doe",
        img: "https://tse1.mm.bing.net/th?id=OIP.V6zxrHB1kAgW4rYZZGnRugHaFD&pid=Api&P=0&h=180",
      },
      {
        id: 2,
        title: "Mobile App Development",
        description:
          "Developing cross-platform mobile applications for iOS and Android.",
        cevelEngineer: "Alex Johnson",
        img: "https://images.homify.com/v1520224068/p/photo/image/2462141/DSC00003.jpg",
      },
      {
        id: 3,
        title: "UI/UX Design",
        description:
          "Creating user-friendly and visually appealing interfaces for web and mobile apps.",
        cevelEngineer: "Emily Davis",
        img: "https://i.ytimg.com/vi/i5xikfQWbwo/maxresdefault.jpg",
      },
      {
        id: 4,
        title: "DevOps & Cloud Services",
        description:
          "Implementing continuous integration pipelines and managing cloud infrastructure.",
        cevelEngineer: "Chris Martin",
        img: "https://tse3.mm.bing.net/th?id=OIP.HPLBU0FqrI760osjDsb1FQHaGO&pid=Api&P=0&h=180",
      },
    ],
  };

  

  return (
    <div className='h-auto sm:px-20 w-full grid grid-flow-row sm:grid-cols-2 grid-cols-1'>
      {
        servicesData.services.map((service: Service)=>{
        return  <ThreeDCardDemo key={service.id} data={service}/>
        })
      }
      

    </div>
  )
}


