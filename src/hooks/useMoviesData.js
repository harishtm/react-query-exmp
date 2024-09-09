import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchMovies = ({queryKey}) => {
    /*
        The query function that you pass to react-query gets a queryContext injected,
        which is an object that consists of the queryKey
        (and some more information if you are using an infinite query)
    */
    const [, url] = queryKey;
    return axios.get(url)
}

const addMovie = ({url, postParam}) => {
    return axios.post(url, postParam)
}

export const useMoviesData = (props) => {
    const { queryKey, url, onSuccess, onError} = props;
    return useQuery(
        [queryKey, url],
        fetchMovies,
        {
            onSuccess,
            onError
        }
    )
}

export const useAddMovie = () => {
    const queryClient = useQueryClient()
    return useMutation(addMovie, {
        /*
        // Query Invalidation
            onSuccess: async () => {
                await queryClient.invalidateQueries('comedy-movies')
            }
        */
       // Handling Mutation response
       // Avoiding extra GET request(can help avoid additonal network call)
        onSuccess: (data) => {
            queryClient.setQueriesData('comedy-movies', (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data, data.data]
                }
            })
        }
    })
}