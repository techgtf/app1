import React from 'react';
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";

import {Container} from "react-bootstrap";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
import DsnGrid from "../../components/DsnGrid";
//--> Component
import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import NextProject from "../../components/next/NextProject";
import {Helmet} from "react-helmet";


const ToastReel = ({data}) => {
    const nextData = getPortfolioItem(5);
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
                        // href="https://www.behance.net/gallery/88610693/Toast-2019-Reel"
                        overlay={data.overlay}
            >
                {/* <strong className="color-heading">Seohee Lee</strong> <span> - September 26th 2017</span> */}
            </HeaderHalf>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>SEO</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>Search Engine Optimization</h2>}
                </TextTrigger>
                <FadeUpTrigger>
                    {(ref) => <>
                        <p className="mt-20" ref={ref}>
                        Positioning your website in the first place on Google is our commitment. We always put our best foot forward to accomplish our goals. We invest in the best search engine optimizers, content developers, and analysts, and they all work as a team to deliver the best results.
                        </p>

                        <br></br><br></br>
                        <hr></hr><br></br><br></br>
                        <h2>OUR SEO SERVICES INCLUDE</h2>
                        <br></br><br></br>
                        <DsnGrid col={2} colGap={50} rowGap={50} colGapTablet={30} rowGapTablet={30}>
                        <div className='bx-new'>
                        <h6>SEO AUDIT AND PERFORMANCE ANALYSIS</h6>
                        <br></br>
                        <p>We audit your website thoroughly to figure out where it stands in terms of SEO-friendliness and analyze its performance to come up with a detailed report to develop a custom SEO strategy matching your business needs.</p>
                        </div>
                        
                        <div className='bx-new'>
                        <h6>COMPETITIVE SEO RESEARCH</h6>
                        <br></br>
                        <p>We research your competition to discover what they are doing to reach their target audience and to which degree they are successful in their efforts. Our competitive SEO research enables us to find out the good and bad things your competitors are doing, which helps us determine what we need to include and exclude from your SEO campaign.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>KEYWORD RESEARCH</h6>
                        <br></br>
                        <p>Choosing the right keywords is the most critical step to running an effective SEO campaign. We use the best keyword-finding tools to prepare a list of comprehensive keywords. We will share the keywords with you and ask you to pick the best ones from them.</p>
                        </div>
                    
                        <div className='bx-new'>
                        <h6>ON-PAGE OPTIMIZATION</h6>
                        <br></br>
                        <p>We optimize the content, URL, website speed, titles, description, schema markup, and all-important on-site factors that Google counts while determining your website’s worth for its organic search results. Moreover, we keep analyzing the on-page SEO of your website to boost or maintain the rankings of your website.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>OFF-PAGE OPTIMIZATION</h6>
                        <br></br>
                        <p>Our off-page search engine optimization strategy aims to reach your target audience through various online platforms, drive them to your website, and strengthen your link profile to get Google’s favor in organic search results.</p>
                        <p>We devise your off-page optimization strategy based on your requirements and budget. We publish guest posts, articles, blogs, and classifieds on quality websites. We create presentations and infographic content to increase your reach to your target audience.</p>
                        <p>We share your content on various social media channels to convey your message to your target audience. Also, we build authoritative links to your website through quality platforms.</p>
                        </div>
                        
                        <div className='bx-new'>
                        <h6>LINK BUILDING</h6>
                        <br></br>
                        <p>Google considers your link profile thoroughly before deciding the position of your website in its search results. The more robust the link profile you have, the better response you can expect from Google. Hence, we make a custom strategy to make a rich link profile for your business. Our specialized link builders prepare a list of those websites, building links through which make your link profile way strong for Google.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>REPORTING</h6>
                        <br></br>
                        <p>We share detailed progress reports with our clients. Our reports include all activities we perform during the month and how they impact your website’s performance in terms of traffic, rankings, and authority. Thus, we maintain complete transparency with our clients.</p>
                        </div>
                        
                        <div className='bx-new'>
                        <h6>DEDICATED SEO ACCOUNT MANAGER</h6>
                        <br></br>
                        <p>We assign a dedicated SEO account manager to each client whom they can contact to discuss their project reports, concerns, feedback, or new requirements.</p>
                        <p>Let’s Talk Now!</p>
                        </div>
                        </DsnGrid>
                    
                    </>}
                    
                </FadeUpTrigger>

                
            </Container>

            <Container>
           
            </Container>
            <ParallaxImage className="mb-section" src="/assets/img/project/project4/6.jpg" caption="Caption #5"
                           triggerHook="top" animationActive={false} parallax={{scale: 1}} parallaxFrom={{scale: 1.3}}/>
            {/*End Parallax Image*/}

            <NextProject heroContent={nextData} overlay={nextData.overlay}/>


        </React.Fragment>
    );
}


export default ToastReel;