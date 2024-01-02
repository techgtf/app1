import React, {} from 'react'
import Footer from "../components/footer/Footer";
import {Link} from 'react-router-dom';

const CaseStudy = () => {
    return (
        <React.Fragment>
            <section class="case-st-page">
                <div class="c-s-box">
                <h6>Understand our successful projects and methods to tackle a challenge</h6>
                <hr></hr>
                <h1>Case Studies</h1>
                <p>See how we’re driving digital performance for the industry’s leading advertisers.</p>
                </div>
                <div class="case-st">
                <div class="box-emp">
                        <div class="img-emp">
                    <img src="assets/img/port-folio/p1.jpg" alt="empl-img" width="100%" />
                    </div>
                        <div class="emp-content">
                            <h6><span>Real Estate</span></h6>
                            <h4>ATS Pious Orchards</h4>
                            <hr></hr>
                            <p>Nowadays ready to move in homes are high in demand and that is the reason it is exceptionally hard to discover buyers for Under Construction Projects.Pious Orchards, despite being a product of one of the biggest developers of the Real Estate Industry, ATS Homekraft, faced challenges when it came to looking for potential buyers as it was the last located project of the sector 150. Another major challenge was that the launch of the project was planned in post-covid times with bigger sizes of the flat i.e. 2350 sqft & 3200 Sqft .And the target was to assign 150 + Units in 45 Days.</p>
                            <Link to="/ats-pious-orchards">Read Case Study..</Link>
                        </div>
                    </div>

                    <div class="box-emp">
                        <div class="img-emp">
                        <img src="assets/img/port-folio/p1.jpg" alt="empl-img" width="100%" />
                    </div>
                        <div class="emp-content">
                        <h6><span>Real Estate</span></h6>
                        <h4>ATS Floral Pathways</h4>
                        <hr></hr>
                        <p>One major challenge was that ready to move in homes are high in demand and that is the reason it is exceptionally hard to discover buyers for Under Construction Projects. Despite the fact that ATSwebsite was all around outlined and sorted out, yet it was hard to discover offers and arrangements so it requires an alternate point of arrival for this task which would be able to co-relate with advertising creative which was live in Newspaper and Outdoor media and there should be all offers and deals with an instant query form and contact number on the landing page. Another challenge was that the price of this project was costlier as compared to other projects in that area. It was difficult to pick an alternate approach or stage such that the final product would work much better for the client.</p>
                        <Link to="/ats-floral-pathways">Read Case Study..</Link> 
                        </div>
                    </div>


                    <div class="box-emp">
                        <div class="img-emp">
                        <img src="assets/img/port-folio/p1.jpg" alt="empl-img" width="100%" />
                    </div>
                        <div class="emp-content">
                        <h6><span>Real Estate</span></h6>
                        <h4>M3M Pre-leased Commercial Property</h4>
                        <hr></hr>
                        <p>Despite being a big name in the Real Estate Industry, one of the biggest commercial projects M3M Corner walk, a pre-leased commercial property of M3M India Ltd. faced few challenges.</p>
                        <p>The ticket size of the property was very high so finding the right query was a difficult task. Moreover it was located in an isolated location on golf course extension which was also a challenge. The project was old and under construction for a long time, so it had very less search volume as the buyers were hesitant to invest on it. In total it was difficult to pick an approach which would generate results for the client.</p>
                        <Link to="/m3m-commercial-property">Read Case Study..</Link>
                        </div>
                    </div>


                    <div class="box-emp">
                        <div class="img-emp">
                        <img src="assets/img/port-folio/p1.jpg" alt="empl-img" width="100%" />
                    </div>
                        <div class="emp-content">
                        <h6><span>Real Estate</span></h6>
                        <h4>Omaxe Chandni Chowk</h4>
                        <hr></hr>
                        <p>In the heart of old Delhi, Chandni Chowk is one of the oldest and busiest markets in India. Being an old market using traditional approaches for sell, buy or rent property it was a challenge to pick an approach for generating results for the client. Big size of the property and even bigger ticket size was also a challenge.</p>
                        <Link to="/omaxe-chandni-chowk">Read Case Study..</Link>
                        </div>
                    </div>

                    <div class="box-emp">
                        <div class="img-emp">
                        <img src="assets/img/port-folio/p1.jpg" alt="empl-img" width="100%" />
                    </div>
                        <div class="emp-content">
                        <h6><span>Real Estate</span></h6>
                        <h4>Supertech Limited</h4>
                        <hr></hr>
                        <p>Nowadays ready to move in homes are high in demand and that is the reason it is exceptionally hard to discover buyers for Under Construction Projects.</p>
                        <Link to="/supertech-romano">Read Case Study..</Link>
                        </div>
                    </div>


                    <div class="box-emp">
                        <div class="img-emp">
                        <img src="assets/img/port-folio/p1.jpg" alt="empl-img" width="100%" />
                    </div>
                        <div class="emp-content">
                        <h6><span>Real Estate</span></h6>
                        <h4>Propfrill</h4>
                        <hr></hr>
                        <p>Being a property portal it was very important to generate queries in effective cost as well as huge in numbers. And to add brokers to propfrill to advertise on it.</p>
                        <Link to="/propfrill">Read Case Study..</Link>
                        </div>
                    </div>

                    
                </div>
    
            </section>

            <Footer/>
        </React.Fragment>
    );
}



export default CaseStudy