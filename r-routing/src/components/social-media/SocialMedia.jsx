import React, {useEffect, useRef} from 'react'
import {dsnCN} from '../../hooks/helper'
import './style.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faTwitter, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {splittingItems} from "../../hooks/Spltting";


function SocialMedia({className}) {
    const ref = useRef();
    const socialData = [
        {link: "https://www.facebook.com/Gtftechnologiesindia/", icon: faFacebookF},
        {link: "https://twitter.com/gtfTechnologies", icon: faTwitter},
        {link: "https://www.instagram.com/gtf_technologies/", icon: faInstagram},
        {link: "https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F18518010%2Fadmin%2F", icon: faLinkedinIn},
    ];


    useEffect(() => {
        splittingItems(ref.current, 'li')
    });

    return (
        <ul className={dsnCN('social-one', className)} ref={ref}>
            {socialData.map((item, index) =>
                <li key={index}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={item.icon}/>
                    </a>
                </li>
            )}
        </ul>

    )
}

export default SocialMedia