import React from 'react'
import Image from 'next/image'

function CreateTeam() {
  return (

    <div className='p-16 bg-gradient-to-b from-gray-950 to-gray-900 h-fit'>
      <Image src='./public/lolo.svg' alt='logo' width={200} height={100} />
      <div className=' flex flex-col justify-center items-center text-center'>
        <h2 className='font-bold text-4xl py-3 text-white'>What should we call your team?</h2>
        <h2 className=' text-gray-400 text-lg'>You can always change this later from settings.</h2>
        <span className='text-white'>Team Name</span>
        <input className=' border-2 border-gray-400 rounded-md m-4 p-1 w-2/3 active:border-blue-400'/>
      </div>
    </div>
  )
}

export default CreateTeam