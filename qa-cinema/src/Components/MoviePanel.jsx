import React from 'react';

const MoviePanel = () => {

    return (
        //  Create and return a panel for one movie
        <>
            {/* Transform the image div to scale up poster on hover */}
            <div className='pt-3 col-start-1 col-span-1 hover:scale-150'>
                <img 
                src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
                alt='movie poster'></img>
            </div>
            <div className='col-start-2 col-end-6 ...'>
                <div className='py-8 ml-6'>
                    <article>
                        <h1 className='text-4xl pb-2'>Avengers Assemble</h1>
                        {/* TODO: make classification a link? */}
                        <ul className='text-sm pb-2'><li className='inline pr-1'>2012</li><li className='inline pr-1'><a href='#'>12A</a></li><li className='inline pr-1'>2h 23m</li></ul>
                        {/* <p className='text-xs pb-2'><span className='pe-2'>2012</span><span className='pe-2'>12A</span><span>2h 23m</span></p> */}
                        <h2 className='pb-3'>Starring - Robert Downey Jnr, Chris Evans</h2>
                        <p className='text-sm pb-5'>Earth's mightiest heroes must come together and learn to fight 
                            as a team if they are going to stop the 
                            mischievous Loki and his alien army from enslaving humanity.</p>
                    </article>
                    <button className='custom-button'>Book now!</button>
                </div>
            </div>
        </>
    )
}

export default MoviePanel;