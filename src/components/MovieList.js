import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
    return (
        <div className='p-6'>
            <h1 className='text-white text-3xl py-6'>{title}</h1>
            <div className='flex gap-4 overflow-x-scroll'>
                <div className='flex'>
                    {movies && movies.map(movie => {
                        return (
                            <MovieCard key={movie?.id} movie={movie}/>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;