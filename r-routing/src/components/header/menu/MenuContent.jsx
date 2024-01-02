import React from 'react';
import {dsnCN} from "../../../hooks/helper";

function MenuContent({className}) {
    const socialData = [
        {link: "https://www.facebook.com/Gtftechnologiesindia/", name: "Facebook."},
        {link: "https://twitter.com/gtfTechnologies", name: "Instagram."},
        {link: "https://www.instagram.com/gtf_technologies/", name: "Linkedin."},
        {link: "https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F18518010%2Fadmin%2F", name: "Twitter."}
    ];
    return (
        <div className={dsnCN('container-content  d-flex flex-column justify-content-center', className)}>
            <div className="nav__info">
                <div className="nav-content">
                    <h5 className="sm-title-block mb-10">Studio</h5>
                    <p><b>Noida | Delhi | Gurgaon | Pune | Mumbai | Banglore | Canada | Dubai</b></p>
                    <p>A-62, 2nd Floor, Sector 2 <br/>
                     Noida - 201301 , Uttar Pradesh, India
                    </p>

                </div>
                <div className="nav-content mt-30">
                    <h5 className="sm-title-block mb-10">Contact</h5>
                    <p className="links over-hidden mb-1">
                        <a className="link-hover" href="tel:+91 9560337799" data-hover-text="+91 9560337799">
                        +91 9560337799
                        </a> ,

                        <a className="link-hover" href="tel:+91 9560337799" data-hover-text="+91 9560337799">
                        +91 9810449906
                        </a> ,

                        <a className="link-hover" href="tel:+91 9560337799" data-hover-text="+91 9560337799">
                        +91 9910336323
                        </a>
                    </p>
                    <p className="links over-hidden">
                        <a className="link-hover" href="mailto:info@dsngrid.com"
                           data-hover-text="info@dsngrid.com">hello@gtftechnologies.com</a>
                    </p>
                </div>
            </div>
            <div className="nav-social nav-content mt-30">
                <div className="nav-social-inner p-relative">
                    <h5 className="sm-title-block mb-10">Follow us</h5>
                    <ul>
                        {socialData.map((item, index) =>
                            <li key={index}>
                                <a href={item.link} target="_blank" rel="nofollow noopener noreferrer">{item.name}</a>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MenuContent;