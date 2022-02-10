import { Menu } from "antd";

import "./CartItem.scss";

const CartItem = ({item: { imageUrl, price, name, quantity }, id}) => {
  console.log('cart item key', id);
  return (
    <Menu.Item className="cart-item" key={`${id}-name`}>
      <img src={imageUrl} alt={`image of ${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{`${quantity} X $${price}`}</span>
      </div>
    </Menu.Item>
  )
};

export default CartItem;

