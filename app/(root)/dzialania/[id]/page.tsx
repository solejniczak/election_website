"use client"

import React from 'react'
import Image from "next/image"
import { usePathname, useRouter } from 'next/navigation';
import data from '@/database/dzialania';

import { Reveal } from '@/components/shared/Reveal';

const Page = () => {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const item = data.find((item) => item.id === Number(id));

  if (!item) {
    return <div>Brak danych dla podanego id</div>;
  }

  return (

    <div className='bg-gray-100 h-full'>
        <div className="m-auto ">
            <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-5 md:px-10 xl:px-0 w-full gap-5">
                {item.path && (
                    <div className="overflow-hidden rounded-2xl justify-center w-full md:w-1/3">
                        <Reveal>
                            <Image src={item.path} alt={item.name} width={1000} height={1000} />
                        </Reveal>
                    </div>
                )}

                    <div className="flex flex-col min-h-auto p-5 w-full md:w-2/3">
                    
                    {item.name && (
                        <Reveal>
                            <p className="p-bold-24">{item.name}</p>
                        </Reveal>
                    )}
 

                    {item.city && (
                        <Reveal>
                            <div className="flex flex-row items-center p-4">
                                <Image src="/assets/icons/location.svg" alt="location" width={32} height={32} className="mr-5" />
                                <p>{item.city}</p>
                            </div>
                        </Reveal>
                    )}

                    {item.startDate && item.endDate && (
                        <Reveal>
                            <div className="flex flex-row items-center p-4">
                                <Image src="/assets/icons/calendar.svg" alt="calendar" width={32} height={32} className="mr-5" />
                                <p>{`${item.startDate} - ${item.endDate}`}</p>
                            </div>
                        </Reveal>
                    )}

                    {item.price && (
                        <Reveal>
                            <div className="flex flex-row items-center p-4">
                                <Image src="/assets/icons/dollar.svg" alt="dollar" width={32} height={32} className="mr-5" />
                                <p>{`${item.price} zł`}</p>
                            </div>
                        </Reveal>
                    )}

                    {item.description && (
                        <Reveal>
                            <div className="flex flex-row items-center p-4">
                                <Image src="/assets/icons/comment.svg" alt="comment" width={32} height={32} className="mr-5" />
                                <p>{item.description}</p>
                            </div>
                        </Reveal>
                    )}
                    
                </div>
            </div>
        </div>
    </div>

  );
};

export default Page;
