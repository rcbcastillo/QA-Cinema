import React from 'react';

const Gallery = () => {

    return (
        // <div className="grid grid-cols-6 gap-4 items-center justify-between">
        //     <div className="col-start-1 col-end-3 ...">
        //         <img src="https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg" 
        //         alt=""></img>
        //     </div>
        //     <div className="col-start-4 col-end-6 ...">
        //         <img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" 
        //         alt = ""></img></div>
        //     <div className="col-start-1 col-end-3 ...">
        //         <img src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg" 
        //         alt=""></img>
        //     </div>        
        //     <div class="col-start-4 col-end-6 ...">
        //         <img src="https://m.media-amazon.com/images/M/MV5BMjFmZGI2YTEtYmJhMS00YTE5LWJjNjAtNDI5OGY5ZDhmNTRlXkEyXkFqcGdeQXVyODAwMTU1MTE@._V1_SX300.jpg" 
        //         alt=""></img>
        //     </div>
        //     <div className="col-start-1 col-end-3 ...">
        //         <img src="https://m.media-amazon.com/images/M/MV5BZWU5YmRhODYtM2Y2Ny00NTUzLWEwZGUtYzYyMjQwZmIwYTgxXkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_SX300.jpg" 
        //         alt=""></img>
        //     </div>
        //     <div className="col-start-4 col-end-6 ...">
        //     <img src="https://m.media-amazon.com/images/M/MV5BYmEwNjNlZTUtNzkwMS00ZTlhLTkyY2MtMjM2MzlmODQyZGVhXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg" 
        //         alt=""></img>
        //     </div>
        // </div>

        <div className='px-4 mt-2'>
            <h4 className='px-2 p-3 mt-5'>Currently Showing</h4>
            <div className='grid grid-cols-6 border-t-2 border-pearl-aqua'>
                {/* Movie 'cards' go here */}
                {/* Transform the image to scale up on hover*/}
                    <div className='pt-3 col-start-1 col-span-1 hover:scale-125'>
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
            </div>
            <div className='py-3 border-b-2 border-pearl-aqua'>                
            </div>
                <h4 className='px-4 py-3 mt-5'>Coming soon!</h4>
                <div>
                    {/* More movie 'cards' here */}
                </div>
        </div>
    );
}

export default Gallery;