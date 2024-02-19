"use client"

import Slider from "@/components/shared/Slider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="max-w-7xl lg:mx-auto md:px-10 xl:px-0 w-full grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 h-full">
          
          <div className="flex flex-col justify-center gap-8 p-5">
            <Reveal type="left">
              <h1 className="h1-bold text-center md:text-start">Jan Kowalski</h1>
            </Reveal>
            <Reveal type="left">
              <h1 className="h2-bold text-center md:text-start">Kandydat na starostę powiatu</h1>
            </Reveal>
            
            <Reveal type="left">
              <p className="p-regular-20 md:p-regular-24 text-center md:text-start">Wspólnie zbudujmy lepszy powiat!</p>
            </Reveal>
            <Reveal type="left">
              <Button size="lg" asChild className="button w-full sm:w-fit">
                <Link href="/omnie">
                  Poznaj mnie
                </Link>
              </Button>
            </Reveal>
          </div>

          <Reveal>
            <Image 
              src="/assets/images/kandydat.png"
              alt="kandydat"
              width={1000}
              height={1000}
              className="max-h-[100vh] object-contain object-center 2xl:max-h-[100vh] p-0"
            />
          </Reveal>
          
        </div>
      </section>

      <section className="md:min-h-[100vh] bg-team flex items-center justify-center">

        <Reveal>
          <div className="max-w-6xl w-full bg-white bg-opacity-60 md:rounded-xl p-10 flex flex-col items-center justify-center text-center">

            <p className="h3-bold">Zgrany i gotowy do działania zespół radnych z pomysłami</p>

            <Button size="lg" className="mt-5 button w-fit">
              <Link href="/radni">
                Poznaj zespół
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 md:min-h-[100vh]">
        <div className="wrapper">
          <div className="flex flex-col gap-8 p-5 mt-10">
            <Reveal type='left'>
            <h2 className="h2-bold">"Wspaniały cytat o życiu"</h2>
            </Reveal>
            <div className="wrapper">
              <Reveal type='left'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quisquam porro eaque aliquid, obcaecati sunt, deleniti voluptates earum ipsam aut eos laudantium architecto laborum facere in libero assumenda perspiciatis molestiae!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus rerum tempora ipsa alias praesentium esse, sapiente tenetur corrupti blanditiis non deserunt illo quaerat nesciunt dicta voluptatem! Deserunt accusantium fugit facere!
              </p>
              </Reveal>
              <div className="wrapper">
                <p className="flex flex-row justify-center mt-10 md:h5-bold p-bold-24 text-center">
                  <Reveal type='left'>
                    <p>Nasz powiat szczególnie potrzebuje rozwijać się w trzech głównych obszarach</p>
                  </Reveal>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:mx-48 mt-10">
                  <Reveal>
                    <Link href="/plan">
                      <div className="flex flex-col justify-center items-center border-4 border-black rounded-2xl p-5 bg-white hover:scale-105 duration-500">
                        <p className="p-bold-24 mb-5">Rolnictwo</p>
                        <Image 
                          src="/assets/icons/carrot.svg"
                          alt="carrot"
                          width={200}
                          height={200}
                        />
                      </div>
                    </Link>
                  </Reveal>
                  <Reveal>
                    <Link href="/plan">
                      <div className="flex flex-col justify-center items-center border-4 border-black rounded-2xl p-5 bg-white hover:scale-105 duration-500">
                        <p className="p-bold-24 mb-5">Edukacja</p>
                        <Image 
                          src="/assets/icons/education.svg"
                          alt="carrot"
                          width={200}
                          height={200}
                        />
                      </div>
                    </Link>
                  </Reveal>
                  <Reveal>
                    <Link href="/plan">
                      <div className="flex flex-col justify-center items-center border-4 border-black rounded-2xl p-5 bg-white hover:scale-105 duration-500">
                        <p className="p-bold-24 mb-5">Ekologia</p>
                        <Image 
                          src="/assets/icons/ecology.svg"
                          alt="carrot"
                          width={200}
                          height={200}
                        />
                      </div>
                    </Link>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
            
        </div>
      </section>

      <section className="wrapper flex flex-col md:min-h-[80vh]">
        <Reveal>
          <p className="h5-bold mt-10">Oto co udało mi się zrobić jako członek społeczności:</p>
        </Reveal>
        <div className="wrapper">
          <Reveal>
            <div>
              <Slider />
                <div className="mx-auto w-fit">
                <Button size="lg" className="mx-auto mt-5 button w-fit">
                  <Link href="/dzialania">
                    <p>Zobacz więcej</p>
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
          


      </section>

    </>
  );
}
