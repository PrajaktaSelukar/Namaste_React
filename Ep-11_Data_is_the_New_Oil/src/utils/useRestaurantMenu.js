import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

// This Hook receives resId
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    // fetch data
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();

        setResInfo(json.data)
    };

    return resInfo;
};
// This Hook returns the restaurant information back

export default useRestaurantMenu;