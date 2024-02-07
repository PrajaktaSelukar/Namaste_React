import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    // State/Local Variable - Super powerful variable of a component
    [listOfRestaurants, setListOfRestaurants] = useState([]);

    [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    const resList = useRestaurantList();

    // using useEffect to fetch data only after initial render of the <Body />
    useEffect(() => {
        if(resList) {
            setListOfRestaurants(resList);
            setFilteredRestaurants(resList);
        }
    }, [resList]);

    // calling Higher order component that returns RestaurantCard with promoted label
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // using Custom Hooks to get online status of the user
    const onlineStatus = useOnlineStatus();

    const { loggedInUser, setUserName } = useContext(UserContext);

    if(!onlineStatus) {
        return (
            <h1>Looks like you are Offline! Please check your Internet Connection.</h1>
        );
    }

    // Conditional Rendering    
    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input
                        type="text"
                        className="px-1 border border-solid border-black"
                        placeholder="Search here"
                        value={searchText}
                        onChange={ (e) => setSearchText(e.target.value) }
                    />
                    <button 
                        className="px-4 py-2 bg-green-100 m-4 rounded-xl"
                        onClick={
                            () => {
                                // Filter the restaurants cards and update the UI
                                const filteredRestaurants = listOfRestaurants.filter(
                                    (res) => res.info.name.toLowerCase().includes(searchText)
                                );

                                setFilteredRestaurants(filteredRestaurants);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button 
                        className="px-4 py-2 bg-gray-100 rounded-xl" 
                        onClick={() => {
                            const filteredRestaurants = listOfRestaurants.filter(
                                (res) => res.info.avgRating > '4'
                            );
                            setFilteredRestaurants(filteredRestaurants);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>User Name : </label>
                    <input 
                        className="border border-black p-2 m-2"
                        value={ loggedInUser }
                        onChange={ (e) => setUserName(e.target.value) } 
                    ></input>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant) => 
                        <Link 
                            to={"/restaurants/" + restaurant?.info?.id}
                            key={ restaurant?.info?.id }
                        >
                            { restaurant?.info?.aggregatedDiscountInfoV3 && Object.keys(restaurant?.info?.aggregatedDiscountInfoV3)?.length ? (
                                <RestaurantCardPromoted key={restaurant?.info?.id} resData={restaurant} />
                            ) : (
                                <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
                            ) }
                        </Link>
                    )
                }
            </div>
        </div>
    )
};

export default Body;