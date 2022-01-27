import { ReactComponent as ShoppingIcon } from "../../assets/icons/shopping-bag.svg";
import { useSelector, useDispatch } from "react-redux";
import { getTotalCartCount } from "../../redux/cart/cartSlice";

import "./CartIcon.scss";

const CartIcon = () => {
  const cartTotal = useSelector(state => state.cart.count);
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartTotal}</span>
    </div>
  )
};

export default CartIcon;