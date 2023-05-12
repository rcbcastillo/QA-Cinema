import React from "react";
import { Carousel } from "@material-tailwind/react";

const images = [
  { 
    id:"1",
    src:"https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    alt:"1",
    link:"/about"
  }, 
  {
    id:"2",
    src:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg", 
    alt:"2",
    link:"/home"
  },
  {
    id:"3",
    src:"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    alt:"3",
    link:"/contact-form"
  }
]

// const makeLink = (id) => {
//   const linkArray = images.filter((item) => item.id === id);
//   const link = `/movie-id/${linkArray[0].id}`
//   return link;
// }

// console.log(makeLink())

const CarouselComp = () => {
  return (
    <Carousel infinite transition={{ duration: 1 }} className="w-80 h-120 rounded-xl shadow-md rounded">
      {images.map((image, index) => (
        <>
        <img
          key={index}
          src={image.src}
          alt={`img ${index + 1}`}
          className="h-full w-full object-cover cursor-pointer"
          onClick={()=> window.location.href = `/movie-id/${image.id}`}
        >
        </img>
        </>
      ))}
    </Carousel>
  );
};

export default CarouselComp;