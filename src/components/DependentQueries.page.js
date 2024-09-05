import axios from "axios"
import { useState } from "react"
import { useQuery } from "react-query"

const fetchUser = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchUserPlatformMovies = (platform) => {
    return axios.get(`http://localhost:4000/platforms/${platform}`)
}

export const DependentQueries = () => {

    const [email, setEmail] = useState('');
    const [rendered, setRendered] = useState();

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div>
            <label>Subscriber Email</label>
            <input 
                type="text" 
                value={email} 
                onChange={handleChange} 
            />
            <button onClick={() => setRendered(<FetchSubscriberMovies email={email}/>)}>
                Fetch Subscriber Movies
            </button>
            {
                rendered
            }
        </div>
    )
}


export const FetchSubscriberMovies = ({email}) => {

    const { data: user, isError: userError } = useQuery(
        'user',
        () => fetchUser(email),
        {
            enabled: !!email,
        }
    )

    const platform = user?.data.platform

    const { data: movies } = useQuery(
                                'platform-movies',
                                () => fetchUserPlatformMovies(platform),
                                {
                                enabled: !!platform,
                                }
                            )
    // console.log(movies?.data?.rentals)

    const userRentalMovies = movies?.data?.rentals ?? []

    if(userError) {
        return <>Invalid User</>
    }

    return (
        <>
            {
                userRentalMovies ? userRentalMovies.map(movie => {
                    return <div key={movie}>{movie}</div>
                }) : <>No movies</>
            }
        </>
    )
}