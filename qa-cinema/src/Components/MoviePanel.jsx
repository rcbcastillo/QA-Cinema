import React from 'react';
import { Link } from 'react-router-dom';

const MoviePanel = ({jsonObj, buttonSettings}) => {

    const {imgSrc, title, rating, year, length, actors, plot} = jsonObj;

    return (
        //  Create and return a panel for one movie
        <>
            {/* Transform the image div to scale up poster on hover */}
            <div className='pt-3 col-start-1 col-span-1 hover:scale-150'>
                <img 
                src={imgSrc}
                alt={`movie poster for ${title}`}></img>
            </div>
            <div className='col-start-2 col-end-6 ...'>
                <div className='py-8 ml-6'>
                    <article>
                        <h1 className='text-4xl pb-2'>{title}</h1>
                        {/* TODO: make classification a link? */}
                        <ul className='text-sm pb-2'><li className='inline pr-1'>{year}</li><li className='inline pr-1'>
                                <a href='#'>{rating}</a></li><li className='inline pr-1'>{length} mins</li></ul>
                        <h2 className='pb-3'>{actors}</h2>
                        <p className='text-sm pb-5'>{plot}</p>
                    </article>
                    <Link to={buttonSettings.link}>
                        <button className='custom-button'>{buttonSettings.text}</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MoviePanel;