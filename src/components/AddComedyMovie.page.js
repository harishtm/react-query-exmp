import axios from "axios"
import { useState } from "react"
import { useQuery } from "react-query"
import { useAddMovie } from "../hooks/useMoviesData"

const fetchComedyMovies = () => {
    return axios.get('http://localhost:4000/comedy')
}

export const AddComedyMovie = () => {

    const [movie, setMovie] = useState('')
    const [cast, setCast] = useState('')

    const {
            isLoading, data,
            isError, error, isFetching, refetch
        } = useQuery('comedy-movies',
                    fetchComedyMovies,
                    {
                        enabled: false
                    }
                )

    const { mutate: addMovie } = useAddMovie()
    const handleAddMovie = () => {
        const url = 'http://localhost:4000/comedy'
        const postParam = {name: movie, cast: cast}
        console.log(postParam)
        addMovie({url, postParam})
    }

    if(isLoading || isFetching) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <h2>Comedy Movies</h2>
            <div>
                <input
                    type="text"
                    value={movie}
                    placeholder="Movie"
                    onChange={(e) => setMovie(e.target.value)}
                />
                <input
                    type="text"
                    value={cast}
                    placeholder="Cast"
                    onChange={(e) => setCast(e.target.value)}
                />
                <button onClick={handleAddMovie}>Add Movie</button>
            </div>
            <button onClick={refetch}>Fetch Movies</button>
            {
                data?.data.map(movie => {
                    return <div key={movie.id}>{movie.name}</div>
                })
            }
        </div>
    )
}