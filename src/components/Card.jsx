import Image from 'next/image';
import Link from 'next/link';
import { FaRegThumbsUp} from 'react-icons/fa'


const Card = ({ result }) => {
  return (

   <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
    <Link href={`/movie/${result.id}`}>
      <Image  
      src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
      width={500} height={300}
      alt='Image not found'
      className='p-2 sm:p-0 sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'
      placeholder='blur'
      blurDataURL='/spinner.svg'
      style={{maxWidth:'100%',height:'auto'}}
      />
       <div className='p-2'>
        <h2 className='truncate text-lg font-bold'>{result.title || result.original_title || result.name}</h2>
         <p className='line-clamp-2 text-md '>{result.overview}</p>
         
         <p className='flex items-center'>{result.release_date || result.first_air_date}
         <FaRegThumbsUp className='h-5 mr-1 ml-3'/>{result.vote_count}</p>
         <span className='font-bold '>{' Rating: '}{result.vote_average}/10</span>
         <p>{!result.adult ? 'for chlidren' : 'for adults only' }</p>
       </div>

    </Link>
   </div>

  )
}

export default Card;