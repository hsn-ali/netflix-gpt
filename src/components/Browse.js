import Header from "./Header";
import usePlayingMovies from "../hooks/usePlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";

const Browse = () => {

    usePlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    useUpcomingMovies();

    return (
        <div>
            <Header />

            <GptSearch />
            <MainContainer />
            <div>
                <SecondaryContainer />
            </div>
        </div>
    )
};

export default Browse;