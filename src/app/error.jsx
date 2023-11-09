'use client';
import { useEffect } from 'react';

const Error = ({error, reset}) => {
    
useEffect(() => {
 
console.log(error)
 
}, [error])


  return (
    <div className="text-center mt-20">
        <h1 className="text-xl text-center">Upsss, Something went wrong</h1>
        <button 
        className="mt-20 bg-amber-500 rounded-lg p-1 w-auto mx-auto hover:scale-110"
        onClick={()=> reset()}>Try again</button>
    </div>
  )
}

export default Error;