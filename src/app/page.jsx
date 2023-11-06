'use client';

import './globals.css';
import { useState } from 'react';

import Movies from '@/components/Movies';


export default function Home({ searchParams }) {

  const genre = searchParams.genre || 'fetchTrending';
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

      <div>
        <Movies genre={genre} page={page} />

      </div>
      <div className='flex items-center justify-between p-4'>
        <button 
        className='text-xl bg-amber-500 rounded-lg w-auto hover:scale-110 p-1'
        onClick={handleIncrementPage}>Next</button>
        <button 
        className='text-xl bg-amber-500 rounded-lg w-auto hover:scale-110 p-1'
        onClick={handleDecrementPage}>Previous</button>
      </div>
    </>
  );

}
