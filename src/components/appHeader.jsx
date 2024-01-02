import { Link } from "react-router-dom";
import { LogoSvg } from "./staticImages";
import { CgProfile } from "react-icons/cg";

const AppHeader = () => {
    return (
        <div className="appHeader conatainerFluid conatainerFluid customfixed">
            <div className="flexheader dflex contentBetween itemsCenter">
                <Link to={'/'} className="logo">
                    <img src={LogoSvg} alt={LogoSvg} />
                </Link>
                <nav className="appNavBar dflex itemsCenter">
                    <ul className="navItem dflex">
                        <li><Link to={'/'} className="navlink">Home</Link></li>
                        <li><Link to={'/'} className="navlink">Movies</Link></li>
                        <li><Link to={'/'} className="navlink">Series</Link></li>
                        <li><Link to={'/'} className="navlink">Hollywood</Link></li>
                    </ul>
                    <div className="userProfile dflex itemsCenter">
                        <button className="profileIcon"><CgProfile /></button>
                        <div className="drpUser">
                            <span>Edit</span>
                            <span>Log Out</span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default AppHeader;