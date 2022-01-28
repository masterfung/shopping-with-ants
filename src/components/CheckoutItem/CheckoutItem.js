import { Button } from "antd";
import { useDispatch } from "react-redux";
import { removeCartItem, decrementCartItemQuantity, incrementCartItemQuantity } from "../../redux/cart/cartSlice";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

import "./CheckoutItem.scss";

const CheckoutItem = ({cartItem: {imageUrl, name, quantity, price }, cartItem}) => {
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <Button icon={<MinusOutlined />} shape="circle" danger size="small" className="minus-btn" onClick={() => dispatch(decrementCartItemQuantity(cartItem))} />
        {quantity}
        <Button icon={<PlusOutlined />} shape="circle" type="primary" size="small" className="plus-btn" onClick={() => dispatch(incrementCartItemQuantity(cartItem))} />
      </div>
      <div className="price">${price * quantity}</div>
      <div className="remove-button">
        <Button type="primary" danger size="large" shape="circle" onClick={() => dispatch(removeCartItem(cartItem))}>&#10005;</Button>
      </div>
    </div>
  );
};

export default CheckoutItem;