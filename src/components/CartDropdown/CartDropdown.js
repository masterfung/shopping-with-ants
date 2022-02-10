import { Menu, Dropdown, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cartSlice";

import "./CartDropdown.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const cartItems = selectCartItems(state);

  return (
    cartItems.length === 0
    ? ( <Dropdown overlay={
        <Menu className="cart-dropdown">
          <Menu.Item key="checkout-notice-disabled" className="checkout-section">
            <div className="no-item-text">There are no items in the cart</div>
            <Button disabled className="checkout-btn">Go to Checkout</Button>
          </Menu.Item>
        </Menu>
      }>
        <span onClick={e => e.preventDefault()}>
          <CartIcon />
        </span>
        
      </Dropdown>
      )
    : (
      <Dropdown trigger={["click"]} overlay={
        <Menu className="cart-dropdown" >
          {
            cartItems.map(cartItem => {
              const uuid = uuidv4();
              console.log("UUID", uuid);
              return <CartItem key={uuid} id={uuid} item={cartItem} />
            })
          }
          <Menu.Item key="checkout-working" className="checkout-section">
            <Link to="/checkout" onClick={() => dispatch(toggleCartHidden())}>
              <Button className="checkout-btn">Go to Checkout</Button>
            </Link>
          </Menu.Item>
        </Menu>
      }>
        <span onClick={e => e.preventDefault()}>
          <CartIcon />
        </span>
        
      </Dropdown>
      )
  )
};

export default Cart;