import React from 'react'
import './style.scss'


import { Swiper , SwiperSlide } from 'swiper/react';

import 'swiper/css';
import BlogItem from "./BlogItem";
import {Pagination , SwiperOptions} from "swiper";



const BlogDetails = [
    {
        title: "GTF Technologies has been named a 2022 Google International Growth Partner",
        // category: ["Photography" , "Brand"],
        category: "Dec/02/2022",
        img : "/assets/img/blog/1.jpg",
        description: "GTF Technologies has been named a 2022 Google International Growth Partner. Delhi NCR -based digital agency GTF Technologies",
    },
    {
        title: "Google Ads Search Terms Report",
        category: "Nov/16/2019",
        img : "/assets/img/blog/2.jpg",
        description: "One of the main reports that can be helpful for your Google Ads search campaigns is the Search Terms Report. You can utilize this report to see the",
    },
    {
        title: "How to increase your website traffic",
        category: "Dec/12/2017",
        img : "/assets/img/blog/3.jpg",
        description: "There are a variety of methods you can use to increase your website traffic. The main challenge you will have is to focus on...",

    },
]

const BlogSwiper = ({desktop, mobile, tablet, ...restProps} :SwiperOptions) => {

    return (
        <Swiper
            modules={[Pagination]}
            pagination={{clickable: true, el: '.swiper-pagination'}}
            spaceBetween={30} slidesPerView={1}
            breakpoints={{
                992: desktop,
                768: tablet,
                576: mobile
            }}
            {...restProps}
        >
        {
            BlogDetails.map((item, index) =>
              <SwiperSlide key={index}>
                  <BlogItem
                      src={item.img} title={item.title} category={item.category} description={item.description} to="/blog-details" />
              </SwiperSlide>)
        }
            <div className="swiper-pagination"/>
      </Swiper>

    );
}

BlogSwiper.defaultProps = {
    desktop: {
        slidesPerView: 2.5
    },
    tablet: {
        slidesPerView: 1.5
    },
    mobile: {
        slidesPerView: 1.5
    }
}

export default BlogSwiper