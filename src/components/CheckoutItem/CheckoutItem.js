import { Button } from "antd";

import "./CheckoutItem.scss";

const CheckoutItem = ({cartItem: {imageUrl, name, quantity, price }}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">{quantity}</div>
      <div className="price">${price * quantity} </div>
      <div className="remove-button">
        <Button type="primary" danger size="large" shape="circle">&#10005;</Button>
      </div>
    </div>
  );
};

export default CheckoutItem;