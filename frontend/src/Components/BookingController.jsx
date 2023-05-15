import React, { useState, createContext } from 'react';
import Gallery from './Gallery';
import TicketOffice from './TicketOffice';

export const FilmContext = createContext();
export const BookingController = () => {

    const [chosenFilmId, setChosenFilmId] = useState(null)


    return (
        <div>
            <FilmContext.Provider value={{chosenFilmId, setChosenFilmId}}>
                {chosenFilmId ? <TicketOffice/> : <Gallery/>} 
            </FilmContext.Provider>
        </div>
    )
}
