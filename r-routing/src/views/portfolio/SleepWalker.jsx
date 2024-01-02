import React from 'react';
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";

//--> Component
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import NextProject from "../../components/next/NextProject";
import HeaderFull from "../../components/header/HeaderFull";
import {Helmet} from "react-helmet";


import {Container} from "react-bootstrap";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
import DsnGrid from "../../components/DsnGrid";
import TitleCover from "../../components/heading/title-cover/TitleCover";



const SleepWalker = ({data}) => {

    const nextData = getPortfolioItem(8);


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
                        textButton="View Website"
                        overlay={data.overlay}
            >
                {/* <strong className="color-heading">Published</strong> <span> - September 26th 2019 </span> */}
            </HeaderFull>
            {/*End Header Half*/}

            <Container className="section-margin">
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>Social Media Optimization</h2>}
                </TextTrigger>
                <FadeUpTrigger>
                    {(ref) => <>
                        <p className="mt-20" ref={ref}>
                        A well-recognized name in the world of social media optimization, GTF Technologies commits to building you a brand on social media with its customized services. The company has a specialized team of social media marketers, copywriters, and graphic designers to convey your message to your target audience in a way impressive manner.  We offer both organic and paid social media solutions based on your needs and budget. With our more than a decade of experience in the industry and ace team, we assure you to deliver you the best return on your investment.
                        </p>
                        <p>Our experts have practical knowledge of running campaigns on all major social networking platforms, such as Facebook, LinkedIn, Twitter, and Instagram.</p>
                        <p>Our Social Media Services Include</p>
                        <br></br><br></br>
                        <hr></hr><br></br><br></br>
                        <DsnGrid col={2} colGap={50} rowGap={50} colGapTablet={30} rowGapTablet={30}>
                        <div className='bx-new'>
                        <h6>FACEBOOK OPTIMIZATION</h6>
                        <br></br>
                        <p>We create your Facebook page. If you already have one, we optimize it perfectly to boost its visibility. Next, we work on your buyer persona and then develop a comprehensive strategy to reach your target audience, build trust, impress them to follow your page, engage with your posts, and finally visit your website.</p>
                        </div>
                        
                        <div className='bx-new'>
                        <h6>INSTAGRAM OPTIMIZATION</h6>
                        <br></br>
                        <p>We create your profile on Instagram and optimize it to reach and connect with your likely customers on this social media platform. Also, we make a smart engagement strategy to ensure plenty of likes and shares for your posts. We have specialized copywriters and graphic designers who create impressive creative posts and captions to impress viewers and follow you.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>YOUTUBE OPTIMIZATION</h6>
                        <br></br>
                        <p>Our YouTube optimization service aims to establish you as a brand on the second most visited website in the world after Google. We create an optimized YouTube channel for you. If you have videos, we promote them to make your presence on YouTube. Otherwise, we create videos for you based on your budget.</p>
                        </div>
                    
                        <div className='bx-new'>
                        <h6>LINKEDIN OPTIMIZATION</h6>
                        <br></br>
                        <p>LinkedIn is not just a professional networking website but also an excellent source of business generation. We create an impressive business profile on LinkedIn and optimize it for maximum reach. Moreover, we make a bespoke strategy to connect with your target audience and inspire them to follow you.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>TWITTER-OPTIMIZATION</h6>
                        <br></br>
                        <p>We have specialized copywriters who can impress your target audience just in 280 characters. Also, our graphic designers create attention-grabbing visuals to hold the eyeballs of your target audience. Our Twitter specialists use smart engagement tips to advance your business on Google.</p>
                        </div>
                        
                        <div className='bx-new'>
                        <h6>OTHER PLATFORM OPTIMIZATION</h6>
                        <br></br>
                        <p>We can push your business just on any social media platform you want us to do and generate business through our activities. Just tell the name of the platforms, and we will come up with the perfect strategy to achieve your goals.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>OTHER PLATFORM OPTIMIZATION</h6>
                        <br></br>
                        <p>We can push your business just on any social media platform you want us to do and generate business through our activities. Just tell the name of the platforms, and we will come up with the perfect strategy to achieve your goals.</p>
                        </div>
                        </DsnGrid>

                        <br></br><br></br><hr></hr><br></br><br></br>

                        <h2>WHY HIRE GTF TECHNOLOGIES FOR SMO?</h2>
                        <br></br>

                        <DsnGrid col={2} colGap={50} rowGap={50} colGapTablet={30} rowGapTablet={30}>
                        <div className='bx-new'>
                        <h6>PERFECT BUYER PERSONA</h6>
                        <br></br>
                        <p>There is no benefit in promoting lipstick to a man. If we do it, we just waste our time and money on them. Here comes the buyer persona. It helps to determine who really needs your products. Once demographics are decided, we can run a more focused campaign applying the concept of behavioural science. So, our SMO team first creates the buyer persona for your products and services and then decides how to proceed.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>ENGAGING CONTENT</h6>
                        <br></br>
                        <p>Content rules the marketing world. If your content is not strong enough to influence your target audience, no matter how aggressively you run your campaign, you will not achieve your goals. As an experienced digital marketing company, we know this fact very well. Hence, we put our best efforts into creating the best creative ads for your campaign within your budget.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>SMART PROMOTION</h6>
                        <p>We don’t just share your social media posts, but we also promote them smartly. We choose the best hashtags to reach most of your target audience. Also, we apply various smart techniques to boost social media engagement for your posts and increase the number of your followers.</p>
                        </div>
                        
                        <div className='bx-new'>
                        <h6>OUR RECORD</h6>
                        <p>Over the years, GTF Technologies has established many brands on social media and taken their businesses to the next level through its custom solutions. So, we are confident we will also succeed in meeting and exceeding your expectations.</p>
                        <p>Let’s speak now.</p>
                            </div>
                        
                        </DsnGrid>
                    
                    </>}
                    
                </FadeUpTrigger>

                
            </Container>


            {/*Start Parallax Image*/}
            {/* <ParallaxImage src="/assets/img/project/project7/2.jpg" caption="Caption #1" triggerHook="top"
                           animationActive={false} overlay={2} parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/>

            <ParallaxImage src="/assets/img/project/project7/3.jpg" caption="Caption #2" triggerHook="top"
                           animationActive={false} overlay={2} parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/> */}

            {/* <ParallaxImage src="/assets/img/project/project7/4.jpg" caption="Caption #3" triggerHook="top"
                           animationActive={false} overlay={2} parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/> */}

            {/* <ParallaxImage className="mb-section" src="/assets/img/project/project7/5.jpg" caption="Caption #4"
                           triggerHook="top"
                           animationActive={false} overlay={2} parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/> */}
            {/*End Parallax Image*/}

            <NextProject heroContent={nextData} overlay={nextData.overlay}/>


        </React.Fragment>
    );
}


export default SleepWalker;