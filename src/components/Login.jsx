import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router";

const Login = ({ loggedIn }) => {

    const [formdata, setFromData] = useState({
        email: '', password: ''
    })

    const hndlChange = (e) => {
        const { name, value } = e.target;
        setFromData((prevData) => ({ ...prevData, [name]: value }));
    }

    const Navigate = useNavigate()

    const HndlLogin = () => {
        if (!formdata.email || !formdata.password) {
            alert("Please Enter Valid Email and Password");
            return;
        }
        
        if (formdata.email === "admin" && formdata.password === "admin") {            
            localStorage.setItem("email", formdata.email);
            localStorage.setItem("password", formdata.password);
            Navigate("/movieslist");
        } else {
            alert("Wrong credentials");
        }
    };
    const hndlClose = () => loggedIn(false)

    return (
        <div className="Login">
            <button className="closebtn" onClick={hndlClose}><IoMdClose /></button>
            <div className="heading">Sign In</div>
            <div className="login-inputbox">
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    onChange={hndlChange}
                />
            </div>
            <div className="login-inputbox">
                <input
                    type="text"
                    name="password"
                    placeholder="Enter Password"
                    onChange={hndlChange}
                />
            </div>
            <button
                className="btn"
                style={{ textAlign: 'center' }}
                onClick={HndlLogin}
            >Sign In</button>
        </div>
    )
}

export default Login;