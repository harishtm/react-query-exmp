import axios from "axios"
import { useState } from "react"
import { useQuery } from "react-query"

const fetchColors = (pageNumber) => {
    return axios.get(`http://localhost:4000/colors?_page=${pageNumber}&_per_page=2`)
}

export const PaginatedQueries = () => {

    const [pageNumber, setPageNumber] = useState(1)

    const { isLoading, data, isError, error, isFetching } = useQuery(
        ['colors', pageNumber],
        () => fetchColors(pageNumber),
        {
            keepPreviousData: true
        }
    )

    if (isLoading) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <div>{error.message}</div>
    }

    const lastPageNumber = data?.data.last ?? 5
    const prevPageNumber = data?.data.prev ?? 1
    const nextPageNumber = data?.data.next ?? prevPageNumber + 1
    const colors = data?.data?.data ?? []

    return (
        <>
            <div>
                {
                    colors && colors.map(color => {
                        return (
                            <div key={color.id}>
                                <h4>
                                    {color.id}. {color.label}
                                </h4>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <button
                    onClick={() => setPageNumber(prevPageNumber)}
                    disabled={pageNumber === 1}
                >
                    Previous
                </button>
                <button
                    onClick={() => setPageNumber(nextPageNumber)}
                    disabled={pageNumber === lastPageNumber}
                >
                    Next
                </button>
            </div>
            { isFetching && 'Loading'}
        </>
    )
}