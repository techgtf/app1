import React, { } from 'react'
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// If you want you can use SCSS instead of css
// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';
import "lightgallery/css/lg-video.css";
import lgVideo from "lightgallery/plugins/video";

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';

import Footer from "../components/footer/Footer";


import { Helmet } from "react-helmet";
import '../button-lightboxgallery.css';

const LifeAtGtf = () => {

    const onInit = () => {
        console.log('lightGallery has been initialized');
    };


    return (
        <React.Fragment>
            <section className="front-page-all">
                <div className="life-port">
                    <div class="left-lag">
                        <h1>Life @ GTF Technologies</h1>
                        <p>Work with fun is our work ethics that keeps attrition rate negligible.</p>
                    </div>

                    <div class="right-lag">
                        
                            <select class="form-controllife" id="sel1">
                                <option class="event-life">Diwali Celebration</option>
                                <option class="event-life">Employee Of The Month</option>
                                <option class="event-life">Work Anniversary</option>
                                <option class="event-life">Holi Celebration</option>
                            </select>
                       
                    </div>
                </div>

                <div className="life-at-gtf-page">
                    <div className="life-at-gtf-Box">



                        <div class="box-over">
                            <div class="box-inner-light">
                                <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgVideo]} >
                                    <a href="assets/img/life-at-gtf/1.jpg">
                                        <img src="assets/img/life-at-gtf/1.jpg" alt="empl-img" width="100%"></img>
                                    </a>

                                    <a href="assets/img/life-at-gtf/2.jpg">
                                        <img src="assets/img/life-at-gtf/2.jpg" alt="empl-img" width="100%"></img>
                                    </a>

                                    <a
                                        data-lg-size="1280-720"
                                        data-video='{"source": [{"src":"assets/img/work-culture/tr.mp4", "type":"video/mp4"}], "attributes": {"preload": false, "autoplay":true, "playsinline": true, "controls": true}}'
                                        // data-src="//https://www.youtube.com/watch?v=1MdwpYepuYU"
                                        data-poster="assets/img/life-at-gtf/thumbnail.jpg"
                                        data-sub-html="<h4>Visual Soundscapes - Mountains | Planet Earth II | BBC America</h4><p>On the heels of Planet Earth II's record-breaking Emmy nominations, BBC America presents stunning visual soundscapes from the series' amazing habitats.</p>"
                                    >
                                        <img
                                            width="100%"
                                            height="100"
                                            class="img-responsive"
                                            src="assets/img/life-at-gtf/thumbnail.jpg"
                                        />
                                    </a>

                                    <a href="assets/img/life-at-gtf/3.jpg">
                                        <img src="assets/img/life-at-gtf/3.jpg" alt="empl-img" width="100%"></img>
                                    </a>

                                    <a href="assets/img/life-at-gtf/4.jpg">
                                        <img src="assets/img/life-at-gtf/4.jpg" alt="empl-img" width="100%"></img>
                                    </a>

                                    <a href="assets/img/life-at-gtf/5.jpg">
                                        <img src="assets/img/life-at-gtf/5.jpg" alt="empl-img" width="100%"></img>
                                    </a>

                                    <a href="assets/img/life-at-gtf/6.jpg">
                                        <img src="assets/img/life-at-gtf/6.jpg" alt="empl-img" width="100%"></img>
                                    </a>

                                    <a href="assets/img/life-at-gtf/7.jpg">
                                        <img src="assets/img/life-at-gtf/7.jpg" alt="empl-img" width="100%"></img>
                                    </a>
                                </LightGallery>
                            </div>
                        </div>{/* life-at-gtf-box */}

                    </div>{/* gallery-box */}

                </div>{/* life-at-gtf-page */}





            </section>



            <script src="/path/to/resource.js" type="text/javascript" />

            <Footer />
        </React.Fragment>
    );
}


export default LifeAtGtf