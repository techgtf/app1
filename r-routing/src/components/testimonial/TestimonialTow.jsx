import React from 'react'
import './style.scss'
import TestimonialItem from './TestimonialItem';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import {SwiperOptions} from "swiper";
import ControlNav from "../slider-portfolio/ControlNav";
import {dsnCN} from "../../hooks/helper";

const TestimonialDetails = [
    {
        authorName: "Sanchit Bhutani",
        label: "Bhutani Groups",
        description: `GTF Technologies did a great job with the multiple aspects of online marketing such as Landing Pages, PPC, SMM, and SMO for several of our projects. Through their efforts, our company's work has been at the forefront of the latest internet development and advertising methods.`
    },
    {
        authorName: "Yuvraj Singh",
        label: "Homekraft",
        description: `GTF Technologies is a great company. They Crafted our website and managed all of our digital marketing needs including SEO, Website Management, social media optimization, SMM, PPC, and Landing pages. Very organized, Loved how GTF Technologies developed a marketing calendar that showed everything it had planned. They increased our performance by 25% .they will continue to work with us.`
    },
]


function TestimonialTow({className, ...restProps}: SwiperOptions) {
    return (

        <section className={dsnCN('dsn-testimonial testimonial-tow', className)}>
            <div className="testimonial-inner">
                <div className='content-box'>
                    <Swiper slidesPerView={1} {...restProps} >
                        {TestimonialDetails.map(
                            (item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <TestimonialItem
                                            authorName={item.authorName} label={item.label}
                                            description={item.description}/>
                                    </SwiperSlide>
                                );
                            }
                        )}
                        <ControlNav/>

                    </Swiper>
                </div>
            </div>
        </section>

    )
}


export default TestimonialTow;