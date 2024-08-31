import axios from "axios";
import { useEffect, useState } from "react"

export const Adventure = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/adventure')
        .then(response => {
            setMovies(response.data);
            setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return <h2>Loading...</h2>
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