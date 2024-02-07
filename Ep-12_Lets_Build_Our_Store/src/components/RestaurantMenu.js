import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemCategory from "./ItemCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    // open items if showIndex is active and initially first one is active
    const [showIndex, setShowIndex] = useState(0);
    // below one has noone expanded initially
    // const [showIndex, setShowIndex] = useState(null);

    const { resId } = useParams();

    // create your own Custom Hook that will fetch the data and give it to RestaurantMenu on the UI
    const resInfo = useRestaurantMenu(resId);
    // How the data is getting RestaurantMenu should not worry about that => this is abstraction

    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, costForTwoMessage, cuisines, areaName, sla, avgRating, totalRatingsString } = resInfo?.cards?.[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const catogories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => {
        return c.card?.card?.["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    });

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{ name }</h1>
            <p> { cuisines.join(',') } - { costForTwoMessage }</p>
            <p> { areaName }, { sla?.lastMileTravelString } </p>
            {
                catogories?.map((category, index) => (
                    <ItemCategory 
                        key={category?.card?.card.title} 
                        data={category?.card?.card} 
                        showItems={index === showIndex ? true : false}
                        setShowIndex={() => setShowIndex(index)}
                    />
                ))
            }
            
        </div>
    )
}

export default RestaurantMenu;