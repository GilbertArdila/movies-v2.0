import { useEffect, useState } from 'react';
import Card from './Card';

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;



function Movies({ genre, page, context }) {
  const [moviesData, setMoviesData] = useState([]);

  //here set the language to the fetch function
  let language;
  if (context.language === 'es-CO') {
    language = 'es-LAT';
  } else {
    language = 'en-US';
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const results = await fetchMoviesData(genre, page, language);
        setMoviesData(results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [page, genre, language]);



  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {moviesData.map((result) => (
        <Card
          result={result} key={result.id} />
      ))}
    </div>
  );
}

export default Movies;

async function fetchMoviesData(genre, page, language) {

  let response;

  //if genre does not exist then show the main movies list, if exist show the gender we are looking for (trending/top rated)
  if (!genre) {
    response = await fetch(`${BASE_URL}discover/movie?api_key=${API_KEY}&language=${language},
    { next: { revalidate: 10000 }`)
  } else {
    response = await fetch(
      `${BASE_URL}${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'}?api_key=${API_KEY}&language=${language}&page=${page}`,
      { next: { revalidate: 10000 } }
    );
  }


  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();

  return data.results;
}

