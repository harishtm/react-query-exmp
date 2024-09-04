import axios from "axios"
import { useQuery } from "react-query"


const fetchHistoricalMovies = () => {
    return axios.get('http://localhost:4000/historical')
}

export const Historical = () => {

    const onSuccess = (data) => {
        console.log(data)
    }

    const onError = (error) => {
        console.log(error)
    }

    const { isLoading, data} = useQuery(
        'horror-movies',
        fetchHistoricalMovies,
        {
            onSuccess: onSuccess,
            onError: onError,
            /* Simple data transformation */
            select: (data) => {
                const movieNames = data?.data.map(movie => movie.name)
                return movieNames
            }
        }
    )
    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>Historical Movies</h2>
            {
                data.map(movieName => {
                    return <div key={movieName}>{movieName}</div>
                })
            }
        </div>
    )
} 