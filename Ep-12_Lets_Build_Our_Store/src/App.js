import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./stores/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery") );

// const About = lazy(() => import("./components/About") );

const AppLayout = () => {
    const [userName, setUserName] = useState('');

    // authentication
    useEffect(() => {
        const data = {
            name: "Prajakta"
        };
        setUserName(data.name);
    }, []);

    return (
        // This wraps whole app
        <Provider store={appStore}>
            <UserContext.Provider value={ { loggedInUser: userName, setUserName } }>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>

        // This wraps only header, rest(About, RestaurantCard) will have default value, it avoids Outlet
        // <div className="app">
        //     <UserContext.Provider value={ { loggedInUser: userName } }>
        //         <Header />
        //     </UserContext.Provider>
        //     <Outlet />
        // </div>

        // Try to wrap 'Elon Musk' for header
        // Shows Default value
        // <UserContext.Provider value={ { loggedInUser: userName, setUserName } }>
        //     {/* Shows Prajakta */}
        //     <div className="app">
        //         <UserContext.Provider value={ { loggedInUser: 'Elon Musk' } }>
        //             {/* Shows Elon Musk */}
        //             <Header />
        //         </UserContext.Provider>
        //         <Outlet />
        //     </div>
        // </UserContext.Provider>
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
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading ... </h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    }    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));   

// root.render(<AppLayout />);  // render the component

root.render(<RouterProvider router={appRouter}/>);  // render the component


