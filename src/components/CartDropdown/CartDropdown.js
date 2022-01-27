import { Menu, Dropdown, Button } from "antd";
import { useSelector } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartItem from "../CartItem/CartItem";

import "./CartDropdown.scss";

const Cart = () => {
  const { hidden, cartItems} = useSelector(state => state.cart);

  return (
    cartItems.length === 0
    ? <CartIcon />
    : (
      <Dropdown trigger={['click']} overlay={
        <Menu className="cart-dropdown" >
          {
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          }
          <Menu.Item className="checkout-section">
            <Button className="checkout-btn">Go to Checkout</Button>
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