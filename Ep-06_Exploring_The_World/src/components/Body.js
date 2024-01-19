import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/mockdata";

const Body = () => {
    // State/Local Variable - Super powerful variable of a component
    [listOfRestaurants, setListOfRestaurants] = useState([]);

    [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    // useEffect is called after rendering jsx
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const dataProxy = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.456333351378966&lng=78.37263149036954&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.456333351378966&lng=78.37263149036954&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        
        //Optional chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

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
                    filteredRestaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
                    })
                }
            </div>
        </div>
    )
};

export default Body;