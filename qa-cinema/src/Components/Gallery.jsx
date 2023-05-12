import React from 'react';
import MoviePanel from './MoviePanel';

const jsonDataArray = [
    {
        img: '',
        title: '',
        rating: '',
        year: '',
        plot: '',
    }
]

const Gallery = () => {

    return (
        <div className='px-4 mt-2'>
            <h4 className='px-2 p-3 mt-5'>Currently Showing</h4>
            <div className='grid grid-cols-6 border-t-2 border-pearl-aqua'>
                {/* Movie panels for currently showing movies go here */}
                <MoviePanel />
            </div>
            <div className='py-3 border-b-2 border-pearl-aqua'></div>
            <h4 className='px-4 py-3 mt-5'>Coming soon!</h4>
            <div>
                {/* More movie panels for upcoming movies here */}

            </div>
        </div>
    );
}

export default Gallery;