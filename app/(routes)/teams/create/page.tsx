import React from 'react'
import Image from 'next/image'

function CreateTeam() {
  return (

    <div className='p-16'>
      <Image src='./public/lolo.svg' alt='logo' width={200} height={200} />
      <div className=' flex  justify-center'>
        <h2 className='font-bold text-4xl py-3'>What should we call your team?</h2>
      </div>
    </div>
  )
}

export default CreateTeam