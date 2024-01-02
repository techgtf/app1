import React from 'react';
import {Container} from "react-bootstrap";

import HeaderNormalTow from "../components/header/HeaderNormalTow";
import PortfolioClassic from "../components/portfolio/portfolioClassic";
import NextPageContent from "../components/next/NextPageContent";
import Footer from "../components/footer/Footer";
import {Helmet} from "react-helmet";

function Work(props) {
    return (
        <React.Fragment>
            <Helmet>
                <title>GTF Technologies - Portfolio & Agency React Template </title>
            </Helmet>
            <HeaderNormalTow description="Defined for Clarity! We Do Exactly What We Say!">Our Work Process</HeaderNormalTow>
            
            <Container>
                
                <PortfolioClassic col={2}
                                  colGap={50}
                                  colGapTablet={30}
                                  rowGap={50}
                                  rowGapTablet={30}
                />
            </Container>

            <NextPageContent className="section-margin"/>
            <Footer/>


        </React.Fragment>
    );
}

export default Work;