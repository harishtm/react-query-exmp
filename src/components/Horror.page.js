import axios from "axios"
import { useQuery } from "react-query"


const fetchHorrorMovies = () => {
    return axios.get('http://localhost:4000/horror')
}

export const Horror = () => {

    const { isLoading, data} = useQuery(
        'horror-movies',
        fetchHorrorMovies
    )
    console.log(data)
    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>Horror Movies</h2>
            {
                data?.data.map(movie => {
                    return <div key={movie.id}>{movie.name}</div>
                })
            }
        </div>
    )
} 