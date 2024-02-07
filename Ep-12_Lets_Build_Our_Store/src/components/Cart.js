import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../stores/cartSlice";

const Cart = () => {
    // Efficient  - subscribe to the store to read the CartSlice
    const cartItems = useSelector((store) => store.cart.items );
    // Inefficient 
    // const store = useSelector((store) => store );
    // const cartItems = store.cart.items;


    const dispatch = useDispatch();

    const handleClearCart = () => {
        // idspatch action to clear the Cart
        dispatch(clearCart());
    };
  return (
    <div className="m-4 p-4 text-center">
        <h1 className="font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            <button 
                className="p-2 m-2 bg-black text-white rounded-lg"
                onClick={ handleClearCart }
            >Clear Cart
            </button>
            { cartItems.length === 0 && <h1>Cart is empty! Add items to the Cart!</h1> }
            <ItemsList items={ cartItems } />
        </div>
    </div>
  )
}

export default Cart;