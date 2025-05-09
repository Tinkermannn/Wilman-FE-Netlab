import React from 'react'
import OSlogo from '../assets/Navbar/OSLogo.svg'
import Aslab from '../assets/aslabOS.png'
import ModulOS from '../components/Modul/ModulOS';

export default function OS() {
  return (
    <>
    <div className="w-full h-screen m-auto flex bg-gradient-to-t from-fuchsia-900/80 via-orange-700 to-black/90 shadow-inner">
      <div className='w-full h-[570px] py-20 px-20 flex items-center m-auto max-w-screen-2xl flex-col gap-10'>
        <div className='flex flex-row gap-2 items-center justify-center'>
          <img src={OSlogo} className='w-24' />
          <p className='text-white text-[4rem] font-bold'>Operating System</p>
        </div>
        <div className="w-full h-full flex flex-row px-20 justify-center gap-10 items-start">
          <div className="flex flex-col w-[50%] justify-start gap-2">
            <p className="text-white text-[4rem] font-bold tracking-tighter leading-none m-0 p-0">
              Person in Charge
            </p>
            <p className="text-white text-xl"><b className='font-extrabold'>George </b>William Thomas</p>
            <p className="text-white text-xl"><b className='font-extrabold'>Fairuz </b>Muhammad</p>
          </div>
          <div className="flex items-start">
            <img src={Aslab} className="w-80" />
          </div>
        </div>
      </div>
      
    </div>
        <ModulOS/>
        </>
  );
}
