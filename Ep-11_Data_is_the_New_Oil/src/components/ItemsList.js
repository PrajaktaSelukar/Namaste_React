import { REST_LOGO_URL } from "../utils/constants";

const ItemsList = ({ items }) => {
  return (
    <div>
        { items?.map(item => {
            const { id, name, price, defaultPrice, description, imageId, showImage } = item.card.info;
            
            return (
                <div 
                    key={id} 
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                    <div className="w-9/12">
                        <div className='flex flex-col p-2'>
                            <span>{ name }</span>
                            <span>₹ { (price || defaultPrice) / 100 }</span>
                        </div>
                        <p className='text-xs p-2'>{ description }</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 mx-12 bg-white text-black shadow-lg">Add +</button>
                        </div>
                        { showImage && <img 
                            src={ REST_LOGO_URL + imageId }
                            className="w-full"
                        /> }
                    </div>
                </div>
            )
        }) }
      </div>
  )
}

export default ItemsList;