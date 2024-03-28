'use client'

import { CarouselCompt } from "@/components/Carousel/carousel";
import CompareImg from "@/components/CompareImage/compareimage";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>

      <div className="h-screen bg-green-700">
        <Image src={'/images/pictures/fondo.jpg'} className="" alt="fondoprincipal" width={2500} height={1667} />
      </div>

      <div className="h-screen bg-blue-700">
        <CarouselCompt />
      </div>

      <div className="h-screen bg-pink-700">
        <h1>Servicios</h1>
      </div>

      <div className="h-3/6 bg-gray-500">
        <CompareImg />
      </div>

      <div className="h-screen bg-yellow-400">
        <h1>precios</h1>
      </div>

      <div className="h-screen bg-blue-700">
        <h1>Footer</h1>
      </div>

    </div>
  );
}