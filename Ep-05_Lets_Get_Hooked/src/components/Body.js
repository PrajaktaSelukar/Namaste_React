import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
    // State/Local Variable - Super powerful variable of a component
    [listOfRestaurants, setListOfRestaurants] = useState(resList);

    // Normal JS Variable
    // let listOfRestaurants = [];
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
                <div 
                    className="filter-btn" 
                    onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter(
                            (res) => res.data.avgRating > '4'
                        );
                        setListOfRestaurants(filteredRestaurants);
                    }}
                >
                    Top Rated Restaurants
                </div>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    })
                }
            </div>
        </div>
    )
};

export default Body;