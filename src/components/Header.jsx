import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header =()=> {
    const [loginBtn,setLoginBtn] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
            <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
            <ul>
                <li><Link to ="/">HOME</Link></li>
                <li><Link to ="/about">About</Link></li>
                <li><Link to ="/contact">Contact</Link></li>
                <li>CART</li>
                <button className="login-btn" onClick={()=>{
                   loginBtn==="Login" 
                   ?setLoginBtn("Logout")
                   :setLoginBtn("Login")
                }}>{loginBtn}</button>
                    
            </ul>
            </div>
        </div>
    )
}

export default Header;
                    
