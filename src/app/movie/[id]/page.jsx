import axios from 'axios';
import Image from 'next/image';


const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

const  MoviePage = async ({params}) => {
 

  const {id} = params;
  

async function fetchMovieById(id) {
  try {
    const response = await axios.get(`${BASE_URL}movie/${id}`, {
      params: { api_key: API_KEY, language: 'en-USA' },
    });

    
    const movie = response.data;
    

    return movie;
  } catch (error) {
    
    console.error('Error fetching movie data:', error);
    throw new Error('Failed to fetch movie data');
  }
}



  const movie = await fetchMovieById(id);
  



 

  return (
    <div className='w-full'>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
     
      <Image  
      src={`https://image.tmdb.org/t/p/original/${movie.poster_path || movie.backdrop_path}`}
      width={500} height={300}
      alt='Movie poster'
      className='rounded-lg '
      placeholder='blur'
      blurDataURL='/spinner.svg'
      style={{maxWidth:'100%',height:'100%'}}
      />
      <div className='p-2'>
        
         <h1 className='text-xl mb-3 font-bold'>{movie.title || movie.name}</h1>
         <h2 className='text-lg font-bold'>{movie.tagline}</h2>
         <p className='text-lg mb-3'>
          <span className='font-semibold mr-1'>Overview:</span>{movie.overview}
         </p>
         <p className='mb-3 '><span className='font-semibold mr-1 '>Date Released:</span>{movie.release_date || movie.first_air_date}</p>
         <p className='mb-3'><span className='font-semibold mr-1 '>Rating:</span>{movie.vote_count}</p>
         <p className='mb-3'><span className='font-semibold mr-1 '>Average:</span>{movie.vote_average}/10</p>
         <p>Genres: {movie.genres && movie.genres.map((genre, index) => (
          <span key={genre.id }>{genre.name}{index < movie.genres.length - 1 ? ', ' : ''}</span>
         )
         )}</p>
         <a href={`${movie.homepage}`} target='_blank' className='underline '  style={{ color: 'blue' }}>Homepage</a>
      </div>
      </div>

      
      
    </div>
  )
}

export default MoviePage;