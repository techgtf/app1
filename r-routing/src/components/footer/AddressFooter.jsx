import React from 'react';
import {dsnCN} from "../../hooks/helper";

function AddressFooter({className, ...restProps}) {
    return (
        <div className={dsnCN('col-address' , className)} {...restProps}>
            
            <div className={dsnCN('col-menu' ,className)} {...restProps}>
            <p>
                <strong>M</strong> <span>:</span>  +91 9650337799
            </p>
            <p>
                <strong>M</strong> <span>:</span>  +91 9570449906
            </p>
            <p className="mt-2">
                <strong>M</strong> <span>:</span> +91 9560337799
            </p>
            <p className="mt-2">
                <strong>E</strong> <span>:</span> <a href="0#"> hello@gtftechnologies.com</a>
            </p>
        </div>
        <br></br>
            

            <h4 className="footer-title">Address</h4>

            <p>
            A-62, 2nd Floor, Sector 2<br/> Noida - 201301 ,<br/>Uttar Pradesh, India
            </p>
        </div>
    );
}

export default AddressFooter;