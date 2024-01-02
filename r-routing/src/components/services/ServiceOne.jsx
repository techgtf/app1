import React from 'react'
import './style.scss'


import DsnGrid from "../DsnGrid";
import type {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";
import LazyImg from "../LazyImg";

const ServicesDetails = [
    {
        icon: 'assets/img/services/1.png',
        title: "RESEARCH",
        description: "Our statistical market research is regularly used to benchmark a company’s brand attributes vs. its competitors equitably. It is smart business to decrease the chance of risk and enhance results with decision focused research.",
    },
    {
        icon: 'assets/img/services/2.png',
        title: "STRATEGY AND PLANNING",
        description: "Somewhere close to the keyword research and the advertising, somebody needs to design the whole marketing procedure in light of client needs, market elements, media choices, and customer substances.",
    },
    {
        icon: 'assets/img/services/3.png',
        title: "CONTENT & CREATIVE",
        description: "Content creation fills discussions. Advertising intensifies its reach. We give the vital vision, imaginative understanding, and assets you have to make useful content and drive conversion.",
    },
]

const ServiceOne = ({className, ...restProps}: DsnGridProps) => {
    return (
        <DsnGrid className={dsnCN('dsn-services service-one', className)} {...restProps}>
            {ServicesDetails.map(
                (item, index) =>
                    <div className='service-item' key={index}>
                            <span className='icon mb-20'>
                                <LazyImg src={item.icon} alt={item.title}/>
                            </span>
                        <h4 className='title-block mb-20'>{item.title}</h4>
                        <p className='mt-15 dsn-auto'>{item.description}</p>
                    </div>
            )}

        </DsnGrid>
    );
};


export default ServiceOne