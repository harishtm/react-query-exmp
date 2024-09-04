import { useParams } from "react-router-dom"
import { useMovieDeatails } from "../hooks/useMovieDetails"

export const MovieDetail = () => {

    const { movieId } = useParams()
    const { isLoading, data, isError, error} = useMovieDeatails(movieId)

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <div>{error.message}</div>
    }

    return (
        <div>
            <u>MovieDetail</u>
            <span>
                <p><b>Movie Name:</b> {data?.data.name}</p>
                <p><b>Movie Cast:</b> {data?.data.cast}</p>
            </span>
        </div>
    )
}