import React, { useState, createContext } from 'react';
import Gallery from './Gallery';
import TicketOffice from './TicketOffice';

export const MovieContext = createContext();
export const BookingController = () => {

    const [chosenMovie, setChosenMovie] = useState(null)

    return (
        <div>
            <MovieContext.Provider value={{chosenMovie, setChosenMovie}}>
                {chosenMovie ? <TicketOffice/> : <Gallery/>} 
            </MovieContext.Provider>
        </div>
    )
}
