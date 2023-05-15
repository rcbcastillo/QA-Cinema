import React, { useState, useContext } from 'react';
import { FilmContext } from './BookingController';

const TicketOffice = () => {

    // TODO - use the chosenFilmId to fetch screening data from DB
    const {chosenFilmId, setChosenFilmId } = useContext(FilmContext);
    // For testing
    console.log('Chosen film ID = ' + chosenFilmId);

    // TODO: Get data from DB
    const jsonDataArray = [
        {
            'id': '3434',
            'screen-num': 1,
            'date': '12-06-2023',
            'time': '12:00',
        },
    ];

    let jsonObj = jsonDataArray[0];

    // TODO: Pass this in from BookingController as context
    const [chosenScreenId, setChosenScreenId] = useState(null);

    
    // TODO: Get the screenings from the DB based on filmId
    return (
        <div className='w-full h-full'>
        {/* TODO: Abstract this out to a component 
        map the array and instantiate one per array entry*/}
            <div className='flex p-4 m-8'>
                <label >
                    <input 
                    key={jsonObj.id} //TODO set this to be screeningId
                    type='radio'
                    className='px-2'>
                    </input>
                    {jsonDataArray[0].id}
                </label>
                <button className='border-2 m-4' onClick={() => setChosenFilmId(null)}>Close</button>
            </div>
        </div>
    );
}

export default TicketOffice
