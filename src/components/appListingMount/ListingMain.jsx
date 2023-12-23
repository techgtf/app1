import { SliderImages } from "../SliderImages";
import Slider from "../commonSlider";
import HndlPrintMovies from "./printMovies";


const ListingMain = () => {
    return (
        <>
            <Slider slides={SliderImages} />
            <h1>Listing Page</h1>
            <HndlPrintMovies />
        </>
    )
}

export default ListingMain;