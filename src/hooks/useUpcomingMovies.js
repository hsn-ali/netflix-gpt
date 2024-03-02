import {API_OPTIONS, UPCOMING_MOVIES_URL} from "../utils/constant";
import {useDispatch} from "react-redux";
import {addUpcomingMovies} from "../utils/moviesSlice";
import {useEffect} from "react";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        const data = await fetch(UPCOMING_MOVIES_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        getUpcomingMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useUpcomingMovies;