import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FilmContext } from './BookingController';

const MoviePanel = ({jsonObj, buttonSettings}) => {

    const { chosenFilmId, setChosenFilmId } = useContext(FilmContext);
    const { id, imgSrc, title, rating, year, length, actors, plot } = jsonObj;

    return (
        //  Create and return a panel for one movie
        <>
            {/* Transform the image div to scale up poster on hover */}
            <div className='inner-panel-img-div'>
                <img 
                src={imgSrc}
                alt={`movie poster for ${title}`}></img>
            </div>
            {/* Note: '...' class doesn't seem to work in index.css 
                so it's not been extracted as custom class*/}
            <div className='col-start-2 col-end-6 ...'>
                <div className='py-8 ml-6'>
                    <article>
                        <h1 className='text-4xl pb-2'>{title}</h1>
                        {/* Rating <li> links to classification page */}
                        <ul className='text-sm pb-2'><li className='inline pr-1'>{year}</li><li className='inline pr-1'>
                            <Link to='/classifications'>{rating}</Link></li><li className='inline pr-1'>{length} mins</li></ul>
                        <h2 className='pb-3'>{actors}</h2>
                        <p className='text-sm pb-5'>{plot}</p>
                    </article>
                    <Link to={buttonSettings.link}>
                        <button className='custom-button' onClick={() => setChosenFilmId(id)}>
                                    {buttonSettings.text}</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MoviePanel;