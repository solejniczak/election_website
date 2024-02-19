import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
        <section className="bg-blue-500">
            <div className="max-w-6xl lg:mx-auto md:px-10 xl:px-0 w-full p-10 h-full">
            <div className="flex flex-col justify-center">
                <h1 className="h2-bold mb-8">Jako starosta powiatu zamierzam:</h1>
                <div className="p-regular-16 md:p-regular-20 flex flex-row p-4">
                    <Image 
                        src='/assets/icons/point.svg'
                        alt='point'
                        width={32}
                        height={32}
                        className='mr-2'
                    />
                    <p>Rozpoczęcie prac modernizacyjnych dróg lokalnych, zwłaszcza tych o złym stanie technicznym</p>
                </div>

                <div className="p-regular-16 md:p-regular-20 flex flex-row p-4">
                    <Image 
                        src='/assets/icons/point.svg'
                        alt='point'
                        width={32}
                        height={32}
                        className='mr-2'
                    />
                    <p>Ułatwienie otwierania nowych małych przedsiębiorstw poprzez uproszczenie procedur rejestracyjnych i udzielanie wsparcia dla lokalnych przedsiębiorców</p>
                </div>

                <div className="p-regular-16 md:p-regular-20 flex flex-row p-4">
                    <Image 
                        src='/assets/icons/point.svg'
                        alt='point'
                        width={32}
                        height={32}
                        className='mr-2'
                    />
                    <p>Wprowadzenie programów recyklingu i edukacyjnych, aby zwiększyć świadomość społeczności na temat ochrony środowiska</p>
                </div>

                <div className="p-regular-16 md:p-regular-20 flex flex-row p-4">
                    <Image 
                        src='/assets/icons/point.svg'
                        alt='point'
                        width={32}
                        height={32}
                        className='mr-2'
                    />
                    <p>Organizacja cyklicznych wydarzeń kulturalnych, festiwali i koncertów, aby promować sztukę i kulturę w społeczności</p>
                </div>

                <div className="p-regular-16 md:p-regular-20 flex flex-row p-4">
                    <Image 
                        src='/assets/icons/point.svg'
                        alt='point'
                        width={32}
                        height={32}
                        className='mr-2'
                    />
                    <p>Rozwój miejscowej infrastruktury zdrowotnej, w tym kliniki zdrowia i punkty szczepień</p>
                </div>

                <div className="p-regular-16 md:p-regular-20 flex flex-row p-4">
                    <Image 
                        src='/assets/icons/point.svg'
                        alt='point'
                        width={32}
                        height={32}
                        className='mr-2'
                    />
                    <p>Modernizacja istniejących obiektów sportowych i budowa nowych, aby promować aktywność fizyczną wśród mieszkańców</p>
                </div>

                <div className="p-regular-16 md:p-regular-20 flex flex-row p-4">
                    <Image 
                        src='/assets/icons/point.svg'
                        alt='point'
                        width={32}
                        height={32}
                        className='mr-2'
                    />
                    <p>Wprowadzić linie autobusowe</p>
                </div>

                <div className="p-regular-16 md:p-regular-20 flex flex-row p-4">
                    <Image 
                        src='/assets/icons/point.svg'
                        alt='point'
                        width={32}
                        height={32}
                        className='mr-2'
                    />
                    <p>Wprowadzenie systemów online do zarządzania usługami publicznymi, co ułatwi mieszkańcom korzystanie z usług miejskich</p>
                </div>

                <div className="p-regular-16 md:p-regular-20 flex flex-row p-4">
                    <Image 
                        src='/assets/icons/point.svg'
                        alt='point'
                        width={32}
                        height={32}
                        className='mr-2'
                    />
                    <p>Inwestycje w energię odnawialną, takie jak instalacje fotowoltaiczne na budynkach publicznych</p>
                </div>
            </div>

            </div>
        </section>
    </>
  )
}

export default page