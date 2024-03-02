import Header from "./Header";
import usePlayingMovies from "../hooks/usePlayingMovies";
import MainContainer from "./MainContainer";

const Browse = () => {

    usePlayingMovies();

    return (
        <div>
            <Header />
                <MainContainer />
            <div>
                movies list * n
            </div>
        </div>
    )
};

export default Browse;