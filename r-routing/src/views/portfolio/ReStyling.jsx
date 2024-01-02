import React from 'react';
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";

import {Container} from "react-bootstrap";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
import DsnGrid from "../../components/DsnGrid";
//--> Component

import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import ButtonProject from "../../components/button/button-project/ButtonProject";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import NextProject from "../../components/next/NextProject";
import {Helmet} from "react-helmet";


const ReStyling = ({data}) => {

    const nextData = getPortfolioItem(4);


    return (
        <React.Fragment>

            <Helmet>
                <title>GTF Technologies - {data.title} </title>
                <meta
                    name="description"
                    content={data.description}
                />
            </Helmet>
            {/*Start Header Half*/}
            <HeaderHalf heroContent={data}
                        parallax={{yPercent: 30, scale: 1.1}}
                        // textButton="View Website"
                        // href="https://www.behance.net/gallery/82911685/Re-Styling-for-Neorama?tracking_source=projectScroller"
                        overlay={data.overlay}>
                {/* <strong className="color-heading">Seohee Lee</strong> <span> - September 26th 2017</span> */}
            </HeaderHalf>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>Preservation</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>Unrivalled Website Maintenance</h2>}
                </TextTrigger>
                <FadeUpTrigger>
                    <p className="mt-20">
                    GTF Technologies is a team of crackerjack website maintenance engineers. We research websites to dig out their weak areas and convert them into strong and favorable ones. Our service protects your website from malware, helps your website get Google’s preference in its search engine rankings, and provides the best experience to its users.
                    </p>
                    {/* <ButtonProject className="mt-20"
                                   href="https://www.behance.net/gallery/82911685/Re-Styling-for-Neorama?tracking_source=projectScroller"
                                   target="_blank" rel="noopener noreferrer"> VISIT SITE</ButtonProject> */}

                        <br></br><br></br>
                        <hr></hr><br></br><br></br>

                        <h2>ADVANTAGES OF OUR WEBSITE MAINTENANCE SERVICES</h2>
                        <br></br>
</FadeUpTrigger>

<DsnGrid col={2} colGap={50} rowGap={50} colGapTablet={30} rowGapTablet={30}>
                        <div className='bx-new'>
                        <h6>FIX VULNERABILITIES</h6>
                        <br></br>
                        <p>We comprehensively analyze your website to discover its weaknesses and fix them properly toensure your website becomes strong enough to deal with malware efficiently.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>UPDATE THE VERSION</h6>
                        <br></br>
                        <p>Using an obsolete version of your content management system makes your website prone to malware attacks and keeps it weak in terms of functionalities. Hence, we update the version to make your website secure and up-to-date.</p>
                        
                        </div>

                        <div className='bx-new'>
                        <h6>REPAIRS</h6>
                        <br></br>
                        <p>Our experts analyze your website thoroughly to discover hidden bugs, errors, and broken links and then fix them to make your website perfect.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>FIX BROWSER COMPATIBILITY ISSUES</h6>
                        <br></br>
                        <p>We check if your website is loading properly on all major browsers or not. If we discover your website is not loading correctly on any internet browser, we fix it.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>PLUGIN UPDATES</h6>
                        <br></br>
                        <p>We check all plugins installed on your website. Remove all unnecessary plugins, update obsolete versions, and install new plugins.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>FIX WEBSITE SPEED</h6>
                        <br></br>
                        <p>We check the loading speed of your website on different internet browsers and devices. Based on our findings, we fix the issue and reduce it to the level where it can get Google’s preference.</p>

                        </div>

                        <div className='bx-new'>
                        <h6>FIX THE FUNCTIONALITIES</h6>
                        <br></br>
                        <p>We check the functionalities of your website to become sure every functionality, including the contact form, is working correctly. If we find any issues, we fix them.</p>

                        </div>

                        <div className='bx-new'>
                        <h6>WEBSITE CONTENT</h6>
                        <br></br>
                        <p>We can also update your content on your request.</p>
                        <p>Speak to Us Now!</p>
                        </div>

                        </DsnGrid>

            </Container>
            {/*End Info Project*/}

            {/*Start Parallax Image*/}
            <ParallaxImage className="section-margin" src="/assets/img/project/project3/2.jpg" caption="Neorama"/>
            {/*End Parallax Image*/}

            {/*Start Info Box*/}
            {/* <Container className="p-relative section-margin text-center">
                <TitleCover>Neorama</TitleCover>
                <TextTrigger duration={0.5} stagger={0.1}>
                    {(ref) => <h5 className="m-w750 dsn-auto" ref={ref}>
                        New projects, new people, greater goals. So they reached us to help them expand their ability to
                        communicate with their stakeholders and to refresh their identity system
                    </h5>}
                </TextTrigger>
            </Container> */}
            {/*End Info Box*/}

            {/*Start Parallax Image*/}
            {/* <ParallaxImage className="section-margin" src="/assets/img/project/project3/3.jpg" caption="Neorama"
                           triggerHook="top" parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/> */}
            {/*End Parallax Image*/}

            <NextProject heroContent={nextData} overlay={nextData.overlay}/>


        </React.Fragment>
    );
}


export default ReStyling;