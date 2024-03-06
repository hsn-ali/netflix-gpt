import {BG_NETFLIX} from "../utils/constant";
import main from "../utils/openAi";

const GptSearch = () => {

    const searchGptResult = () => {
        main();
    }

    return (
        <div>
            <img src={BG_NETFLIX} className="absolute -z-1" alt="netflix_bg" height='100%' width='100%' style={{'z-index': '-1'}}/>
            <div className='flex justify-center items-center h-[100vh] bg-[#00000073]'>
                <div className='bg-amber-500 w-[750px]'>
                    <input type="text" placeholder="What do you want to watch today ?" className='p-2 bg-amber-200 w-[80%] m-2 rounded text-[#464646] text-sm font-medium'
                    />
                    <button className="bg-gray-500 p-2 px-6 m-2 rounded text-white" onClick={searchGptResult}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default GptSearch;