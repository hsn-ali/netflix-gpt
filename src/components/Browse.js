import Header from "./Header";
import usePlayingMovies from "../hooks/usePlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import {useSelector} from "react-redux";

const Browse = () => {

    usePlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    useUpcomingMovies();

    const showGpt = useSelector(store => store.gpt.showGpt)

    return (
        <div>
            <Header />
            {showGpt ? <GptSearch /> :
            <>
                <MainContainer />
                <div>
                <SecondaryContainer />
                </div>
            </>
            }
        </div>
    )
};

export default Browse;