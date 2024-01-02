import React from 'react';
import {dsnCN} from "../../hooks/helper";

function Copyright({className, ...restProps}) {
    return (
        <div className={dsnCN('copyright', className)} {...restProps}>
            <div className="text-center">
                <p>© {new Date().getFullYear()} GTF Technologies  © All Rights Reserved</p>
                <div className="copyright-text over-hidden">
              
                    <a href="/privacy-policy" target="_blank">
                        Privacy Policy
                    </a>
                    <a href="0#" target="_blank">
                        Site Map
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Copyright;