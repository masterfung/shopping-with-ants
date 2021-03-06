import { Row, Col } from "antd";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

import "./CheckoutPage.scss";
import StripeCheckoutButton from "../../components/StripeButton/StripeButton";

const CheckoutPage = () => {
  const state = useSelector(state=> state);
  const cartItems = selectCartItems(state);
  const cartTotal = selectCartTotal(state);
  return (
    <Row className="checkout-page">
      <Col className="checkout-header ">
        <div className="header-block text-center">
          <span>Product</span>
        </div>
        <div className="header-block text-center">
          <span>Description</span>
        </div>
        <div className="header-block text-center">
          <span>Quantity</span>
        </div>
        <div className="header-block text-center">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </Col>
      {
        cartItems && cartItems.map(cartItem => <CheckoutItem key={`checkout-page-section-${cartItem.id}`} cartItem={cartItem} />)
      }

      <div className="total">
        <span>Total: {`$${cartTotal}`}</span>
      </div>
      <div className="card-test-warning">
        ** Please use the following test credit card for payments **
        <br />
        4242 4242 4242 4242 EXP: 01/23 CVV: 123
      </div>
      <StripeCheckoutButton price={cartTotal} />
    </Row>
  );
}

export default CheckoutPage;