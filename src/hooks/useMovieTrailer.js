import {useDispatch} from "react-redux";
import {API_OPTIONS} from "../utils/constant";
import {addTrailerVideo} from "../utils/moviesSlice";
import {useEffect} from "react";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
    const getMovieTrailer = async () => {
        if (!movieId) return;
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US'
            , API_OPTIONS);
        const json = await data.json();
        const trailer = json.results.find(movie => movie.type === 'Trailer');
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieTrailer();
    }, []);
}

export default useMovieTrailer;