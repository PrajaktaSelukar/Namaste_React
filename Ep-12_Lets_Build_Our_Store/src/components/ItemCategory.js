import { useState } from "react";
import ItemsList from "./ItemsList";

const ItemCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);

  let handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      {/* Header */}
      <div className="flex justify-between cursor-pointer" onClick={ handleClick }>
        <span className="font-bold text-lg py-2">
          { data.title } ({ data.itemCards.length })
        </span>
        <span>{ showItems ? '⬇️' : '⬆️'}</span>
      </div>
      {/* Accordian body */}
      { showItems && <ItemsList items={data.itemCards} /> }
    </div>
  )
}

export default ItemCategory;