import {useDispatch} from "react-redux";
import {API_OPTIONS} from "../utils/constant";
import {addNowPlayingMovies} from "../utils/moviesSlice";
import {useEffect} from "react";

const usePlayingMovies = () => {
    // Fetching data from TMDB API and updating store using moviesSlice :-)
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default usePlayingMovies;