import { useMoviesData } from "../hooks/useMoviesData"


export const Drama = () => {

    const onSuccess = (data) => {
        console.log(data)
    }

    const onError = (error) => {
        console.log(error)
    }

    const props = {
        queryKey: 'drama-movies',
        url: 'http://localhost:4000/drama',
        onSuccess,
        onError
    }

    const { isLoading, data} = useMoviesData(props)

    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>Drama Movies</h2>
            {
                data?.data.map(movie => {
                    return <div key={movie.id}>{movie.name}</div>
                })
            }
        </div>
    )
} 