import React, {useState, Suspense} from "react";
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import useEffectLocation from "../hooks/useEffectLocation";

import './style.scss';

const Scrollbar = React.lazy(() => import("smooth-scrollbar"));

const Home = React.lazy(() => import("../views/home/Home"));
const SliderOne = React.lazy(() => import("../views/slider/SliderOne"));
const SliderTow = React.lazy(() => import("../views/slider/SliderTow"));
const SliderThree = React.lazy(() => import("../views/slider/SliderThree"));

const Work = React.lazy(() => import("../views/Work"));
const WorkTow = React.lazy(() => import("../views/WorkTow"));
const ProjectDetails = React.lazy(() => import("../views/portfolio/ProjectDetails"));

const About = React.lazy(() => import("../views/About"));
const Contact = React.lazy(() => import("../views/Contact"));
const BlogDetails = React.lazy(() => import("../views/blog/BlogDetails"));
const EmployeeTestimonial = React.lazy(() => import("../views/employee-testimonial"));
const WorkCulture = React.lazy(() => import("../views/work-culture"));
const WorkWithUs = React.lazy(() => import("../views/work-with-us"));
const JobDescription = React.lazy(() => import("../views/job-description"));
const ClientTestimonial = React.lazy(() => import("../views/client-testimonial"));
const GtfPortfolio = React.lazy(() => import("../views/gtf-portfolio"));
const CaseStudy = React.lazy(() => import("../views/case-study"));
const WhatWeDo = React.lazy(() => import("../views/what-we-do"));
const Partners = React.lazy(() => import("../views/partners"));
const OurClients = React.lazy(() => import("../views/our-clients"));
const ATSPiousOrchards = React.lazy(() => import("../views/ats-pious-orchards"));
const ATSFloralPathways = React.lazy(() => import("../views/ats-floral-pathways"));
const M3MCommercialProperty = React.lazy(() => import("../views/m3m-commercial-property"));
const OmaxeChandniChowk = React.lazy(() => import("../views/omaxe-chandni-chowk"));
const SupertechRomano = React.lazy(() => import("../views/supertech-romano"));
const Propfrill = React.lazy(() => import("../views/propfrill"));
const LifeAtGtf = React.lazy(() => import("../views/life-at-gtf"));
const PrivacyPolicy = React.lazy(() => import("../views/privacy-policy"));

const Router = () => {

    const [transPage, setTransPage] = useState("in");
    const scrollbar: React.MutableRefObject<null | Scrollbar> = useSelector(state => state.scrollbar);

    const location = useEffectLocation((l) => {
        setTransPage("out");
    })

    const onAnimateEnd = () => {
        if (transPage !== "out") return;
        scrollbar.current?.scrollTo(0, 0, 0);
        window.scrollTo({left: 0, top: 0});
        setTransPage("in");
    }


    return (

        <div id="dsn-content" className={`dsn-transition-page dsn-animate-${transPage}`}
             onAnimationEnd={onAnimateEnd}
        >
            <Suspense fallback={<div className="background-main h-100-v" />}>
                <Routes location={location}>

                    <Route path="/" element={<Home/>}/>

                    <Route path="/slider" element={<SliderOne/>}/>
                    <Route path="/slider-2" element={<SliderTow/>}/>
                    <Route path="/slider-3" element={<SliderThree/>}/>
                    <Route exact path="/what-we-do" element={<Work/>}/>
                    <Route exact path="/portfolio-2" element={<WorkTow/>}/>
                    <Route exact path="/portfolio/:slug" element={<ProjectDetails/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/contact" element={<Contact/>}/>
                    <Route exact path="/blog-details" element={<BlogDetails/>}/>
                    <Route exact path="/employee-testimonial" element={<EmployeeTestimonial/>}/>
                    <Route exact path="/work-culture" element={<WorkCulture/>}/>
                    <Route exact path="/work-with-us" element={<WorkWithUs/>}/>
                    <Route exact path="/job-description" element={<JobDescription/>}/>
                    <Route exact path="/client-testimonial" element={<ClientTestimonial/>}/>
                    <Route exact path="/gtf-portfolio" element={<GtfPortfolio/>}/>
                    <Route exact path="/case-study" element={<CaseStudy/>}/>
                    <Route exact path="/partners" element={<Partners/>}/>
                    <Route exact path="/our-clients" element={<OurClients/>}/>
                    <Route exact path="/ats-Pious-Orchards" element={<ATSPiousOrchards/>}/>
                    <Route exact path="/ats-Floral-Pathways" element={<ATSFloralPathways/>}/>
                    <Route exact path="/m3m-commercial-property" element={<M3MCommercialProperty/>}/>
                    <Route exact path="/omaxe-chandni-chowk" element={<OmaxeChandniChowk/>}/>
                    <Route exact path="/supertech-romano" element={<SupertechRomano/>}/>
                    <Route exact path="/propfrill" element={<Propfrill/>}/>
                    <Route exact path="/life-at-gtf" element={<LifeAtGtf/>}/>
                    <Route exact path="/privacy-policy" element={<PrivacyPolicy/>}/>
                    <Route exact path="*" element={<h1>Not Found</h1>}/>
                </Routes>
            </Suspense>
        </div>


    );
}

export default React.memo(Router);