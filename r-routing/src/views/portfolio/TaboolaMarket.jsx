import React from 'react';
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";

import {Container} from "react-bootstrap";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import DsnGrid from "../../components/DsnGrid";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
//--> Component


import TitleCover from "../../components/heading/title-cover/TitleCover";
import ButtonProject from "../../components/button/button-project/ButtonProject";
import BoxGallery from "../../components/box-gallery/BoxGallery";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import NextProject from "../../components/next/NextProject";
import HeaderFull from "../../components/header/HeaderFull";
import {Helmet} from "react-helmet";


const WhatIfGold = ({data}) => {

    const nextData = getPortfolioItem(6);


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
                {/* <strong className="color-heading">Alexander Shepard</strong> <span> - November 28th 2019</span> */}
            </HeaderFull>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>AI Tech</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>Taboola Marketing</h2>}
                </TextTrigger>
                <FadeUpTrigger>
                    <p className="mt-20">
                    Grow your sales to the next level with our customized Taboola marketing services. Specializing in Taboola, one of the largest AI technology-based discovery platforms on the web, we leverage this platform in a customized way to generate new business opportunities for your organization. Our specialist Taboola marketers discover your target audience on this platform among more than 1 billion internet users through their extensive analysis of thousands of metrics. Then they formulate a personalized strategy to reach and stimulate your target audience.
                    </p>

                    <p>Our professional copy and content writers and graphic designers facilitate them in achieving their goals. They create clear texts and visual content to influence your target audience, and Taboola marketers incorporate smart techniques to take those content pieces to your target audience. Simultaneously, they keep monitoring your campaign and its performance. When they observe a particular ad is overperforming, they boost it. On the other hand, they replace non-performing and underperforming ads. Thus, they ensure maximum engagement and output through their campaigns.</p>
                    {/* <ButtonProject className={"mt-20"}
                                   href="https://www.behance.net/gallery/88747469/What-If-Gold"
                                   target="_blank" rel="noopener noreferrer">
                        VISIT SITE
                    </ButtonProject> */}
                    <br></br><br></br>
                        <hr></hr><br></br><br></br>
                        <h2>OUR TABOOLA MARKETING SERVICES INCLUDE</h2>
                        <br></br><br></br>
                        <DsnGrid col={2} colGap={50} rowGap={50} colGapTablet={30} rowGapTablet={30}>
                        <div className='bx-new'>
                        <h6>DEFINING YOUR TARGET AUDIENCE</h6>
                        <br></br>
                        <p>Until we know whom to convince, how can we create the right strategy to approach them? So, our marketers create a buyer persona and then analyse how they can reach the most serious buyers using Taboola.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>DEVISING YOUR TABOOLA STRATEGY</h6>
                        <br></br>
                        <p>Once we know your goals and target audience, we analyse the campaigns of your competition to determine what they are really doing to reach your target audience and how successful they are in their attempts. Their analysis leads them to design a custom Taboola strategy.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>SETTING UP YOUR CUSTOMIZED CAMPAIGN</h6>
                        <br></br>
                        <p>Once everything is defined, our marketers set up your ad campaign on Taboola, and our creative writers and graphic designers create the best texts and visuals to rouse the emotion of your target audience to act on.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>MONITORING & REPORTING</h6>
                        <br></br>
                        <p>Your campaign is constantly monitored and we make necessary changes to make it more impactful. As part of our commitment to complete transparency, we provide you with a detailed monthly report detailing our activities during the reporting period. You can reach our client coordinator or your project manager if you need any clarifications or if you have some suggestions.</p>

                        <p>Let’s speak now.</p>
                        </div>

                        </DsnGrid>


                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            <ParallaxImage className="section-margin" src="/assets/img/project/project10/2.jpg" caption="Caption #1"
                           parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/>


            {/*Start Gallery List*/}
            <BoxGallery className="section-margin" col={3} colMobile={1} colGap={0} rowGap={0}
                        // images={[
                        //     {src: "/assets/img/project/project5/2.jpg", caption: "Trevor Bittinger"},
                        //     {src: "/assets/img/project/project5/4.jpg", caption: "Sef McCullough"},
                        //     {src: "/assets/img/project/project5/5.jpg", caption: "Sef McCullough"}
                        // ]}
            />
            {/*End Gallery List*/}

            {/*Start Box Info With Image*/}
            {/* <BoxImageVertical src="/assets/img/project/project5/6.jpg" className="section-margin">
                <FadeUpTrigger>
                    {(ref) => <DsnGrid col={1} rowGap={30} rowGapTablet={20}>
                        <TitleCover>Gold</TitleCover>
                        <h2 className='title-section border-line-left' ref={ref}>What If Gold?</h2>
                        <h6 ref={ref}>
                            The series of high quality visualization renders are based on Apple products in a proposed
                            gold color.
                        </h6>
                        <p ref={ref}>
                            The idea is to showcase some stylish, realistic photos of Apple product such as iMac (Pro),
                            MacBook and Mac Pro in gold version. As we know, almost of all Apple computers are offered
                            in two color options at the moment (excluding Macbook 12 & MacBook Air 2019). So, we wonder
                            - what if gold?
                        </p>
                        <div className="button-box" ref={ref}>
                            <ButtonDefault text="launch" icon={faAngleRight} href="#0"/>
                        </div>

                    </DsnGrid>}
                </FadeUpTrigger>
            </BoxImageVertical> */}
            {/*End  Box Info With Image*/}


            <NextProject heroContent={nextData}/>


        </React.Fragment>
    );
}


export default WhatIfGold;