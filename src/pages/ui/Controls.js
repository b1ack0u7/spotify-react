import React from 'react'

const Controls = () => {
  return (
    <div className='absolute bottom-0 flex w-full h-[90px] text-white bg-[#181818] border-t border-[#282828]'>
      <div className='grid w-full place-content-center grid-cols-3 mx-4'>
        <div className='flex items-center'>
          <div className='mr-8'>
            <p className='select-none text-[15px]'>Another Life</p>
            <p className='select-none text-[12px] text-gray-300 transition hover:text-white'>Another Life</p>
          </div>
          <div className='mt-1'>
            <i className='fi fi-rr-following mr-4 text-gray-300 transition hover:text-white'/>
            <i className='fi fi-rr-computer text-gray-300 transition hover:text-white'/>
          </div>
        </div>

        <div>
          <div className='grid grid-flow-col place-items-center mx-8'>
            <i className='fi fi-rr-shuffle'/>
            <i className='fi fi-rr-rewind'/>
            <i className='fi fi-rr-play'/>
            <i className='fi fi-rr-forward'/>
            <i className='fi fi-rr-refresh'/>
          </div>

          <div className='flex'>
            <p className='text-[12px] text-gray-300'>0:00</p>
            <div className='mt-[9px] bg-gray-400 w-full h-[2px] rounded-full mx-4'/>
            <p className='text-[12px] text-gray-300'>0:00</p>
          </div>
        </div>

        <div className='grid grid-flow-col gap-x-8 place-content-end my-auto'>
          <i className='fi fi-rr-microphone'/>
          <i className='fi fi-rr-apps-sort'/>
          <i className='fi fi-rr-screen'/>
          <i className='fi fi-rr-headphones'/>
        </div>
      </div>
    </div>
  )
}

export default Controls