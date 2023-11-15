'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 z-40'>
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

  try {

    if (!genre) {
      response = await axios.get(`${BASE_URL}discover/movie`, {
        params: { api_key: API_KEY, language: language },
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      response = await axios.get(
        `${BASE_URL}${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'}`,
        {
          params: { api_key: API_KEY, language: language, page: page },
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }



    return response.data.results;
  } catch (error) {

    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  }
}


