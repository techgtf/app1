import React from 'react';
import {getPortfolioItem} from "../../api/portfolio/PortfolioData";

import {Container} from "react-bootstrap";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import DsnGrid from "../../components/DsnGrid";
import TextTrigger from "../../animation/TextTrigger";
import FadeUpTrigger from "../../animation/FadeUpTrigger";

//--> Component
import HeaderHalf from "../../components/header/HeaderHalf";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import BoxGallery from "../../components/box-gallery/BoxGallery";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import FJustifiedGallery from "../../components/justified-gallery/FJustifiedGallery";
import NextProject from "../../components/next/NextProject";
import {Helmet} from "react-helmet";


const TimeTagWatch = ({data}) => {


    const nextData = getPortfolioItem(3);


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
                        // href="https://www.behance.net/gallery/57437111/Under-Armour-Cal?tracking_source=search%7CPhotography"
                        // textButton="View Website"
                        overlay={data.overlay}>
                {/* <strong className="color-heading">Seohee Lee</strong> <span> - October 19th 2017</span> */}
            </HeaderHalf>
            {/*End Header Half*/}

            {/*Start Info Project*/}
            <Container className="section-margin">
                <TitleCover>Formulation</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>WEBSITE DESIGN</h2>}
                </TextTrigger>
                <FadeUpTrigger>
                    {(ref) => <>
                        <p className="mt-20" ref={ref}>
                        Simple, Practical, Elegant, and Business-Friendly Designs! Your website is your digital face. Visuals, content, and appearance are its features. Their combined effect creates a magnetic impact on website visitors. The same impact that a killer smile does! Their seductive influence intensifies engagement on your website.
                        </p>
                        <p>Hence you must ensure your digital face features an irresistible charm. How could you ensure it? Here at GTF Technologies, we practice exclusivity. We design persuasive and practical designs following the principles of behavioral science. Thus, our designs attract and entice website visitors to explore your website.</p>
                        {/* <ul className="mt-20 color-heading">
                            <li ref={ref}>Art Direction: Kirk Roush</li>
                            <li className="mt-1" ref={ref}>Photography: Sam Gordon</li>
                            <li className="mt-1" ref={ref}>Copy: Dane Rahlf & Matt Norman</li>
                        </ul> */}
                        <br></br><br></br>
                        <hr></hr><br></br><br></br>

                        <h2>OUR WEBSITE DESIGN SERVICES</h2>

                        <DsnGrid col={2} colGap={50} rowGap={50} colGapTablet={30} rowGapTablet={30}>
                        <div className='bx-new'>
                        <br></br>
                        <h6>CUSTOM WEBSITE DESIGN</h6>
                        <br></br>
                        <p>We don’t sketch a design that we love. Instead, we draw a design that meets your needs. Our design blueprint is formulated based on your requirements and ideas. We share it with you for your approval. Once we get your assent, we turn it into a website that is not only captivating but also practical and business-friendly.</p>
                        </div>

                        <div className='bx-new'>
                        <br></br>
                        <h6>WEBSITE REDESIGN</h6>
                        <br></br>
                        <p>If your existing website is incapable of holding your website visitors, we can redesign your website to boost its conversion rates. Why should you trust our words? We pick the best designers and experts in human behavioral science. They work in tandem to meet your expectations.</p>
                        </div>

                        <div className='bx-new'>
                        <br></br>
                        <h6>ECOMMERCE WEBSITE DESIGN</h6>
                        <br></br>
                        <p>Looking for an engaging and convincing eCommerce website? GTF Technologies can deliver you a conversion-friendly website that will give you an edge over your competition. However, if you have a website, but that website is lagging behind your competition, we can reinvent your website in a way that it will compel them to click on your products.</p>
                        </div>

                        <div className='bx-new'>
                        <br></br>
                        <h6>BLOG DESIGN</h6>
                        <br></br>
                        <p>Blogs drive traffic and generate leads. It is a proven fact that websites that publish user-friendly blogs have more visitors on their websites than those websites which don’t have any blogs. However, the performance of a blog very much hinges upon its designing because people read the texts when visuals and font steal their attention. At GTF Technologies, we understand how to design a blog for optimal results.</p>
                        </div>


                </DsnGrid>
                <br></br><br></br>

                <br></br><br></br>
                <hr></hr><br></br><br></br>

                <h2>WHY CHOOSE GTF TECHNOLOGIES FOR WEB DESIGN</h2>
                <br></br>
                <DsnGrid col={2} colGap={50} rowGap={50} colGapTablet={30} rowGapTablet={30}>
                <div className='bx-new'>
                <h6>DEVICE-FRIENDLY WEBSITE</h6>
                <br></br>
                <p>Gone are the days when people would just use their PCs to access the internet. Now, it is the era of smartphones. So, we create websites that load perfectly on all devices. Thus, no matter on which device a likely buyer of your product opens your website, they will have the best user experience.</p>
                </div>

                <div className='bx-new'>
                <h6>FASTER DELIVERY</h6>
                <br></br>
                <p>Rather than just meeting your expectations, we strive to exceed them. At the same time, we work hard to meet the project deadlines.</p>
                </div>

                <div className='bx-new'>
                <br></br>
                <h6>WE UPDATE YOU AT EVERY STEP</h6>
                <br></br>
                <p>We don’t consider your project as the project of our client but our own. We create a bespoke plan, take approval from you, and execute it flawlessly. Moreover, we also perform any changes you request later. Thus, we deliver the website that you really expect from us.</p>
                <p>Please speak to our experts now.</p>
                </div>

                <div className='bx-new'>
                <br></br>
                <h6>BLOG DESIGN</h6>
                <br></br>
                <p>Blogs drive traffic and generate leads. It is a proven fact that websites that publish user-friendly blogs have more visitors on their websites than those websites which don’t have any blogs. However, the performance of a blog very much hinges upon its designing because people read the texts when visuals and font steal their attention. At GTF Technologies, we understand how to design a blog for optimal results.</p>
                </div>
                </DsnGrid>

                    </>}
                </FadeUpTrigger>
            </Container>
            {/*End Info Project*/}


            {/*Start Gallery List*/}
            <BoxGallery className="section-margin" col={3} colMobile={1} colGap={0} rowGap={0}
                        images={[
                            {src: "/assets/img/project/project2/3.jpg", caption: "Trevor Bittinger"},
                            {src: "/assets/img/project/project2/4.jpg", caption: "Sef McCullough"},
                            {src: "/assets/img/project/project2/5.jpg", caption: "Sef McCullough"}
                        ]}
            />
            {/*End Gallery List*/}

                        <Container className="section-margin">
                       
                        <h1 className="mt-20">WEBSITE DEVELOPMENT</h1>
                        <h6>EMPOWERING YOUR BUSINESS WITH SPECIALIZED WEBSITE DEVELOPMENT</h6>
                    
                        <p className="mt-20">
                        GTF Technologies is a prestigious website development company in India with more than 12 years’ experience in the industry. We specialize in developing conversion-friendly websites. With our more than decade’s practical knowledge, we can easily settle on what technologies and tools can help your business get the preference of Google and your focus group from all across the web.
                        </p>
                        
                        <br></br><br></br>
                        <hr></hr><br></br><br></br>

                        <h2 >OUR WEBSITE DESIGN SERVICES</h2>
                        <br></br>
                        <DsnGrid col={2} colGap={50} rowGap={50} colGapTablet={30} rowGapTablet={30}>
                        <div className='bx-new'>
                        <h6>CMS BASED WEBSITES</h6>
                        <br></br>
                        <p>We have website developers specializing in WordPress, Drupal, Joomla, Magento, and Prestashop, etc. Based on your prerequisites, we recommend the best content management system and develop a custom website matching your needs.</p>
                        </div>

                        <div className='bx-new'>
                        <h6>ECOMMERCE WEB DEVELOPMENT</h6>
                        <br></br>
                        <p>We can develop a smart e-store for you on the basis of your specific needs. Since as an ecommerce store, you have to store the credit card and other important details of your customers, we use top- notch security features and plugins to guard it from malware attacks.</p>
                        </div>

                        <div className='bx-new'>
                        <br></br>
                        <h6>WEB PORTAL DEVELOPMENT</h6>
                        <br></br>
                        <p>We develop custom web portals for travel, real estate, jobs, enterprises, etc. Our ace website builders ensure your portals are highly-functional and secure using advanced web-technologies features.</p>
                        </div>

                        <div className='bx-new'>
                        <br></br>
                        <h6>SINGLE PAGE WEB APPLICATION DEVELOPMENT</h6>
                        <br></br>
                        <p>GTF Technologies creates bespoke single page web applications applying advanced technologies like HTML, CSS, AJAX, and JS. Our SPAs work outstandingly even with low internet speed. So, your users living in areas with poor internet speed can also explore your website page.</p>
                        </div>

                        <div className='bx-new'>
                        <br></br>
                        <h6>FULL STACK DEVELOPMENT</h6>
                        <br></br>
                        <p>GTF Technologies has developers specializing in both front-end and back-end development. Hence, we offer specialized full stack development solutions to our clients.</p>
                        </div>
                        </DsnGrid>

                        <br></br><br></br>
                        <hr></hr><br></br><br></br>

                        <h2>WHY HIRE OUR WEBSITE DEVELOPMENT SERVICES?</h2>


                        <DsnGrid col={2} colGap={50} rowGap={50} colGapTablet={30} rowGapTablet={30}>
                        <div className='bx-new'>
                        <br></br>
                        <h6>CROSS-BROWSER COMPATIBILITY</h6>
                        <br></br>
                        <p>We create cross border compatible websites. So, no matter on which internet browser, Chrome, Firefox, or Safari, somebody tries to open your website, your website loads fast and perfectly.</p>
                        </div>

                        <div className='bx-new'>
                        <br></br>
                        <h6>ATTRACTIVE UI/UX</h6>
                        <br></br>
                        <p>We ensure your website must immediately catch the attention of your target audience and offer website visitors the best user experience.</p>
                        </div>

                        <div className='bx-new'>
                        <br></br>
                        <h6>A THOROUGH TESTING</h6>
                        <br></br>
                        <p>We don’t deliver your website to you immediately as it is done. Instead, we perform an extensive testing to ensure your website is working perfectly.</p>

                        </div>

                        <div className='bx-new'>
                        <br></br>
                        <h6>USER-FRIENDLY</h6>
                        <br></br>
                        <p>We ensure your target audience relish your website because it is the only way to ensure their future visits.</p>
                        <p>Speak to Us Now.</p>
                        </div>

                        </DsnGrid>

            </Container>
            {/*End Info Project*/}

            {/*Start Box Info With Image*/}
            {/* <BoxImageVertical src="/assets/img/project/project2/2.jpg" className="section-margin" overlay={4}>
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


            <FJustifiedGallery rowHeight={300} className="section-margin"
                               images={[
                                   {src: "/assets/img/project/project2/6.jpg", caption: "CAPTION #1"},
                                   {src: "/assets/img/project/project2/7.jpg", caption: "CAPTION #2"},
                                   {src: "/assets/img/project/project2/8.jpg", caption: "CAPTION #3"},
                                   {src: "/assets/img/project/project2/9.jpg", caption: "CAPTION #4"},
                                   {src: "/assets/img/project/project2/10.jpg", caption: "CAPTION #5"},
                                   {src: "/assets/img/project/project2/11.jpg", caption: "CAPTION #6"},
                                   {src: "/assets/img/project/project2/12.jpg", caption: "CAPTION #7"},
                               ]}/>


            <NextProject heroContent={nextData} overlay={nextData.overlay}/>


        </React.Fragment>
    );
}


export default TimeTagWatch;