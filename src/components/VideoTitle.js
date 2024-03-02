const VideoTitle = ({title, overview}) => {
    return (
        <div className='w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <h4 className='text-lg py-6 w-1/4'>{overview}</h4>
            <div>
                <button className='bg-white p-4 px-12 rounded-lg text-black text-lg font-medium
                hover: bg-opacity-80'>Play</button>
                <button className='bg-gray-500 ml-2 p-4 px-12 rounded-lg text-white opacity-50 text-lg font-medium'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;