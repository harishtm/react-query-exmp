import axios from "axios"
import { useQuery } from "react-query"


const fetchComedyMovies = () => {
    return axios.get('http://localhost:4000/comedy')
}

const fetchHorrorMovies = () => {
    return axios.get('http://localhost:4000/horror')
}

export const ParallelQueries = () => {

    // Aliasing destructured data
    const { data: comedyMovies } = useQuery(
        'comedy-movies',
        fetchComedyMovies
    )

    const { data: horrorMovies } = useQuery(
        'horror-movies',
        fetchHorrorMovies
    )

    return (
        <div>
            <div>
                <u>Comedy Movies</u>
                {
                    comedyMovies?.data.map(movie => {
                        return <div key={movie.id}>{movie.name}</div>
                    })
                }
            </div>
            <div>
                <u>Horror Movies</u>
                {
                    horrorMovies?.data.map(movie => {
                        return <div key={movie.id}>{movie.name}</div>
                    })
                }
            </div>
        </div>
    )
}