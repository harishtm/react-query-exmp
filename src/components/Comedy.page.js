import axios from "axios"
import { useQuery } from "react-query"

const fetchComedyMovies = () => {
    return axios.get('http://localhost:4000/comedy')
}

export const Comedy = () => {

    const onSuccess = (data) => {
        console.log("Perform side effects after data fetching", data)
    }

    const onError = (error) => {
        console.log("Perform side effects encountering an error", error)
    }

    const { isLoading, data,
            isError, error, isFetching, refetch
        } = useQuery('comedy-movies',
                    fetchComedyMovies,
                    {
                        // refetchOnMount: true, // possible values: true, false, 'always'
                        // refetchOnWindowFocus: true
                        // refetchInterval: 2000, //Polling
                        // refetchIntervalInBackground: true // Continue to poll data even when the browser not in focus
                        // enabled: false // Not to fire the query on component Mounts
                        onSuccess: onSuccess,
                        onError: onError
                    }
                )

    console.log({isLoading, isFetching})

    if(isLoading || isFetching) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <h2>Comedy Movies</h2>
            <button onClick={refetch}>Fetch Movies</button>
            {
                data?.data.map(movie => {
                    return <div key={movie.id}>{movie.name}</div>
                })
            }
        </div>
    )
}