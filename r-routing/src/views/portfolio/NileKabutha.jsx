import React from 'react';
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";

import {Container} from "react-bootstrap";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
import DsnGrid from "../../components/DsnGrid";

//--> Component
import TitleCover from "../../components/heading/title-cover/TitleCover";
import ButtonProject from "../../components/button/button-project/ButtonProject";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import NextProject from "../../components/next/NextProject";
import HeaderFull from "../../components/header/HeaderFull";
import {Helmet} from "react-helmet";


const NileKabutha = ({data}) => {

    const nextData = getPortfolioItem(7);


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
            <HeaderFull heroContent={data}
                        parallax={{yPercent: 30, scale: 1.1}}
                        // textButton="View Website"
                        // href="https://www.behance.net/gallery/57136617/Time-Tag_Watch?tracking_source=search%7Cwatch%20"
                        overlay={data.overlay}>
                {/* <strong className="color-heading">Kabutha Kago</strong> <span> - June 10th 2018</span> */}
            </HeaderFull>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>Visually Advertising </TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>YOUTUBE MARKETING</h2>}
                </TextTrigger>
                <FadeUpTrigger>
                    <p className="mt-20">
                    Multiply your sales with our custom YouTube marketing services. With more than 2 billion users across the world, YouTube is the second most popular search engine after Google and the first most used video platform.
                    At GTF Technologies, we devise a bespoke YouTube marketing plan for your business based on our detailed analysis of your target audience, your competition active on YouTube, and your budget. Our team collaboratively works to implement the strategy perfectly and deliver our commitments.
                    </p>
                    <p>Our Video Marketing Services Include</p>
                    {/* <ButtonProject className="mt-20"
                                   href="https://www.behance.net/gallery/66646747/Nile"
                                   target="_blank" rel="noopener noreferrer">
                        VISIT SITE
                    </ButtonProject> */}

                        <br></br><br></br>
                        <hr></hr><br></br><br></br><br></br><br></br>
                        <DsnGrid col={2} colGap={50} rowGap={50} colGapTablet={30} rowGapTablet={30}>
                        <div className='bx-new'>
                        <h6>DEMOGRAPHICS DEVELOPMENT</h6>
                        <br></br>
                        <p>We run focused YouTube marketing campaigns. So, we begin our process by defining your demographics. We determine the gender, age group, income group, locality, and behavior of the people who really need your products.</p>
                        </div>

                        <div className='bx-new'>
                        <br></br>
                        <h6>COMPETITOR ANALYSIS</h6>
                        <br></br>
                        <p>We analyze the campaigns of your competitors on YouTube and see how successful they are in their efforts. The analysis of their campaigns helps us identify what they are doing right and what they are doing wrong.</p>
                        
                        </div>


                        <div className='bx-new'>
                        <br></br>
                        <h6>KEYWORD RESEARCH & STRATEGY DEVELOPMENT</h6>
                        <br></br>
                        <p>Keywords are the keys to success in the digital world because they help your videos to be found in the right searches. We pick the best keywords for your video campaign. We determine your YouTube marketing strategy by following our findings, requirements, and budget.</p>
                        </div>


                        <div className='bx-new'>
                        <br></br>
                        <h6>SCRIPT WRITING</h6>
                        <br></br>
                        <p>Our team has expert scriptwriters who jot down the best stories for your videos. Our scriptwriters specialize in emotional intelligence and use the best practices of it to ensure the best response from the video. The video script is also sent to you for your approval.</p>
                        <br></br>
                        </div>

                        <div className='bx-new'>
                        <h6>VIDEO DEVELOPMENT</h6>
                        <br></br>
                        <p>On the basis of your budget and the demand for the story, we develop a smart video for your campaign. The video is emailed to you before being published online.</p>

                        </div>

                        <div className='bx-new'>
                        <h6>MARKETING</h6>
                        <br></br>
                        <p>We publish your campaign on YouTube and optimize the video properly. We use the best keywords in the title and description to boost its reach. Also, we apply various proven YouTube marketing strategies to ensure optimal output from your videos.</p>
                        <p>Let us speak Now.</p>
                        </div>
                        </DsnGrid>
                        
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            {/* <ParallaxImage className="section-margin container" src="/assets/img/project/project6/2.jpg" height={"80vh"}
                           caption="Caption #1"
                           parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/>
            <ParallaxImage className="section-margin" src="/assets/img/project/project6/3.jpg" caption="Caption #1"
                           triggerHook="top"
                           parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/> */}

            {/*Start Info Box*/}
            {/* <Container className="p-relative section-margin text-center">
                <TitleCover>Nile</TitleCover>
                <TextTrigger duration={0.5} stagger={0.1}>
                    {(ref) => <h5 className="m-w750 dsn-auto" ref={ref}>
                        The Brief team has been sincerely committed to designing great communication around our
                        projects. Our love their creative work - and so do we!
                    </h5>}
                </TextTrigger>
            </Container> */}

            <ParallaxImage className="section-margin container" src="/assets/img/project/project6/4.jpg" height={"80vh"}
                           caption="Caption #4"/>
            {/* <ParallaxImage className="section-margin" src="/assets/img/project/project6/5.jpg" caption="Caption #5"
                           triggerHook="top"
                           parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/> */}

            <NextProject heroContent={nextData}/>


        </React.Fragment>
    );
}


export default NileKabutha;