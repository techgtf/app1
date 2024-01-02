import React from 'react';
import NavLink from "../button/NavLink";
import {dsnCN} from "../../hooks/helper";


function MenuFooter({className, ...restProps}) {
    const paginate = [
        {link: "/partners", title: "Partners"},
        {link: "/our-clients", title: "Our Clients"},
        {link: "/gtf-portfolio", title: "Portfolio"},
        {link: "/case-study", title: "Case Study"},
        {link: "/client-testimonial", title: "Client Testimonials"},
        {link: "/employee-testimonial", title: "Employee Testimonials"},
        {link: "/work-culture", title: "Work Culture"},
        {link: "/work-with-us", title: "Work With Us"}
    ];
    return (
        <ul className={dsnCN('col-menu', className)} {...restProps}>
            {
                paginate.map(
                    (item, i) =>
                        <li key={i}><NavLink to={item.link}>{item.title}</NavLink></li>
                )
            }
        </ul>
    );
}

export default MenuFooter;

