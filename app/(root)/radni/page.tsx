"use client"

import Image from 'next/image'
import React from 'react'
import { Reveal } from '@/components/shared/Reveal'

import radni from '@/database/radni'

const Radni = () => {
  return (
    <div className="max-w-6xl mx-auto md:px-10 xl:px-0 w-full p-10">
        <h1 className='h5-bold'>Radni startujący z komitetu wyborczego:</h1>
        
        <div className='grid grid-cols-1 md:grid-cols-2 md:max-w-6xl md:mx-auto md:px-10 xl:px-0 w-full gap-5 md:p-10 pt-5'>

            {radni.map((radny) => (
                <Reveal>
                    <div key={radny.id} className="flex flex-row justify-between max-h-[10rem] md:max-h-[15rem] border-0 rounded-xl hover:scale-105 duration-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        <div className='flex flex-col p-5 w-1/2'>
                            <p className='h5-bold'>{radny.name}</p>
                            <p className='p-regular-20 text-gray-200'>{radny.city}</p>
                        </div>
                        <div className='w-1/2'>
                            <Image 
                                src={radny.photo}
                                alt="radny"
                                width={500}
                                height={1000}
                                className="min-h-[10rem] max-h-[10rem] md:min-h-[15rem] md:max-h-[15rem] object-contain object-center p-0"
                            />
                        </div>
                    </div>
                </Reveal>
            ))}

        </div>
    </div>
  )
}

export default Radni