"use client"
import React, {useEffect, useState} from 'react'
import { Typewriter } from 'react-simple-typewriter'

function Loading() { 

    return (    
      <div className='flex min-h-screen flex-col items-center justify-center bg-black'>
      <div className='text-white text-6xl font-bold'>
      <Typewriter words={["Carregando..."]} loop={true} typeSpeed={100} />
      </div>
      </div>
    )
}

export default Loading