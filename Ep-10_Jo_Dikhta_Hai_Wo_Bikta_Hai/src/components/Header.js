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
        <div className="flex justify-between bg-pink-100 sm:bg-yellow-50 shadow-lg m-2 mb-2">
            <div className="logo-container">
                <img className="w-40" src={ APP_LOGO_URL } />
            </div>
            <div className="flex items-center">
                <ul className="flex p-2.5 m-2.5">
                    <li className="px-4">
                        Online Status : { onlineStatus ? "✅" : "🔴" }
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
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