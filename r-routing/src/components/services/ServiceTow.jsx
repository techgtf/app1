import React from 'react'
import './style.scss'


import DsnGrid from "../DsnGrid";
import type {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";

const ServicesDetails = [
    {
        title: "OUR MISSION",
        description: `Our mission is to innovate, prepare, and provide versatile, user-friendly, productive, and comprehensive digital marketing solutions to present and future digital marketing industry requirements. At Milestone, we endeavor to enable our clients to make a convincing digital presence to give inventive and influential coordinated digital marketing planning, helping our customers develop their organizations and understand their digital marketing goals. We believe that incredible work originates from the pure heart and innovative mind.`,
    }
    // {
    //     title: "UI-UX DESIGN",
    //     description: `As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities.`,
    // },
    // {
    //     title: "WEB DEVELOPMENT",
    //     description: `As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities.`,
    // },
    // {
    //     title: "WEB DEVELOPMENT",
    //     description: `As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities.`,
    // }
]

const ServiceTow = ({className, ...restProps}: DsnGridProps) => {
    return (
        <DsnGrid className={dsnCN('dsn-services service-two', className)} {...restProps}>
            {ServicesDetails.map(
                (item, index) =>
                    <div className='service-item' key={index}>
                        <div className="line-before mb-20"/>
                        <h4 className='title-block'>{item.title}</h4>
                        <p className='mt-15 dsn-auto'>{item.description}</p>
                    </div>
            )}

        </DsnGrid>
    );
};


export default ServiceTow