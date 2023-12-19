import { useState } from "react"
import { IoMdClose } from "react-icons/io";

const Login = ({ loggedIn }) => {
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPass, setErrorPass] = useState(false);
    const [formdata, setFormData] = useState({
        email: 'admin', password: 'admin'
    })
    const HndlLogin = () => {        
        if (formdata.email === '') setErrorEmail(true)
        if (formdata.password === '') setErrorPass(true)
    }

    const hndlClose = () => loggedIn(false)

    return (
        <div className="Login">
            <button className="closebtn" onClick={hndlClose}><IoMdClose /></button>
            <div className="heading">Sign In</div>
            <div className="login-inputbox">
                <input
                    type="email"
                    placeholder="Enter Email Address"                    
                />
                {errorEmail ? <span style={{color:'#000'}}>Enter Valid Email Address</span> : ''}
            </div>
            <div className="login-inputbox">
                <input
                    type="text"
                    placeholder="Enter Password"
                />
                {errorPass ? <span style={{color:'#000'}}>Enter Valid Password</span> : ''}
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