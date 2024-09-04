import axios from "axios"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"


const fetchFantasyMovies = () => {
    return axios.get('http://localhost:4000/fantasy')
}

export const Fantasy = () => {

    const { isLoading, data} = useQuery(
        'fantasy-movies',
        fetchFantasyMovies,
    )

    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>Fantasy Movies</h2>
            {
                data?.data.map(movie => {
                    return (
                        <div key={movie.id}>
                            <Link to={`/fantasy/${movie.id}`}>{movie.name}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
} 