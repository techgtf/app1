import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderImages } from "./SliderImages";
import Header from "./Header";
import { GrNext } from "react-icons/gr";

const AppBanner = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
    if (!Array.isArray(slides) || slides.length <= 0) return null;

    return (
        <section className="AppBanner">
            {SliderImages?.map((data, index) => {
                return (
                    <figure className={index === current ? 'sliderimg active' : 'sliderimg'} key={index}>
                        <img src={`${data.image}`} alt={`${data.image}`} />
                    </figure>
                )
            })}
            {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> */}
            <div className="BannerContent">
                <Header />
                <div className="Content_inner">
                    <h1 className="bannerHeading robotoFont">The biggest Indian hits. The best Indian stories.</h1>
                    <h1 className="bannerHeading robotoFont">All streaming here.</h1>
                    <h2 className="bannerSubHeading">Watch anywhere. Cancel anytime.</h2>
                    <div className="bannerInputBox">
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className="inputbox dflex itemsCenter contentCenter">
                            <input type="text" placeholder="Email Address" />
                            <button className="btn dflex itemsCenter">Get Started <GrNext /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AppBanner;

// The biggest Indian hits. The best Indian stories. All streaming here.
// Watch anywhere. Cancel anytime.
// Ready to watch? Enter your email to create or restart your membership.