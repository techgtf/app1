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
                <TitleCover>Exhibition</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>Display Advertising Services</h2>}
                </TextTrigger>
                <FadeUpTrigger>
                    <p className="mt-20">
                    GTF Technologies is committed to persuading your target audience through a thoroughly planned display advertising campaign. Our copywriters and graphic designers collaboratively create influencing display ads, and our expert paid marketers promote them to your target audience through retargeting, contextual targeting, and site targeting.
                    </p>
                    {/* <ButtonProject className={"mt-20"}
                                   href="https://www.behance.net/gallery/88747469/What-If-Gold"
                                   target="_blank" rel="noopener noreferrer">
                        VISIT SITE
                    </ButtonProject> */}

                        <br></br><br></br>
                        <hr></hr><br></br><br></br>
                        <DsnGrid col={2} colGap={50} rowGap={50} colGapTablet={30} rowGapTablet={30}>
                        <div className='bx-new'>
                        <h6>OUR DISPLAY ADVERTISING SERVICES</h6>
                        <br></br>
                        <p>The key to GTF Technologies' existence is meeting your expectations because your satisfaction drives us. We leverage all possible platforms to reach your target audience and hold their attention to get them to your website. Some of the top platforms we include:</p>

                        </div>

                        <div className='bx-new'>
                        <br></br>
                        <h6>GOOGLE DISPLAY NETWORK</h6>
                        <br></br>
                        <p>We use Google Display Network smartly to take your advertisements to your target audience and ensure more conversions. Our experts show your ads to the right audience at the right time.</p>
                        </div>

                        <div className='bx-new'>
                        <br></br>
                        <h6>GOOGLE DISPLAY REMARKETING</h6>
                        <br></br>
                        <p>With our comprehensive Google display remarketing strategy, we establish you as a well-recognized market brand, drive more website traffic, and boost your sales. Also, with our proven bidding optimization techniques, we optimize your campaign to enhance your return on investment.</p>

                        </div>

                        <div className='bx-new'>
                        <br></br>
                        <h6>PROGRAMMATIC ADS</h6>
                        <br></br>
                        <p>We run personalized programmatic ads to help you reach your target audience in an automated manner. These engaging ads multiply your website traffic and increase the number of conversions.</p>
                        </div>

                        <div className='bx-new'>
                        <br></br>
                        <h6>HOW DO OUR DISPLAY ADVERTISING SERVICES WORK?</h6>
                        <br></br>
                        <p>Our aim is not just to meet but exceed your expectations consistently. Hence, we follow a smart process.</p>

                        </div>

                        <div className='bx-new'>
                        <br></br>
                        <h6>TARGET AUDIENCE RESEARCH</h6>
                        <br></br>
                        <p>Everything cannot be sold to everyone. Each product has its own buyer. Hence, the first step in running a successful campaign is identifying your target audience and their behaviour. Once we know who your target audience is and how they approach different things, it becomes easy to devise the right campaign.</p>

                        </div>

                        <div className='bx-new'>
                        <br></br>
                        <h6>CUSTOMIZED STRATEGY</h6>
                        <br></br>
                        <p>Based on our findings about your demographics and competition analysis, we devise a bespoke display advertising strategy to reach your potential buyers and persuade them to buy from you. Concurrently, we also consider your requirements and your budget.</p>

                        </div>

                        <div className='bx-new'>
                        <br></br>
                        <h6>MONITORING</h6>
                        <br></br>
                        <p>We keep monitoring the performance of your campaign to ensure it’s going the right way at the desired pace. Based on our analysis, we promote performing ads and remove non-performing or underperforming ads with new ads. Thus, monitoring aids us in delivering our commitments.</p>
                
                        </div>

                        <div className='bx-new'>
                        <br></br>
                        <h6>REPORTING</h6>
                        <br></br>
                        <p>A detailed progress report is sent to you every month. The report includes the activities performed during the reporting period with their performance. Everything is mentioned in such a simplified manner that you can understand the report without any effort from your side. If you have to ask or say something, your project manager or client coordinator listens to your words attentively and gives the best answers to your questions.</p>

                        <p>Let’s us talk to us.</p>
                        </div>
                        </DsnGrid>
                        
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            <ParallaxImage className="section-margin" src="/assets/img/project/project5/3.jpg" caption="Caption #1"
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