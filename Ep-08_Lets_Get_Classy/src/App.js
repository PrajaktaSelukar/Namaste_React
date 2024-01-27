import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *      - RestaurantCard
 *          -   Img
 *          -   Name of Res, Star rating, cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            { /**if path = /  */ }
            {/* <Body /> */}
            { /**if path = /about  */ }
            {/* <About /> */}
            { /**if path = /contact  */ }
            {/* <Contact /> */}
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));   

// root.render(<AppLayout />);  // render the component

root.render(<RouterProvider router={appRouter}/>);  // render the component


