import { ReactComponent as ShoppingIcon } from "../../assets/icons/shopping-bag.svg";

import "./CartIcon.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
};

export default CartIcon;