import axios from "axios";
import { useEffect, useState } from "react"

export const Adventure = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('http://localhost:4000/adventure')
        .then(response => {
            setMovies(response.data);
            setIsLoading(false)
        })
        .catch(error => {
            setError(error.message)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return <h2>Loading...</h2>
    }

    if(error) {
        return <h2>{error}</h2>
    }

    return (
        <div>
            <h2>Adventure Movies</h2>
            {
                movies.map(movie => {
                    return <div key={movie.id}>{movie.name}</div>
                })
            }
        </div>
    )
}