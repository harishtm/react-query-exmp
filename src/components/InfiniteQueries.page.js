import axios from "axios"
import { Fragment } from "react"
import { useInfiniteQuery } from "react-query"

const fetchColors = ({ pageParam = 1 }) => {
    return axios.get(`http://localhost:4000/colors?_page=${pageParam}&_per_page=2`)
}

export const InfiniteQueries = () => {

    const {
            isLoading, data, isError, error,
            hasNextPage, fetchNextPage,
            isFetching, isFetchingNextPage
        } = useInfiniteQuery(
        'colors',
        fetchColors,
        {
            getNextPageParam: (_lastPage, pages) => {
                if (pages.length < 4) {
                    return pages.length + 1
                } else {
                    return undefined
                }
            }
        }
    )

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>{error.message}</div>
    }

    return (
        <>
            <h3>Infinite Loading</h3>
            <div>
                {
                    data?.pages.map((group, index) => {
                        return (
                            <Fragment key={index}>
                                {
                                    group.data?.data?.map(color => (
                                            <div key={color.id}>
                                                {color.id} {color.label}
                                            </div>
                                        )
                                    )
                                }
                            </Fragment>
                        )
                    })
                }
            </div>
            <div>
                <button
                    disabled={!hasNextPage}
                    onClick={fetchNextPage}
                >
                        Load More
                </button>
            </div>
            <div>
                {
                    isFetching && !isFetchingNextPage ? 'Fetching...' : null
                }
            </div>
        </>
    )
}