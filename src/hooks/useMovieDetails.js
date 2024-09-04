import axios from "axios";
import { useQuery } from "react-query";


const fetchMovieDetails = (movieId) => {
    return axios.get(`http://localhost:4000/fantasy/${movieId}`)
}

export const useMovieDeatails = (movieId) => {
    return useQuery(
        ['movie-details', movieId],
        () => fetchMovieDetails(movieId)
    )
}