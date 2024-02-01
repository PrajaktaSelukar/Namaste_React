import { useState, useEffect } from "react";
import APP_LOGO_URL from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Log In");

    const onlineStatus = useOnlineStatus();
    
    useEffect(() => {
        console.log("useEffect is called");
    }, []);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={ APP_LOGO_URL } />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status : { onlineStatus ? "✅" : "🔴" }
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/restaurants/123">Cart</Link>
                    </li>
                    <button className="login" onClick={()=> {
                        // btnName = "Log Out";
                        btnNameReact === "Log In"
                         ? setBtnNameReact("Log Out")
                         : setBtnNameReact("Log In");
                    }}>{ btnNameReact }</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;