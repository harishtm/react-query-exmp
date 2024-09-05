import axios from "axios"
import { useQueries } from "react-query"

const fetchMovie = ({queryKey}) => {
    const [genre, id] = queryKey
    return axios.get(`http://localhost:4000/${genre}/${id}`)
}

export const DynamicParallelPage = ({movieIds}) => {

    const queryResults = useQueries(
        movieIds.map(id => {
            return {
                queryKey: ['comedy', id],
                queryFn: fetchMovie
            }
        })
    )

    console.log(queryResults)

    return (
        <div>
            DynamicParallelPage
            {
                queryResults.map((item, index) => {
                    return item.isSuccess ? (
                        <div key={item.data.data.id}>{item.data.data.name}</div>
                    ) : <div key={index}>Loading...</div>
                })
            }
        </div>
    )
}