import React from 'react';
import NavLink from "../button/NavLink";
import {dsnCN} from "../../hooks/helper";


function MenuFooter({className, ...restProps}) {
    const paginate = [
        {link: "/", title: "Home"},
        {link: "/about", title: "About"},
        {link: "/what-we-do", title: "What We Do"},
        {link: "/blog-details", title: "Blog"},
        {link: "/contact", title: "Contact"}
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