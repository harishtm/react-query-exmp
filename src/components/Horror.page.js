import axios from "axios"
import { useState } from "react"
import { useQuery } from "react-query"


const fetchHorrorMovies = () => {
    return axios.get('http://localhost:4000/horror')
}

export const Horror = () => {

    const [interval, setRefetchInterval] = useState(3000)

    const onSuccess = (data) => {
        if(data?.data.length > 3) {
            setRefetchInterval(false)
        }
    }

    const onError = (error) => {
        console.log(error)
        setRefetchInterval(false)
    }

    const { isLoading, data} = useQuery(
        'horror-movies',
        fetchHorrorMovies,
        {
            refetchInterval: interval,
            onSuccess: onSuccess,
            onError: onError
        }
    )
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