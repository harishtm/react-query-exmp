import { useMutation, useQuery } from "react-query";
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
    return useMutation(addMovie)
}