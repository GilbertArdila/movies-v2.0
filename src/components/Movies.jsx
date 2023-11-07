import { useEffect, useState } from 'react';
import Card from './Card';

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;



async function fetchMoviesData(genre, page) {
  let response;

  //if genre does not exist then show the main movies list, if exist show the gender we are looking for (trending/top rated)
  if(!genre){
     response = await fetch( `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&page=${page},
    { next: { revalidate: 10000 }`)
  }else{
     response = await fetch(
    `${BASE_URL}${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'}?api_key=${API_KEY}&language=en-US&page=${page}`,
    { next: { revalidate: 10000 } }
  );
  }
  

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  console.log(data.results)
  return data.results;
}

function Movies({ genre, page }) {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const results = await fetchMoviesData(genre, page);
        setMoviesData(results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [page, genre]);



  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {moviesData.map((result) => (
        <Card 
        result={result} key={result.id}/>
      ))}
    </div>
  );
}

export default Movies;

