import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderImages } from "./SliderImages";

const AppBanner = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
    if (!Array.isArray(slides) || slides.length <= 0) return null;

    return (
        <section className="AppBanner">
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {SliderImages?.map((data, index) => {
                return (
                    <figure className={index === current ? 'sliderimg active' : 'sliderimg'} key={index}>
                        <img src={`${data.image}`} alt={`${data.image}`} />
                    </figure>
                )
            })}
        </section>
    )
}
export default AppBanner;