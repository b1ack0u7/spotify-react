import React from 'react'

const SmallItem = ({img, text}) => {
  return (
    <div className='flex items-center w-[320px] xl:w-[520px] h-[64px] xl:h-[80px] bg-[#27252d] rounded-md transition hover:bg-[#3e3d44]'>
      <img className='max-w-full max-h-full rounded-l-md' src={img} alt='bgimage'/>
      <p className='mb-[2px] ml-4 font-semibold select-none xl:text-[16px]'>{text}</p>
    </div>
  )
}

const Home = () => {
  return (
    <div className=''>
      <p className='font-bold text-[2rem] mb-6'>Buenas Tardes</p>

      <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
        <SmallItem text='slouzzz phonk music' img='https://i.scdn.co/image/ab67706c0000da8492148c680bf2baa3fd47303e'/>
        <SmallItem text='Adrenaline Workout' img='https://i.scdn.co/image/ab67706f00000002929e39d3550da276515b31f2'/>
        <SmallItem text='Broken Heart' img='https://i.scdn.co/image/ab67706f0000000250f34f0e7a0b73effe02fa6f'/>
        <SmallItem text='GYM' img='https://mosaic.scdn.co/300/ab67616d00001e025f4c9262d32be3019e1dda3eab67616d00001e027abf4b0f94830241dcf61f6eab67616d00001e02be86ef103692ddebae2ec8cbab67616d00001e02daa4a83d2f794c1e31265dab'/>
      </div>
    </div>
  )
}

export default Home