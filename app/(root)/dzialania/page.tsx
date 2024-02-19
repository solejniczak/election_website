// "use client"

// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import data from '@/database/dzialania';
// import { Reveal } from '@/components/shared/Reveal';

// const Dzialania = () => {
//   const [filteredData, setFilteredData] = useState(data);

//   return (
//     <div>
//       <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">

//       </section>
//       <div className="m-auto">

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto p-5 md:px-10 xl:px-0 w-full gap-5">
//           {filteredData.map((item) => (
      
//             <Link key={item.id} href={`/dzialania/${item.id}`}>
//               <Reveal>
//               <div key={item.id} className="group relative overflow-hidden rounded-2xl justify-center hover:scale-105 duration-500 ">
//                 <Image src={item.path} alt={item.name} width={1000} height={1000} />
//                 <p className="bg-primary flex flex-col min-h-auto p-8 absolute bottom-0 w-full justify-center text-nowrap">
//                   <p className="p-bold-20 text-white">{item.name}</p>
//                   <p className="p-bold-20 text-gray-500">{item.city}</p>
//                 </p>
//               </div>
//               </Reveal>
//             </Link>

//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dzialania;
