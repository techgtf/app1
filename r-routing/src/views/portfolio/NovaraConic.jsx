import React from 'react';
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";


import {Container} from "react-bootstrap";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import DsnGrid from "../../components/DsnGrid";
//--> Component
import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import ButtonProject from "../../components/button/button-project/ButtonProject";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import NextProject from "../../components/next/NextProject";
import {Helmet} from "react-helmet";


const NovaraConic = ({data}) => {

    const nextData = getPortfolioItem(9);


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
                        parallax={{yPercent: 30}}
                        // textButton="View Website"
                        // href="https://www.behance.net/gallery/69632537/Novara-Conic"
                        overlay={data.overlay}>
                {/* <strong className="color-heading">Published</strong> <span>  - October 19th 2017 </span> */}
            </HeaderHalf>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>E-Marketing</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>Social Media Marketing</h2>}
                </TextTrigger>
                <FadeUpTrigger>
                    <p className="mt-20">
                    Social media marketing is like your first date. If you impress, you sell, or you fail. At GTF Technologies, we know how to make it successful. With our bespoke social media marketing solutions, we maximize your social media presence, your reach, and drive more intended buyers to your website. Our Social Media Marketing Services Include:
                    </p>
                    <br></br><br></br>
                        <hr></hr><br></br><br></br>
                    
                        <DsnGrid col={2} colGap={50} rowGap={50} colGapTablet={30} rowGapTablet={30}>
                        <div className='bx-new'>
                        <h6>FACEBOOK MARKETING</h6>
                        <br></br>
                        <p>We don’t promote your products to more than 2.85 billion Facebook users across the world. Instead, we first create your demographics to determine who actually requires your products and where they live. Once it is determined, we launch a focused marketing campaign on Facebook. Our copywriters create engaging content applying the principles of emotional intelligence and then graphic designers present the texts in an eye-catching graphic. Our marketers use the best marketing techniques to deliver the optimal output.

</p>

                        <br></br><br></br>
                        
                        </div>
                        <div className='bx-new'>
                        <h6>INSTAGRAM MARKETING</h6>
                        <br></br>
                        <p>We have a smart team of Instagram marketers with expertise in customer reach and persuasion. Our experts start with sketching the personality of your imaginary buyers and then create their imagery nature. Then we analyse the campaigns of your competition and formulate your Instagram marketing campaign. Our creative writers and graphic experts create engaging posts to pique the interest of your target audience to click on your ads and then visit your website to buy your products.</p>
                        
                        <br></br><br></br>
                        
                        
                        </div>
                        <div className='bx-new'>
                        <h6>TWITTER MARKETING</h6>
                        <br></br>
                        <p>We excel in selling your products through Twitter. We create a bespoke marketing strategy to inspire your target audience to act on your ads. Our marketers find your target audience on Twitter and our creative experts come up with engaging ads for your target audience. Our marketers promote those ads to your target audience in the most innovative ways to deliver the maximum output.</p>


                        <br></br><br></br>
                        </div>
                        <div className='bx-new'>
                        <h6>LINKEDIN MARKETING</h6>
                        <br></br>
                        <p>Get more qualified leads through our cutting-edge LinkedIn marketing services. With a tailored marketing plan, we reach your target market on LinkedIn and motivate them to buy from you. Our LinkedIn marketers figure out your audience on this platform and develop a smart approach to reach them. Our copywriters and graphic designers help them achieve their goals through impressive textual and visual content based on behavioural science and emotional intelligence concepts. Marketers make use of them smartly to get more conversions.</p>
                        <br></br><br></br>
                        </div>
                        <div className='bx-new'>
                        <h6>YOUTUBE MARKETING</h6>
                        <br></br>
                        <p>We reach your target audience on YouTube and encourage them to buy from you. Our marketing experts specialize in creating demographics, devising the right marketing strategy, and promoting your products to the right people. Our expert copywriters, video editors, and graphic designers collaborate with them to accomplish your marketing goals. We also have access to artists for video shoots. If you want professional videos to be shot for advertisement purposes, we can help you with it. Through our targeted marketing campaign, we boost your sales.</p>


                        <br></br><br></br>
                        </div>

                    <div className='bx-new'>
                    <h6>PINTEREST MARKETING</h6>
                        <br></br>
                        <p>We help brands sell their products on Pinterest. We identify their target audience on this popular social networking website and then reach them with a thoroughly planned strategy to influence them. Moreover, we keep tracking the performance of our campaign to ensure everything is going in a well-intended way. If necessary, we alter it to make it more emphatic.</p>
                        <br></br><br></br>
                    </div>
                    <div className='bx-new'>
                    <h6>OTHER CHANNELS</h6>
                    <br></br>
                        <p>We are not just limited to these mentioned social media platforms but also promote your products through Outbrain, Taboola, Quora, and other social networking platforms. No matter which platform you choose, we can create a custom strategy to maximize your results.</p>
                        <p>Let’s Speak Now!</p>
                    </div>
                </DsnGrid>
                    {/* <ButtonProject className={"mt-20"}
                                   href="https://www.behance.net/gallery/69632537/Novara-Conic"
                                   target="_blank" rel="noopener noreferrer">
                        VISIT SITE
                    </ButtonProject> */}
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}

            {/*Start Grid Project*/}
            <Container className="section-margin">
                <DsnGrid col={2} colGap={50} rowGap={50} colGapTablet={30} rowGapTablet={30}>
                    <img src="/assets/img/project/project8/2.jpg" alt=""/>
                    <img src="/assets/img/project/project8/3.jpg" alt=""/>
                    <img src="/assets/img/project/project8/4.jpg" alt=""/>
                    <img src="/assets/img/project/project8/1.jpg" alt=""/>
                </DsnGrid>
            </Container>
            {/*Start Grid Project*/}

        

            {/*Start Box Info With Image*/}
            {/* <BoxImageVertical src="/assets/img/project/project8/5.jpg" className="section-margin">
                <FadeUpTrigger>
                    {(ref) => <DsnGrid col={1} rowGap={30} rowGapTablet={20}>
                        <TitleCover>Droow</TitleCover>
                        <h2 className='title-section border-line-left' ref={ref}>IT STARTS WITH US.</h2>
                        <h6 ref={ref}>
                            We set THE blue and gold standard, emblazoned it with a bear, and held it high. Then we
                            watched
                            our passion spread across the state.n
                        </h6>
                        <p ref={ref}>
                            Challenging the status quo, driving forward, never backing down. The future of intelligence.
                            The
                            future of excellence. The future of defiance, innovation, and sport. This is where it all
                            begins.n
                        </p>
                        <div className="button-box" ref={ref}>
                            <ButtonDefault text="launch" icon={faAngleRight} href="#0"/>
                        </div>

                    </DsnGrid>}
                </FadeUpTrigger>
            </BoxImageVertical> */}
            {/*End  Box Info With Image*/}

            <ParallaxImage className="mb-section" src="/assets/img/project/project8/6.jpg" caption="Caption #5"
                           triggerHook="top" parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/>


            <NextProject heroContent={nextData} overlay={nextData.overlay}/>


        </React.Fragment>
    );
}


export default NovaraConic;