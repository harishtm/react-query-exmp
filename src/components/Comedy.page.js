import axios from "axios"
import { useQuery } from "react-query"

const fetchComedyMovies = () => {
    return axios.get('http://localhost:4000/comedy')
}

export const Comedy = () => {

    const { isLoading, data,
            isError, error, isFetching
        } = useQuery('comedy-movies',
                    fetchComedyMovies,
                    {
                        // refetchOnMount: true, // possible values: true, false, 'always'
                        // refetchOnWindowFocus: true
                        refetchInterval: 2000, //Polling
                        refetchIntervalInBackground: true // Continue to poll data even when the browser not in focus
                    }
                )

    console.log({isLoading, isFetching})

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <h2>Comedy Movies</h2>
            {
                data?.data.map(movie => {
                    return <div key={movie.id}>{movie.name}</div>
                })
            }
        </div>
    )
}