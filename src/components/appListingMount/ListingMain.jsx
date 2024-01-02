import { SliderImages } from "../SliderImages";
import AppHeader from "../appHeader";
import Slider from "../commonSlider";
import HndlPrintMovies from "./printMovies";


const ListingMain = () => {
    return (
        <>
            <AppHeader />
            <Slider slides={SliderImages} />
            <h1>Listing Page</h1>
            <HndlPrintMovies />
        </>
    )
}

export default ListingMain;