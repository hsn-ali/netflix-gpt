import {BG_NETFLIX} from "../utils/constant";

const GptSearch = () => {
    return (
        <div>
            <img src={BG_NETFLIX} className="absolute -z-1" alt="netflix_bg" height='100%' width='100%'/>
            <div className='mt-8'>
                <input type="text" placeholder="What do you want to watch today ?"/>
                <button className="bg-amber-500 p-2 m-2">Search</button>
            </div>
        </div>
    )
}

export default GptSearch;