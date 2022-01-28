import { ReactComponent as ShoppingIcon } from "../../assets/icons/shopping-bag.svg";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import "./CartIcon.scss";

const CartIcon = () => {
  const state = useSelector(state => state);
  const itemCount = selectCartItemsCount(state);

  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
};

export default CartIcon;