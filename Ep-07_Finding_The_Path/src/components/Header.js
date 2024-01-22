import { useState, useEffect } from "react";
import APP_LOGO_URL from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    let btnName = "Log In";
    // Javascript variable won't work because the Component has not rendered
    // That's why we use State variables => renders component => refreshes UI
    // When State variable changes, whole Header Component is not rendered
    const [btnNameReact, setBtnNameReact] = useState("Log In");
    // How it is const and we can change the value
    // Once setBtnNameReact is called, it will first value of btnNameReact, an then Component is rendered, 
    // then find the diff between older and newer version, see that only button is changed

    // if no depedency array => useEffect is called on every render
    // useEffect(() => {
    //     console.log("useEffect is called");
    // });
    // if depedency array is empty => useEffect is called only once when component loads
    useEffect(() => {
        console.log("useEffect is called");
    }, []);
    // if depedency array is btnNameReact => useEffect is called when component loads and value of btnNameReact changes
    // useEffect(() => {
    //     console.log("useEffect is called");
    // }, btnNameReact);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={ APP_LOGO_URL } />
            </div>
            <div className="nav-items">
                <ul>
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