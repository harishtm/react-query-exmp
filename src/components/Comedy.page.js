import axios from "axios"
import { useQuery } from "react-query"

export const Comedy = () => {

    const { isLoading, data} = useQuery('comedy-movies', () => {
        return axios.get('http://localhost:4000/comedy')
    })

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