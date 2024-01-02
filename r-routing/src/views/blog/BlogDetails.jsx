import React from 'react';
import HeaderDefault from "../../components/header/HeaderDefault";


import DsnGrid from "../../components/DsnGrid";
import {Container} from "react-bootstrap";

import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import ButtonPopup from "../../components/button/button-popup/ButtonPopup";
import CommentForm from "../../components/blog/CommentForm";
import NextPage from "../../components/next/NextPage";
import Footer from "../../components/footer/Footer";

function BlogDetails({props}) {


    const heroContent = {
        title: "GTF Technologies has been named a 2022 Google International Growth Partner",
        date: 'Dec/02/2022',
        // category: ['Uncategorized'],
        src: "/assets/img/blog/4.jpg"
    }

    return (
        <>

            <HeaderDefault heroContent={heroContent}
                           parallax={{yPercent: 30}}
                           overlay={4}
                           height="80vh"
            />

            <Container className="single-post post-content mb-section">
                <DsnGrid>

                    <p>
                    GTF Technologies has been named a 2022 Google International Growth Partner
                    </p>


                    <p>
                    Delhi NCR -based digital agency GTF Technologies, has achieved 2022 Google International Growth Partner status in the Google International Growth Agency Program.
                    </p>

                    <p>
                    GTF Technologies'   team of experts provides Digital Media Planning, Website Development, and Social Media Optimization for clients throughout the Worldwide. Explore the full range of offerings on their website.
                    </p>

                    <p>
                    It's great that we have been selected by Google for this badge. This small pat on the back will also encourage our team to continue to improve and learn from Google. Now we can proudly stand out in the queue when a client's requirement is for paid advertisements.GTF Technologies is part of a select group of Premier Partners in the Google International Growth Agency Program. This program is exclusively designed for advertising agencies. Its mission is to empower companies by providing them with innovative tools, resources, and support to help their clients to expand their business globally. With over 16 + years of expertise and more than 600+ satisfied clients across the world, we are experts in digital media marketing and boast of our value-added services that enable a business to interact effectively with the customer, leading to profitable ventures. 
                    </p>

                    {/*Start Box Info Center Content*/}
                    <div className="p-relative v-dark-head text-center">
                        <ParallaxImage src="/assets/img/blog/1.jpg" overlay={4}/>
                        <Container className="v-middle z-index-1">
                            <ButtonPopup href="http://media.w3.org/2010/05/sintel/trailer.mp4"/>
                        </Container>
                    </div>
                    {/*End Box Info Center Content*/}


                    <h4><strong>Explore the World</strong></h4>
                    <p>We understand the science of search engines and the psychology of human behaviour for which we claim ourselves as the masters of digital marketing services.</p>

                </DsnGrid>
                <CommentForm className="mt-section"/>

            </Container>

            <NextPage className="section-margin" text="Next Post" to="/blog-details">
            Google Ads Search Terms Report
            </NextPage>
            <Footer/>

        </>


    );
}

export default BlogDetails;