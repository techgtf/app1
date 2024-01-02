import React from 'react';
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";

import {Container} from "react-bootstrap";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import DsnGrid from "../../components/DsnGrid";

//--> Component
import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import TextTrigger from "../../animation/TextTrigger";
import ButtonProject from "../../components/button/button-project/ButtonProject";
import BoxGallery, {BoxGalleryItem} from "../../components/box-gallery/BoxGallery";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import ButtonPopup from "../../components/button/button-popup/ButtonPopup";
import MoveBox from "../../components/move-box/MoveBox";
import FJustifiedGallery from "../../components/justified-gallery/FJustifiedGallery";
import NextProject from "../../components/next/NextProject";
import {Helmet} from "react-helmet";


const TimeTagWatch = ({data}) => {

    const nextData = getPortfolioItem(2);

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
                        // href="https://www.behance.net/gallery/57136617/Time-Tag_Watch?tracking_source=search%7Cwatch%20"
                        overlay={data.overlay}>
                {/* <strong className="color-heading">Seohee Lee</strong> <span> - September 26th 2017</span> */}
            </HeaderHalf>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>Publicity</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>GOOGLE ADWORDS</h2>}
                </TextTrigger>
                <FadeUpTrigger>
                    <p className="mt-20">
                    Recognized by Google among its top 30 partners in India, GTF Technologies commits to maximizing your return on investment with its PPC (Pay Per Click) Services. We have proficient Google-certified AdWords wizards in our team to multiply your sales. With their extensive practical knowledge, they create impeccable campaigns following your budget and requirements and run them flawlessly to deliver optimal results.
                    </p>
                    <p>Google Ads Campaign Management Services</p>
                    {/* <ButtonProject className={"mt-20"}
                                   href="https://www.behance.net/gallery/57136617/Time-Tag_Watch?tracking_source=search%7Cwatch%20"
                                   target="_blank" rel="noopener noreferrer">
                        VISIT SITE
                    </ButtonProject> */}
                    <br></br><br></br>
                        <hr></hr><br></br><br></br>

                        <DsnGrid col={2} colGap={50} rowGap={50} colGapTablet={30} rowGapTablet={30}>
                        <div className='bx-new'>
                        <h6>SEARCH ADS</h6>
                        <br></br>
                        <p>We create engaging ads for the Google search engine with highly targeted keywords to ensure the maximum reach of your ads to your target audience. We use smart tricks to keep the CPC lowest and deliver the highest possible return on investment.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>DISPLAY ADS</h6>
                        <br></br>
                        <p>We take advantage of Google Display Network to reach your target audience and influence them to buy your products or services through our convincing display ads. Our experts create eye-grabbing visuals with persuasive content, and marketing professionals ensure their maximum reach to ensure maximum output.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>SHOPPING ADS</h6>
                        <br></br>
                        <p>We run customized Google shopping advertisements to promote your products and services online. These ads are considered to be highly result-oriented for eCommerce business owners, as eCommerce stores enjoy 60% of all their ads through these ads.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>REMARKETING</h6>
                        <br></br>
                        <p>We run a remarketing campaign for those potential customers who visit your website but leave it without taking any action. We create personalized ads for them based on their visit to your website and show them on various platforms.</p>
                        <br></br>
                        </div>
                        </DsnGrid>

                        <h2>OUR SERVICE PROCESS</h2>
                        <br></br>
                        <DsnGrid col={2} colGap={50} rowGap={50} colGapTablet={30} rowGapTablet={30}>
                        <div className='bx-new'>
                        <h6>WE CREATE OUR STRATEGY</h6>
                        <br></br>
                        <p>We don’t kick the ball in the dark. Rather we analyze your requirements thoroughly to determine your expectations and the ways to accomplish them.</p>
                        </div>
                        <div className='bx-new'>
                        <h6>AD COPIES</h6>
                        <br></br>
                        <p>Creating a big difference, copy decides the fate of an advertisement. Hence, we invest in highly experienced copywriters to ensure the curation of compelling ad copies. Our dedicated copywriters work with graphic designers and marketing professionals to ensure the delivery of the best ads.</p>


                        </div>
                        <div className='bx-new'>
                        <h6>CREATING AD GROUPS</h6>
                        <br></br>
                        <p>Keyword grouping is an essential aspect of a successful ad campaign. Our experts create the right ad groups using the right keywords. The right ad group increases the visibility of your ads which automatically increases your reach and the chances of more sales leads.</p>
                        </div>
                        <div className='bx-new'>
                        <h6>LANDING PAGE CREATION & OPTIMIZATION</h6>
                        <br></br>
                        <p>Landing pages are an imperative component of the Google AdWords campaign. They help generate high-quality leads if developed smartly. Our expert copywriters develop impressive content for your landing page following the concept of emotional intelligence. Website designers present that content in an engaging layout to catch the attention of your likely buyers. Our marketing professionals promote them applying the best paid marketing tactics to ensure maximum clicks and conversions.</p>
                
                        </div>
                        <div className='bx-new'>
                        <h6>BID OPTIMIZATION AND MANAGEMENT</h6>
                        <br></br>
                        <p>Our experts optimize your bids and manages them perfectly to keep the cost per click lowest and boost your bottom line.</p>

                        </div>
                        <div className='bx-new'>
                        <h6>TARGETING & SCHEDULING</h6>
                        <br></br>
                        <p>Showing your ads to everybody is nothing more than a waste of resources because not everybody needs your products or services. Hence, our experts determine buyer persona to find who is going to buy your products. Once we know it, we use the concepts of behavioural science to decide the schedules for your advertisements.</p>
                        
                        </div>
                        <div className='bx-new'>
                        <h6>CONVERSION TRACKING</h6>
                        <br></br>
                        <p>Conversion tracking is crucial to decide the success of a Google AdWords campaign. Our AdWords specialists apply conversion codes to your website to ensure each lead is tracked.</p>

                        </div>
                        <div className='bx-new'>
                        <h6>PERFORMANCE ANALYSIS</h6>
                        <br></br>
                        <p>We keep analysing the performance of your campaign to figure out how successful different ads are. We continue with the ads performing and remove and replace non-performing and underperforming ads.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>REPORTING</h6>
                        <br></br>
                        <p>A detailed progress report is emailed to you every month, including the activities performed and their performance. The report is easy to understand and defines whether we match your expectations or not. You can also talk to your PPC manager regarding the report and get clarifications for your doubts. Your feedback is also welcomed warmly, and we act on them to provide the best service experience to you.</p>
                        <p>Let’s talk now.</p>
                        </div>
                        </DsnGrid>
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}


            {/*Start Gallery List*/}
            <BoxGallery className="section-margin" col={3} colMobile={1} colGap={0} rowGap={0}>
                <BoxGalleryItem
                    src="/assets/img/project/project1/4.jpg" caption="Trevor Bittinger"
                    groupPopup="gallery"/>
                <BoxGalleryItem src="/assets/img/project/project1/2.jpg" caption={"Sef McCullough"}
                                groupPopup="gallery"/>
                <BoxGalleryItem src="/assets/img/project/project1/3.jpg" caption={"Sef McCullough"}
                                groupPopup="gallery"/>
            </BoxGallery>
            {/*End Gallery List*/}

            {/*Start Box Info With Image*/}
            {/* <BoxImageVertical src="/assets/img/project/project1/5.jpg" className="section-margin">
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

            {/*Start Box Info Center Content*/}
            {/* <div className="p-relative section-margin v-dark-head text-center">
                <ParallaxImage src="/assets/img/project/project1/7.jpg" overlay={4}/>
                <Container className="v-middle z-index-1">
                    <ButtonPopup href="http://media.w3.org/2010/05/sintel/trailer.mp4"/>
                </Container>
            </div> */}
            {/*End Box Info Center Content*/}


            {/*Start Box Info Move Content*/}
            {/* <div className="p-relative section-margin">
                <ParallaxImage src="/assets/img/project/project1/13.jpg" overlay={4}/>
                <MoveBox>
                    <h3> Take a seat at a table on <br/> the ground floor </h3>
                    <p className="mt-30">
                        Not quite a cafe, not quite a restaurant, we offer innovative fare for breakfast, lunch and
                        alongside specialty coffee and a wine list featuring varietals ranging from South Africa to
                        Spain...
                    </p>
                </MoveBox>
            </div> */}
            {/*End Box Info Move Content*/}


            <FJustifiedGallery
                images={[
                    {src: "/assets/img/project/project1/6.jpg", caption: "TIME TAG WATCH"},
                    {src: "/assets/img/project/project1/8.jpg", caption: "TIME TAG WATCH"},
                    {src: "/assets/img/project/project1/9.jpg", caption: "TIME TAG WATCH"},
                    {src: "/assets/img/project/project1/10.jpg", caption: "TIME TAG WATCH"},
                    {src: "/assets/img/project/project1/11.jpg", caption: "TIME TAG WATCH"},
                    {src: "/assets/img/project/project1/12.jpg", caption: "TIME TAG WATCH"},
                ]}
                className="section-margin"
            />


            <NextProject heroContent={nextData} overlay={nextData.overlay}/>


        </React.Fragment>
    );
}


export default TimeTagWatch;