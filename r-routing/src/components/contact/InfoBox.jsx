import React from 'react';
import './style.scss'
import {dsnCN} from "../../hooks/helper";

function InfoBox({className}) {
    return (

        <div className={dsnCN('box-info-contact', className)}>
            <h3>Start a new project?</h3>
            <h5 className="mt-30">Visit our studio at</h5>
            <p className="mt-10">
                Sed ut perspiciatis unde omnis iste natus error sit vo
                luptatem accusantium natus error sit omnis iste natus
            </p>

            <ul className="mt-30">
                <li>
                    <span className="mr-10">Call Us</span>
                    <a href="tel:+1 (800) 990 8877" target="_blank" rel="noreferrer">+1 (800) 990 8877</a>
                </li>
                <li>
                    <span className="mr-10">Whatsapp</span>
                    <a href="http://wa.me/+1 (800) 990 8877" target="_blank" rel="noreferrer">+1 (800) 990 8877</a>
                </li>
                <li>
                    <span className="mr-10">Email</span>
                    <a href="mailto:info@example.com" target="_blank" rel="noreferrer">Hello@gtftechnologies.com</a>
                </li>
                <li>
                    <span>Address</span>
                    <a href="#0" target="_blank" rel="noreferrer">&nbsp;&nbsp;Noida | Delhi | Gurgaon | Pune |<br></br> &nbsp;&nbsp;Mumbai | Banglore | Canada | Dubai</a>
                </li>
                <li>
                    <span className="mr-10"></span>
                    <a href="#0" target="_blank" rel="noreferrer">A-62, 2nd Floor, Sec - 2, Noida - 201301 , U.P., India</a>
                </li>
                
            </ul>
        </div>

    );
}

export default InfoBox;