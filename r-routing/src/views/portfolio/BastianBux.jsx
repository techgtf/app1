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
import NextProject from "../../components/next/NextProject";
import BoxRight from "../../components/box-right/BoxRight";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import {Helmet} from "react-helmet";


const BastianBux = ({data}) => {

    const nextData = getPortfolioItem(1);


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
                        // textButton="View Website"
                        // href="https://www.behance.net/gallery/37100597/Bastian-Bux?tracking_source=search"
                        overlay={data.overlay}>
                {/* <strong className="color-heading">Published </strong> <span> - July 15th 2019 </span> */}
            </HeaderHalf>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>Bastian</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>Online Reputation Management</h2>}
                </TextTrigger>
                <FadeUpTrigger>
                    <p className="mt-20">
                    People’s perception of you depends upon what they read or hear about you. Most people regurgitate the same words when discussing you, and it causes more harm to your business prospects. Hence, it is crucial to track the content about your business on the web and take appropriate steps to get rid of negative content as you discover. At GTF Technologies, we are experts in online reputation management. We know how to handle negative content pretty well and do damage control. We research the platform on which harmful content is published and then create a well-thought strategy to restrict the access of negative content to internet users. Simultaneously, we create positive content about your business and post them on reputed platforms to set a positive tone about your reputation in the market. Our Reputation Management Services Include
                    </p>
                    {/* <ButtonProject className="mt-20"
                                   href="https://www.behance.net/gallery/37100597/Bastian-Bux?tracking_source=search"
                                   target="_blank" rel="noopener noreferrer"> VISIT SITE </ButtonProject> */}

                        <br></br><br></br>
                        <hr></hr><br></br><br></br>
                        <DsnGrid col={2} colGap={50} rowGap={50} colGapTablet={30} rowGapTablet={30}>
                        <div className='bx-new'>
                        <h6>CORPORATE REPUTATION MANAGEMENT</h6>
                        <br></br>
                        <p>If anything negative has been circulating about your company on the web, we use advanced digital marketing techniques to reduce its circulation and stop it completely. At the same time, we promote positive content in favour of your company to reverse the impact of negative content.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>NEGATIVE PRODUCT REVIEW MANAGEMENT</h6>
                        <br></br>
                        <p>Negative reviews spread like fire in the forest. Hence, they are required to be stopped immediately or cause severe harm to your output. At GTF Technologies, we specialize in dealing with negative product reviews. We bury them in the web in such a place that nobody ever finds them until they dedicate themselves to the same task. Also, we create a smart strategy to get more positive reviews and promote positive content about you.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>CELEBRITY REPUTATION MANAGEMENT</h6>
                        <br></br>
                        <p>We repair the online reputation of not only business organizations but also individuals on the top as well. We help politicians, actors, and business owners to hide negative content in circulation about them and promote positive content to mend their reputation and polish that as well.</p>
                        </div>

                        

                        </DsnGrid>

                        <br></br><br></br>
                        <hr></hr><br></br><br></br>

                        <h2>WHY GTF TECHNOLOGIES FOR ONLINE REPUTATION MANAGEMENT</h2>
                        <br></br>

                        <DsnGrid col={2} colGap={50} rowGap={50} colGapTablet={30} rowGapTablet={30}>
                        <div className='bx-new'>
                        <h6>PRIVACY</h6>
                        <br></br>
                        <p>We don’t disclose your name as a reference to get more reputation management projects until you allow us for it.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>BESPOKE SOLUTION</h6>
                        <br></br>
                        <p>The strategy for an ORM project entirely depends on where the negative content is published. Based on the site or platform, we make a custom strategy.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>NO FAKE COMMITMENTS</h6>
                        <br></br>
                        <p>We don’t make any fake commitments to remove negative content in a month or two. We tell you actual facts and leave the decision to you.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>FULL TRANSPARENCY</h6>
                        <br></br>
                        <p>We send you a detailed report of activities we perform for your campaign and how they are doing. As a result, you have a complete picture of your project.</p>
                        <p>Let’s Speak Now.</p>
                        </div>
                        </DsnGrid>
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            <ParallaxImage className="section-margin container" src="/assets/img/project/project9/2.jpg"
                           height={"80vh"}
                           caption="Caption #1"/>

            {/*Start Box Right Info*/}
            <BoxRight className="section-margin" src="/assets/img/project/project9/3.jpg">
                <FadeUpTrigger>
                    {(ref) =>
                        <React.Fragment>
                            <h2 ref={ref}>
                            Are you satisfied <br/>with your visual identity?
                            </h2>

                            <p className="mt-30" ref={ref}>
                                A system that young people around the world with a club culture and techno enthusiasts
                                feel
                                identified. We generated a simple logo that is the basis for generating a geometric and
                                liquid system.
                            </p>

                        </React.Fragment>}
                </FadeUpTrigger>
            </BoxRight>
            {/*End Box Right Info*/}

            <ParallaxImage className="section-margin" src="/assets/img/project/project9/4.jpg" caption="Caption #5"
                           triggerHook="top"
                           parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/>

            <NextProject heroContent={nextData} overlay={nextData.overlay}/>


        </React.Fragment>
    );
}


export default BastianBux;