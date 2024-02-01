import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    // State/Local Variable - Super powerful variable of a component
    [listOfRestaurants, setListOfRestaurants] = useState([]);

    [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    const resList = useRestaurantList();

    useEffect(() => {
        if(resList) {
            setListOfRestaurants(resList);
            setFilteredRestaurants(resList);
        }
    }, [resList]);

    const onlineStatus = useOnlineStatus();

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
            <div className="search-filter-box">
                <div className="search">
                    <input
                        type="text"
                        className="search-box" 
                        value={searchText}
                        onChange={ (e) => setSearchText(e.target.value) }
                    />
                    <button onClick={
                        () => {
                            // Filter the restaurants cards and update the UI
                            const filteredRestaurants = listOfRestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText)
                            );

                            setFilteredRestaurants(filteredRestaurants);
                    }}>
                        Search
                    </button>
                </div>
                <div className="filter">
                    <div 
                        className="filter-btn" 
                        onClick={() => {
                            const filteredRestaurants = listOfRestaurants.filter(
                                (res) => res.info.avgRating > '4'
                            );
                            setFilteredRestaurants(filteredRestaurants);
                        }}
                    >
                        Top Rated Restaurants
                    </div>
                </div>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant) => 
                        <Link 
                            to={"/restaurants/" + restaurant?.info?.id}
                            key={ restaurant?.info?.id }
                        >
                            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
                        </Link>
                    )
                }
            </div>
        </div>
    )
};

export default Body;