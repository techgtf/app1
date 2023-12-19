import { Link } from "react-router-dom";
import { Logo1 } from "./staticImages";
const Header = () => {
    return (
        <header className="AppHeader">
            <div className="headerflex dflex contentBetween itemsCenter">
                <Link to={'/'} className="logo">
                    <img src={Logo1} alt={Logo1} />
                </Link>
                <div className="headerbtns btn">
                        <p>Login/Signin</p>
                    </div>
                {/* <div className="header-right dflex itemsCenter">
                    <div className="headersearchbox dflex itemsCenter">
                        <input type="text" placeholder="Search Any Movie by Name, Actor Name" />
                        <button className="btn">Search</button>
                    </div>
                </div> */}
            </div>
        </header>
    )
}
export default Header;