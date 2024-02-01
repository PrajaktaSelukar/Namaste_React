import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

    // create your own Custom Hook that will fetch the data and give it to RestaurantMenu on the UI
    const resInfo = useRestaurantMenu(resId);
    // How the data is getting RestaurantMenu should not worry about that => this is abstraction

    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, costForTwoMessage, cuisines, avgRating, totalRatingsString } = resInfo?.cards?.[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
        <h1>{ name }</h1>
        <p> { cuisines.join(',') } - { costForTwoMessage }</p>
        <h2> Menu </h2>
        <ul>
            { itemCards?.map((item) => 
                <li 
                    key={item.card?.info.id}
                >
                    { item.card?.info?.name } - { item.card?.info?.price || item.card?.info?.defaultPrice }
                </li>
            ) }
        </ul>
    </div>
  )
}

export default RestaurantMenu;