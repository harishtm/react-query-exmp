import axios from "axios"
import { useQuery } from "react-query"

const fetchComedyMovies = () => {
    return axios.get('http://localhost:4000/comedy')
}

export const Comedy = () => {

    const { isLoading, data} = useQuery('comedy-movies', fetchComedyMovies)

    if(isLoading) {
        return <div>Loading...</div>
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