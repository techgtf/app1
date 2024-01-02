import React from 'react';

import {Container} from "react-bootstrap";
import FadeUpTrigger from "../animation/FadeUpTrigger";

import HeaderNormal from "../components/header/HeaderNormal";
import BoxRight from "../components/box-right/BoxRight";
import TitleSection from "../components/heading/TitleSection";
import ServiceTow from "../components/services/ServiceTow";
import Team from "../components/team/Team";
import BrandClient from "../components/brand-client/BrandClient";
import NextPageContent from "../components/next/NextPageContent";
import Footer from "../components/footer/Footer";
import TestimonialTow from "../components/testimonial/TestimonialTow";
import {Helmet} from "react-helmet";


const headerContent = {
    title: 'About Us',
    description: `As a company, we draw in and build up our business's best ability, share information, and give the best fundamental tools and resources to stay aware of today's fast-changing technology. We strive to continuously be the best we can be in everything we do and deliver quality work for our clients. We are trusted by our clients to convey achievements. The planning we suggest is fact-based, consultative, and strategic. We execute battles with inventiveness, creativity, and ability, with the most extreme trust worthiness. We believe in becoming an extension of the client's team.`
}

function About() {

    return (
        <React.Fragment>
            <Helmet>
                <title>GTF Technologies - About Us </title>
            </Helmet>

            {/*Start Header*/}
            <HeaderNormal className="background-section" description={headerContent.description}>
                {headerContent.title}
            </HeaderNormal>

            {/*Start Box Right Info*/}
            <BoxRight className="mb-section text-center" src="/assets/img/pexels.jpg"
                      parallaxFrom={{scale: 1.2}} parallax={{scale: 1}} overlay={4}
            >
                <FadeUpTrigger>
                    <h3>We Visualize, <br/> Execute & Inspect Your Business.</h3>
                    <p className="mt-30 m-w750 dsn-auto">
                    GTF technologies incept from ‘Gurukul the foundation’ is a performance-driven media planning company that serves B2B and B2C brands. We assist businesses to make more money through information-driven online publicizing and conversion-optimized landing pages.
                    </p>
                </FadeUpTrigger>
            </BoxRight>
            {/*End Box Right Info*/}

            {/*Start Service Section*/}
            <Container className="section-margin">
                <TitleSection description="">
                
                </TitleSection>
                <ServiceTow col={1} colMobile={1}/>
            </Container>
            {/*End Service Section*/}


            {/*Start Team*/}
            <section className="section-margin background-section section-padding">
                <Container className="dsn-right-container">
                    <TitleSection description="our team">
                        The best team ever!
                    </TitleSection>
                    <Team loop grabCursor/>
                </Container>
            </section>
            {/*End Team*/}

            {/*Start Service Section*/}
            <Container className="section-margin">
                <TitleSection description="Client see">
                    Feedback from our clients.
                </TitleSection>
                <TestimonialTow grabCursor loop/>
            </Container>
            {/*End Service Section*/}

            {/*Start Brand*/}
            <Container className="section-margin">
                <TitleSection description="Our clients">
                    Your success, our <br/> reputation
                </TitleSection>
                <BrandClient
                    col={3}
                    colTablet={2}
                    colGap={2}
                    rowGap={2}
                />
            </Container>
            {/*End Brand*/}

            <NextPageContent className="section-margin"/>
            <Footer/>


        </React.Fragment>
    );
}

export default About;