import { useQuery } from "react-query";
import axios from "axios";

const fetchMovies = ({queryKey}) => {
    /*
        The query function that you pass to react-query gets a queryContext injected,
        which is an object that consists of the queryKey
        (and some more information if you are using an infinite query)
    */
    const [_, url] = queryKey;
    return axios.get(url)
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