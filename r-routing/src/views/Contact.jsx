import React from 'react';

import {Container} from "react-bootstrap";
import DsnGrid from "../components/DsnGrid";

import HeaderNormalTow from "../components/header/HeaderNormalTow";
import Footer from "../components/footer/Footer";
import Map, {optionDroowMap} from "../components/Map/Map";
import InfoBox from "../components/contact/InfoBox";
import ContactForm from "../components/contact/ContactForm";
import NextPage from "../components/next/NextPage";
import {Helmet} from "react-helmet";


const headerContent = {
    title: 'Contact',
    description: `Let's Talk`
}

function Contact(props) {

    const center = {lat: 28.583611366921925, lng: 77.31380678308712};

    return (
        <React.Fragment>

            <Helmet>
                <title>GTF Technologies - Contact Us </title>
            </Helmet>

            {/*Start Header*/}
            <HeaderNormalTow description={headerContent.description}>
                {headerContent.title}
            </HeaderNormalTow>

            {/*Start Map*/}
            <Map
                googleMapKey="AIzaSyDMyAS2jdzj-vdgBIFaIStYOWJtSlghndg"
                defaultZoom={10}
                options={optionDroowMap}
                height="80vh"
                defaultCenter={center}
                showMarker
            />

            {/*Start Contact Form && Info Box*/}
            <Container className="section-margin">
                <DsnGrid col={2} colTablet={1}>
                    <InfoBox className="background-section p-30"/>
                    <ContactForm/>
                </DsnGrid>
            </Container>

            <NextPage className="section-margin" to="/portfolio" text="See More Works.">
                Portfolio
            </NextPage>
            <Footer/>


        </React.Fragment>
    );
}

export default Contact;