import {API_OPTIONS, TOP_RATED_MOVIES_URL} from "../utils/constant";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {addTopRated} from "../utils/moviesSlice";

const useTrendingMovies = () => {

    const dispatch = useDispatch();
    const getTrendingMovies = async () => {
        const data = await fetch(TOP_RATED_MOVIES_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRated(json.results));
    }

    useEffect(() => {
        getTrendingMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useTrendingMovies;