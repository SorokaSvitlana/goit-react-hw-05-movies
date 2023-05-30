import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '6c7e0dbf534467d4aac979504763e884'

export default async function fetchMovieDetails(movieId) {
   try{  
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}