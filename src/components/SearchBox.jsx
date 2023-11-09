'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {AiOutlineSearch} from 'react-icons/ai';

const SearchBox = () => {
  const [search,setSearch]= useState('');
  const router = useRouter();

  function handleSubmit(e){
    e.preventDefault();
    if(!search) return;
    router.push(`/search/${search}`);
    
   
    setSearch('');
  }

  return (
    <div>
        <form 
        onSubmit={handleSubmit}
        className='flex max-w-6xl mx-auto justify-between items-center px-5'>
            <input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type='text' placeholder='Search movies...' className='w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-gray-100 flex-1 p-2 '/>
            <button 
            disabled={!search}
            type='submit' className='text-2xl text-amber-500 disabled:text-gray-400 bg-gray-100 h-14 w-auto p-4 rounded-sm border-2 border-amber-500'><AiOutlineSearch/></button>
        </form>
    </div>
  )
}

export default SearchBox