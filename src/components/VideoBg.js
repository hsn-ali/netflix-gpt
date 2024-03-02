import useMovieTrailer from "../hooks/useMovieTrailer";
import {useSelector} from "react-redux";

const VideoBg = ({movieId}) => {

    useMovieTrailer(movieId);
    const trailerVideo = useSelector(state => state.movies?.trailer);

    return (
        <div className='w-screen'>
            <iframe src={'https://www.youtube.com/embed/' + trailerVideo?.key +'?autoplay=1&mute=1'}
                    className='w-screen aspect-video' title={trailerVideo?.title}
            allow='accelerometer; autoplay'>
            </iframe>
        </div>
    )
}

export default VideoBg;