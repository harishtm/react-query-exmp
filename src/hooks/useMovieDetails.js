import axios from "axios";
import { useQuery, useQueryClient } from "react-query";


const fetchMovieDetails = (movieId) => {
    return axios.get(`http://localhost:4000/fantasy/${movieId}`)
}

export const useMovieDeatails = (movieId) => {
    const queryClient = useQueryClient()
    return useQuery(
        ['movie-details', movieId],
        () => fetchMovieDetails(movieId),
        {
            initialData: () => {
                const movie = queryClient
                .getQueriesData('fantasy-movies')
                ?.data?.find((movie) => parseInt(movieId) === parseInt(movie.id))

                if(movie) {
                    return { data: movie}
                } else {
                    return undefined
                }
            }
        }
    )
}