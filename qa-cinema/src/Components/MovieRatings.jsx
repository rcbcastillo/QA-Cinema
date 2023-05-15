import React from 'react';

// const ratingsImagePath = '/resources/ratingImages/';
import universal from '../assets/ratingImages/Universal.png';
import parental from '../assets/ratingImages/ParentalGuidance.png';


const MovieRatings = () => {
    return (
        <div className='mx-4 my-6'>
            <h2>UK Film Classifications (Age Ratings)</h2>
            <table className='custom-table'>
                <thead>
                    <tr>
                        <th className='border-2 border-solid border-pearl-aqua p-2 text-center'>Symbol</th>
                        <th className='custom-table-th'>Rating</th>
                        <th className='custom-table-th'>Description</th>
                        <th className='custom-table-th'>Guidance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='custom-table-td'>
                        <img src={universal}
                            alt="Universal, letter U symbol"></img></td>
                        <td className='custom-table-td'>Universal</td>
                        <td className='custom-table-td'><p>Suitable for all. A U film should be suitable 
                            for audiences aged four years and over.</p>
                        </td>
                        <td className='custom-table-td'><p>May contain infrequent very mild language. May contain very mild 
                                sex references and mild violence, if justified by the context.</p></td>
                    </tr>
                    <tr>
                        <td className='custom-table-td'>
                            <img src={parental}
                            alt="Parental Guidance, PG letters symbol"></img></td>
                        <td className='custom-table-td'>Parental Guidance</td>
                        <td className='custom-table-td'><p>General viewing, but some scenes may be unsuitable
                             for young children. A PG film should not unsettle a child aged around eight or older.</p></td>

                        <td className='custom-table-td'><p>May contain mild language (frequent/aggressive use may result in the work being passed
                            at a higher category) or sex/drug references. May contain moderate violence if justified by context 
                            (e.g. fantasy). Unaccompanied children of any age may watch,
                            but parents are advised to consider whether the content may upset younger, 
                            or more sensitive, children.</p></td>
                    </tr>
                    <tr>
                        <td className='custom-table-td'>
                            <img src={parental}
                            alt="Parental Guidance, PG letters symbol"></img></td>
                        <td className='custom-table-td'>12A</td>
                        <td><p>Cinema release suitable for those aged 12 and over. No one younger than 12 may see a 
                                12A film in a cinema unless accompanied by an adult.</p></td>

                        <td className='custom-table-td'><p>May contain mild language (frequent/aggressive use may result in the work being passed
                            at a higher category) or sex/drug references. May contain moderate violence if justified by context 
                            (e.g. fantasy). Unaccompanied children of any age may watch,
                            but parents are advised to consider whether the content may upset younger, 
                            or more sensitive, children.</p></td>
                    </tr>
                </tbody>
            </table>
            <div><p></p><a href='https://www.bbfc.co.uk/'>BBFC guide</a></div>
        </div>
    )
}

export default MovieRatings;