import React from "react";
import Navbar, {Nav} from "../../nav/Navbar";
import Brand from "../../brand/Brand";
import MenuContent from "./MenuContent";


const menuContent = [
    {name: "Home", to: "/"},

    {

        name: "About",
        dropdownMenu: [
            {name: "Gtf Technologies", to: "/about"},
            {name: "Partners", to: "/partners"},
        ]
    },

    {name: "What we do", to: "/what-we-do"},

    {
        name: "Works",
        dropdownMenu: [
            {name: "Our Clients", to: "/our-clients"},
            {name: "Portfolio", to: "/gtf-portfolio"},
            {name: "Case Studies", to: "/case-study"},
            {name: "Client Testimonial", to: "/client-testimonial"},
        ]
    },

    {name: "Blog", to: "/blog-details"},
    {
        name: "Career",
        dropdownMenu: [
            {name: "Employees Testimonial", to: "/employee-testimonial"},
            {name: "Work Culture", to: "/work-culture"},
            {name: "Work With Us", to: "/work-with-us"},
            
        ]
    },
    {name: "Contact", to: "/contact"},
];

const DroowMenu = ({hamburger}) => {

    let $key = 0;
    const getSubMenu = (items) => {
        $key++;
        if (items.dropdownMenu) {
            return (<Nav.Dropdown name={items.name}
                                  key={$key}>{items.dropdownMenu.map(item => getSubMenu(item))}</Nav.Dropdown>);
        }
        return (
            <Nav.Link to={items.to} key={$key}>{items.name}</Nav.Link>
        );
    }


    return (
        <Navbar hamburger={hamburger}>
            <Navbar.Brand to={"/"}>
                <Brand width="80px" height="26px"/>
            </Navbar.Brand>

            <Navbar.Collapse cover="Menu">
                <Nav>
                    {menuContent.map(item => getSubMenu(item))}
                </Nav>
                <MenuContent className="section-margin"/>
            </Navbar.Collapse>
        </Navbar>
    );

}

DroowMenu.defaultProps = {
    hamburger: false
}


export default DroowMenu;