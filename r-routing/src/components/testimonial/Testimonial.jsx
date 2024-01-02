import React from 'react'
import './style.scss'
import TestimonialItem from './TestimonialItem';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import MoveTrigger from "../../animation/MoveTrigger";
import {Pagination, SwiperOptions} from "swiper";
import {dsnCN} from "../../hooks/helper";


const TestimonialDetails = [
    {
        name: "Sanchit Bhutani",
        label: "Bhutani Groups",
        src: "assets/img/avatar/1.jpg",
        description: `"GTF Technologies did a great job with the multiple aspects of online marketing such as Landing Pages, PPC, SMM, and SMO for several of our projects. Through their efforts, our company's work has been at the forefront of the latest internet development and advertising methods."`
    },
    {
        name: "Yuvraj Singh",
        label: "Homekraft",
        src: "assets/img/avatar/2.jpg",
        description: `"GTF Technologies is a great company. They Crafted our website and managed all of our digital marketing needs including SEO, Website Management, social media optimization, SMM, PPC, and Landing pages. Very organized, Loved how GTF Technologies developed a marketing calendar that showed everything it had planned. They increased our performance by 25% .they will continue to work with us."`
    },
    {
        name: "Vivek Pandey",
        label: "ATS Green",
        src: "assets/img/avatar/3.jpg",
        description: `"GTF Technologies is great and absolutely knows what they are doing in the realm of digital media. They Created our landing pages and also did PPC, SMO, and SMM. Anyone who wants to work with someone who knows this stuff inside and out should contact them definitely."`
    },
    {
        name: "Varun Kapoor",
        label: "Eldeco Group",
        src: "assets/img/avatar/4.jpg",
        description: `"GTF technologies were phenomenal in handling all of our social channels! The audience that we were able to build and the business that we’ve generated stems from those efforts. Great interaction, graphics, PPC, SMM, SMO, Landing Pages, and overall management of the sites. I would definitely recommend them to current and future social world users."`
    },

    {
        name: "Rajkamal",
        label: "Supertech Limited",
        src: "assets/img/avatar/4.jpg",
        description: `"GTF Technologies is a full-service marketing company. They help us grow our business through Facebook, Instagram, and other social media platforms as well as PPC campaigns. GTF Technologies is always willing to go above and beyond for its clients."`
    },

    {
        name: "Sachin Agarwal",
        label: "Laureate Boulevard",
        src: "assets/img/avatar/4.jpg",
        description: `"For the last few years, we had been informally exploring and establishing a brand. I am very fortunate to have met with GTF Technologies for my initial consultation. Their extensive knowledge of website development, social media, landing pages, PPC, and other online services were very helpful in getting me on the right track. I look forward to working with GTF Technologies in the future as I progress with my endeavors."`
    },

]


function Testimonial({className, title, ...restProps}: SwiperOptions) {
    return (

        <section className={dsnCN('dsn-testimonial background-section testimonial-one', className)}>
            <div className="testimonial-inner ">
                <div className="title-box">
                    {title &&
                    <MoveTrigger from={{y: 0, opacity: 0}} to={{y: -60, opacity: 1}} mobile={false}>
                        {(ref) => <h2 className='title-section p-relative z-index-1' ref={ref}>
                            {title}
                        </h2>}
                    </MoveTrigger>
                    }

                </div>
                <div className='content-box'>
                    <Swiper
                        modules={[Pagination]}
                        pagination={{clickable: true, el: '.swiper-pagination'}}
                        slidesPerView={1}
                        {...restProps}
                    >
                        {TestimonialDetails.map(
                            (item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <TestimonialItem
                                            src={item.src} authorName={item.name} label={item.label}
                                            description={item.description}/>
                                    </SwiperSlide>

                                );
                            }
                        )}

                        <div className="swiper-pagination"/>

                    </Swiper>
                </div>

            </div>
        </section>

    )
}


export default Testimonial;