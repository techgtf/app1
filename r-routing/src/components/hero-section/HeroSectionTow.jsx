import React from 'react';
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import ButtonDefault from "../button/button-default/ButtonDefault";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import BoxRight from "../box-right/BoxRight";
import {ParallaxImageProps} from "../parallax-image/ParallaxImage";

const heroContent = {
    title: "Are you satisfied \nwith your visual identity?", 
    src: '/assets/img/project/project9/3.jpg',
    description: `Our core focus is to identify how you could virtually portray yourself. We will help you in finding out the things which you are missing to reach your target audience. We will also solve the issue and will bring the customers to you. We have done it for our clients and we will do it again for you. just Give us a chance!`,
    to: "portfolio/bastian-bux",
    textButton: "LEARN MORE",
    icon : faAngleRight
};

function HeroSectionTow({...restProps}: ParallaxImageProps) {
    return (
        <BoxRight  {...restProps} src={heroContent.src}>
            <FadeUpTrigger>
                <h2 className="pre-line">{heroContent.title}</h2>

                <p className="mt-30 m-w750 dsn-auto">{heroContent.description}</p>
                <ButtonDefault className="mt-30" icon={heroContent.icon} text={heroContent.textButton}
                               to={heroContent.to}/>
            </FadeUpTrigger>
        </BoxRight>
    );
}

export default HeroSectionTow;