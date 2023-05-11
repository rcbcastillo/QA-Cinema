import React from 'react';

const Gallery = () => {

    return (
        <div className="grid grid-cols-6 gap-4 items-center justify-between">
            <div className="col-start-1 col-end-3 ...">
                <img src="https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg" 
                alt=""></img>
            </div>
            <div className="col-start-4 col-end-6 ...">
                <img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" 
                alt = ""></img></div>
            <div className="col-start-1 col-end-3 ...">
                <img src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg" 
                alt=""></img>
            </div>        
            <div class="col-start-4 col-end-6 ...">
                <img src="https://m.media-amazon.com/images/M/MV5BMjFmZGI2YTEtYmJhMS00YTE5LWJjNjAtNDI5OGY5ZDhmNTRlXkEyXkFqcGdeQXVyODAwMTU1MTE@._V1_SX300.jpg" 
                alt=""></img>
            </div>
            <div className="col-start-1 col-end-3 ...">
                <img src="https://m.media-amazon.com/images/M/MV5BZWU5YmRhODYtM2Y2Ny00NTUzLWEwZGUtYzYyMjQwZmIwYTgxXkEyXkFqcGdeQXVyMTczNjQwOTY@._V1_SX300.jpg" 
                alt=""></img>
            </div>
            <div className="col-start-4 col-end-6 ...">
            <img src="https://m.media-amazon.com/images/M/MV5BYmEwNjNlZTUtNzkwMS00ZTlhLTkyY2MtMjM2MzlmODQyZGVhXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg" 
                alt=""></img>
            </div>
        </div>
    );
}

export default Gallery;