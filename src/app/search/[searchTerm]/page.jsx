import Card from '@/components/Card';
import Image from 'next/image';

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

const SearchPage = async ({params}) => {
    
  const res = await fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`);
  
  if(!res.ok){
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  const movies = data.results;
  
  return (
    <div>
        {movies && movies.length === 0 && (
            <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-mono text-center py-6'>No results found!</h1> 
            <Image src={'/not_found.png'} alt='not_found_image' width={300} height={300}/>   
            </div>
            
        )}
        {movies && (
            <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
            {movies.map((movie) => (
              <Card 
              result={movie} key={movie.id}/>
            ))}
          </div>
        )}
    </div>
  )
}

export default SearchPage