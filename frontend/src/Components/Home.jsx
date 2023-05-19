import CarouselComp from "./CarouselComp"

const Home = () =>{
    return (
        <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
            <div className="p-2"> <h1>Top Movies this week: </h1> </div>
            <div className="bg-transparent" style={{zIndex: 0}}>
            <CarouselComp />
            </div>
        </div>
    )
}
export default Home