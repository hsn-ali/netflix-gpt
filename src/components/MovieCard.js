import {MOVIES_BASE_PATH} from "../utils/constant";

const MovieCard = ({movie}) => {
    return (
        <div className='w-48 pr-4'>
            <img src={MOVIES_BASE_PATH+movie.poster_path} alt=""/>
        </div>
    )
}

export default MovieCard;