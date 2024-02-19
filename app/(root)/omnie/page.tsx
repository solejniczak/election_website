"use client"

import Image from 'next/image'
import React from 'react'
import { Reveal } from '@/components/shared/Reveal'

const oMnie = () => {
  return (
    <div>
        <div className='flex flex-col'>

            <div className='w-full bg-blue-500'>
                <div className='max-w-6xl lg:mx-auto flex flex-col md:flex-row'>
                    
                    <div className='w-full md:w-1/4 h-auto'>
                        <Reveal type='left'>
                            <Image 
                            src='/assets/images/kandydat.png'
                            alt='kandydat'
                            width={1000}
                            height={1000}
                            />
                        </Reveal>
                    </div>

                    <div className='p-5 md:px-10 xl:px-0 w-full md:w-3/4'>
                        <Reveal type='left'>
                            <div>
                                <p className='p-bold-24 mb-5'>Jan Kowalski</p>
                                <p className='p-regular-20 mx-5'>Właściciel gospodarstwa rolnego, mężczyzna, ojciec dwóch synów.</p>
                                <p className='p-regular-20 mx-5'>Posiadam wykształcenie wyższe z zakresu nauk humanistycznych.</p>
                                <p className='p-regular-20 mx-5'>Dysponuję obszernym bagażem doświadczenia w aspektach pozyskiwania, administrowania i finalizacji projektów 
                                finansowanych zarówno z zasobów krajowych, jak i europejskich - znam się na kreowaniu oraz realizacji różnorodnych inicjatyw służących 
                                lokalnej społeczności.</p>    
                            </div>
                        </Reveal>           
                    </div>

                </div>
            </div>

            <div className='max-w-6xl lg:mx-auto w-full flex flex-row'>
                <div className='p-5 md:px-10 xl:px-0'>
                    <Reveal>
                        <div>
                            <p className='p-bold-20 mb-3'>Dzialalność społeczna</p>
                            <p>Od wielu lat działam jako członek społeczności: </p>
                            <p className='mx-2'>- Członek Stowarzyszenia Rolników </p>
                            <p className='mx-2'>- Wiceprezes Grupy Samorządowców </p>
                            <p className='mx-2'>- Współzałożyciel projektu na rzecz bezdomnych </p>
                        </div>
                    </Reveal>

                </div>
            </div>

            <div className='w-full bg-purple-500'>
                <div className='max-w-6xl lg:mx-auto flex flex-row'>
                    <div className='p-5 md:px-10 xl:px-0'>
                        <Reveal type='left'>
                            <div>
                                <p className='p-bold-20 mb-3'>Wolontariat</p>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum odio beatae nesciunt error unde deserunt necessitatibus officia, vero blanditiis adipisci iure qui possimus laudantium corrupti tempore odit omnis animi explicabo?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam doloremque ut aliquid, accusamus officiis voluptates laudantium possimus architecto qui similique consequuntur fuga facilis quis excepturi. Similique tempore cumque ab omnis!
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className='max-w-6xl lg:mx-auto w-full grid grid-cols-1 md:grid-cols-2 md:gap-10'>

                <div className='flex flex-row'>
                    <div className='p-5 md:px-10 xl:px-0'>
                        <Reveal>
                            <div>
                                <p className='p-bold-20 mb-3'>Rozwój osobisty</p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolore deleniti rerum debitis maxime. Eius cumque omnis labore, tempore doloribus assumenda quae nam perferendis, cupiditate soluta ullam rerum ab quisquam.
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nobis ipsum suscipit dolore voluptatibus magni deleniti? Delectus eos molestiae velit eius sit ullam praesentium saepe unde! Impedit, sed nulla! Libero? 
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className='flex flex-row'>
                    <div className='p-5 md:px-10 xl:px-0'>
                        <Reveal>
                            <div>
                                <p className='p-bold-20 mb-3'>Troska o interes gminy</p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, autem! Adipisci delectus ex accusamus ducimus quas, voluptatibus numquam tempore ipsa minus aut voluptas perferendis fugit! Nisi voluptatibus quasi placeat delectus!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio omnis error? Recusandae explicabo repudiandae nam alias earum blanditiis laudantium! Suscipit atque repellendus dolore ut consequatur officia perferendis, odit ipsa.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className='w-full bg-blue-500'>
                <div className='max-w-6xl lg:mx-auto w-full flex flex-row'>
                    <div className='p-5 md:px-10 xl:px-0'>
                        <Reveal type='left'>
                            <div>
                                <p className='p-bold-20'>Jestem jednym z was</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis officiis, corrupti odit nihil pariatur ullam optio nobis commodi omnis dolore facere maxime natus, soluta laboriosam eum vel quasi, incidunt nulla!
                                </p>
                                <p className='mt-5 italic p-regular-20'>
                                    Jan Kowalski
                                </p>
                                <p className='italic'>
                                    Kandydat na starostę powiatu
                                </p>
                            </div>
                        </Reveal>

                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default oMnie