import {API_OPTIONS, POPULAR_MOVIES_URL} from "../utils/constant";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addPopularMovies} from "../utils/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch()
    const getPopularMovies = async () => {
        const data = await fetch(POPULAR_MOVIES_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getPopularMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

}

export default usePopularMovies;