import React, {} from 'react'
import Footer from "../components/footer/Footer";
import {Link} from 'react-router-dom';

const WhatWeDo = () => {
    return (
        <React.Fragment>
            <section class="what-wedo-page">
                <div class="what-wedo-page-cont">
                <h6>Defined for Clarity! We Do Exactly What We Say!</h6>
                <hr></hr>
                <h1>Our Work Process</h1>
                <p>No matter what your goals are: leads, subscribers, or followers, GTF Technologies is committed to meeting and exceeding them. Following your specific requirements, we devise a personalized business strategy to ensure the best results.
Whatever your reason for reaching out to us, we adhere to a set process to nail down your goals.</p>
            </div>
            <hr></hr>
            <div class="box-what-wedo">
                <div class="inner-box">
                    <div class="content-what-we-do">
                    <img src="assets/img/services/WEBSITE DESIGN & DEVELOPEMENT.png" alt="work-img" width="100%" />
                    <h4 class="title-block mb-20">WEBSITE DESIGN & DEVELOPEMENT</h4>
                    <p class="mt-15 dsn-auto">No matter what your goals are: leads, subscribers, or followers, GTF Technologies is committed to meeting and exceeding them. Following your specific requirements, we devise a personalized business strategy to ensure the best results.</p>
                    <div class="arrow-g">
                    <Link to="/UnderArmour"><img src="assets/img/work-culture/left-arrow.png" alt="work-img" /></Link>
                    </div>
                    </div>
                </div>

                <div class="inner-box">
                    <div class="content-what-we-do">
                    <img src="assets/img/services/ANNUAL MAINTENANCE OF WEBSITE.png" alt="work-img" width="100%" />
                    <h4 class="title-block mb-20">ANNUAL MAINTENANCE OF WEBSITE</h4>
                    <p class="mt-15 dsn-auto">Recognized by Google among its top 30 partners in India, GTF Technologies commits to maximizing your return on investment with its PPC (Pay Per Click) Services. We have proficient Google-certified AdWords wizards in our team to sales.</p>
                    </div>
                </div>

                <div class="inner-box">
                    <div class="content-what-we-do">
                    <img src="assets/img/services/SEARCH ENGINE OPTIMIZATION.png" alt="work-img" width="100%" />
                    <h4 class="title-block mb-20">SEARCH ENGINE OPTIMIZATION</h4>
                    <p class="mt-15 dsn-auto">Positioning your website in the first place on Google is our commitment. We always put our best foot forward to accomplish our goals. We invest in the best search engine optimizers, content developers, and analysts, and they all work as a team to deliver the best results.</p>
                    </div>
                </div>

                <div class="inner-box">
                    <div class="content-what-we-do">
                    <img src="assets/img/services/PAID ADS.png" alt="work-img" width="100%" />
                    <h4 class="title-block mb-20">PAID ADS</h4>
                    <p class="mt-15 dsn-auto">A well-recognized name in the world of social media optimization, GTF Technologies commits tobuilding you a brand on social media with its customized services. The company has a specialized team of social media marketers, copywriters, and run them flawlessly to deliver optimal results Google Ads Campaign Management Services</p>
                    </div>
                </div>


                <div class="inner-box">
                    <div class="content-what-we-do">
                    <img src="assets/img/services/DISPLAY MARKETING.png" alt="work-img" width="100%" />
                    <h4 class="title-block mb-20">DISPLAY MARKETING</h4>
                    <p class="mt-15 dsn-auto">GTF Technologies is committed to persuading your target audience through a thoroughly planned display advertising campaign. Our copywriters and graphic designers collaboratively create influencing display ads, and our expert paid marketers promote them to your target audience through retargeting, contextual targeting, and site targeting.</p>
                    </div>
                </div>


                <div class="inner-box">
                    <div class="content-what-we-do">
                    <img src="assets/img/services/YOUTUBE MARKETING.png" alt="work-img" width="100%" />
                    <h4 class="title-block mb-20">YOUTUBE MARKETING</h4>
                    <p class="mt-15 dsn-auto">Your website is your digital face. Visuals, content, and appearance are its features. Their combined effect creates a magnetic impact on website visitors. The same impact that a killer smile does! At GTF Technologies, we devise a bespoke YouTube marketing plan for your business based on our detailed analysis of your target audience, your competition active on YouTube, and your budget.</p>
                    </div>
                </div>

                <div class="inner-box">
                    <div class="content-what-we-do">
                    <img src="assets/img/services/SOCIAL MEDIA OPTIMIZATION.png" alt="work-img" width="100%" />
                    <h4 class="title-block mb-20">SOCIAL MEDIA OPTIMIZATION</h4>
                    <p class="mt-15 dsn-auto">GTF Technologies is a prestigious website development company in India with more than 12 years’ experience in the industry. We specialize in developing conversion-friendly websites. With our more than decade’s practical knowledge.</p>
                    </div>
                </div>
                <div class="inner-box">
                    <div class="content-what-we-do">
                    <img src="assets/img/services/SOCIAL MEDIA MARKETING.png" alt="work-img" width="100%" />
                    <h4 class="title-block mb-20">SOCIAL MEDIA MARKETING</h4>
                    <p class="mt-15 dsn-auto">GTF Technologies is a team of crackerjack website maintenance engineers. We research websites to dig out their weak areas and convert them into strong and favorable ones. Our service protects your website from malware, helps your websiteto maximize your social media presence.</p>
                    </div>
                </div>
                <div class="inner-box">
                    <div class="content-what-we-do">
                    <img src="assets/img/services/ONLINE REPUTATION MANAGEMENT MARKETING.png" alt="work-img" width="100%" />
                    <h4 class="title-block mb-20">ONLINE REPUTATION MANAGEMENT MARKETING</h4>
                    <p class="mt-15 dsn-auto">Multiply your sales with our custom YouTube marketing services. With more than 2 billion users across the world, YouTube is the second most popular search engine after Google and the first most used video platform.</p>
                    </div>
                </div>
                <div class="inner-box">
                    <div class="content-what-we-do">
                    <img src="assets/img/services/TABOOLA MARKETING.png" alt="work-img" width="100%" />
                    <h4 class="title-block mb-20">TABOOLA MARKETING</h4>
                    <p class="mt-15 dsn-auto">Grow your sales to the next level with our customized Taboola marketing services. Specializing in Taboola, one of the largest AI technology-based discovery platforms on the web, we leverage this platform in a customized way to generate new business opportunities for your organization</p>
                    </div>
                </div>
            </div>
    
            </section>

            <Footer/>
        </React.Fragment>
    );
}



export default WhatWeDo