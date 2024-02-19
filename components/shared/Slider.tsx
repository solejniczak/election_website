"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import dzialania from '@/database/dzialania'
import Link from "next/link"

export default function Slider() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const dataToDisplay = dzialania.slice(0, 6)

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs wrapper"
        >
        <CarouselContent>
            {dataToDisplay.map((item) => (
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <Link key={item.id} href={`/dzialania/${item.id}`}>
                        <div className="group relative overflow-hidden rounded-2xl justify-center">
                            <Image 
                                src={item.path}
                                alt={item.name}
                                width={1000}
                                height={1000}
                            />
                            <p className="bg-primary flex flex-col min-h-auto p-8 absolute bottom-0 w-full justify-center text-nowrap">
                                <p className="p-bold-20 text-white">{item.name}</p>
                                <p className="p-bold-20 text-gray-500">{item.city}</p>
                            </p>
                        </div>
                    </Link>
                </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
