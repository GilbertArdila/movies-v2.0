'use client';
export const dynamic='force-dynamic';
import './globals.css';
import { useState, useContext } from 'react';

import {BiSkipNext} from 'react-icons/bi';
import {BiSkipPrevious} from 'react-icons/bi';

import Movies from '@/components/Movies';
import { langContext } from './context/page';


export default function Home({ searchParams }) {
  const context = useContext(langContext) 
  const genre = searchParams.genre ;
  const [page, setPage] = useState(1);
 
  const handleIncrementPage = () => {
    if (page === 20) {
      setPage(1)
    } else {
      setPage(page + 1);
    }

  };

  const handleDecrementPage = () => {
    if (page === 1) {
      setPage(20)
    } else {
      setPage(page - 1);
    }

  };
  return (
    <>
    {/**the main view (movies) does not get page params */}
    {searchParams.genre && (
      <div className='flex items-center justify-between p-4 '>
       
        <button 
        className='text-2xl lg:text-4xl bg-amber-500 rounded-lg w-auto hover:scale-110 p-1'
        onClick={handleDecrementPage}><BiSkipPrevious/></button>
         <button 
        className='text-2xl lg:text-4xl bg-amber-500 rounded-lg w-auto hover:scale-110 p-1'
        onClick={handleIncrementPage}><BiSkipNext/></button>
      </div>
    )}
         
      <div>
        <Movies genre={genre} page={page} context={context} />

      </div>
      
    </>
  );

}

