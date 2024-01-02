import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

import HeaderNormal from "../../components/header/HeaderNormal";
import PortfolioSwiper from "../../components/portfolio/PortfolioSwiper";
import TitleSection from "../../components/heading/TitleSection";
import ServiceOne from "../../components/services/ServiceOne";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import ButtonPopup from "../../components/button/button-popup/ButtonPopup";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import HeroSection from "../../components/hero-section/HeroSection";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import DsnGrid from "../../components/DsnGrid";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import NextPageContent from "../../components/next/NextPageContent";
import Footer from "../../components/footer/Footer";
import Team from "../../components/team/Team";
import {Helmet} from "react-helmet";


const heroContent = {
    title: "DIGITAL CREATIVE AGENCY",
    description: `We Bring Ideas To Life`,

}

function Demo2(props) {
    return (
        <>
            <Helmet>
                <title>Droow - Portfolio & Agency React Template </title>
            </Helmet>
            <HeaderNormal className="background-section" description={heroContent.description}>
                {heroContent.title}
            </HeaderNormal>

            {/*Start Portfolio Swiper*/}
            <Container className="under-header section-margin">
                <Row>
                    <Col lg={{span: 8, offset: 4}}>
                        <PortfolioSwiper desktop={{slidesPerView: 2.5}} grabCursor/>
                    </Col>
                </Row>
            </Container>
            {/*End Portfolio Swiper*/}


            {/*Start Box Info With Image*/}
            <BoxImageVertical src="/assets/img/project/project1/5.jpg" className="section-margin">
                <TitleCover>Droow</TitleCover>
                <FadeUpTrigger tag={DsnGrid} col={1} rowGap={30} rowGapTablet={20}>
                    <h2 className='title-section border-line-left'>
                        Time Tag Watch.
                    </h2>
                    <h6>
                        Sometimes, we need to check the time, wondering when our work or meeting will finish,
                        without getting caught by others.
                    </h6>
                    <p>
                        To avoid your boss’s staring eye, you should not roll your eyes to check the time. The Time
                        Tag Watch is a consummately appropriate for it. Those tags do the role of the hands of the
                        watch. By rotating the face of the watch not the hands, it gets harder to be damaged. It
                        provides you with experience to feel the time at the end of your finger without damaging
                        your watch.
                    </p>
                    <div className="button-box">
                        <ButtonDefault text="Learn More" icon={faAngleRight} href="#0"/>
                    </div>
                </FadeUpTrigger>
            </BoxImageVertical>
            {/*End  Box Info With Image*/}

            {/*Start Team*/}
            <Container className="section-margin dsn-right-container">
                <TitleSection description="our team">
                    The best team ever!
                </TitleSection>
                <Team loop grabCursor/>
            </Container>
            {/*End Team*/}

            <NextPageContent className="section-margin"/>
            <Footer/>

        </>
    );
}

export default Demo2;