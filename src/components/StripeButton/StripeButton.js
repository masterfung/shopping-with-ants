import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_QyrRuE0JZE8PtNk118x97Hxn";

  const onToken = token => {
    console.log(token);

  }
  return (
    <StripeCheckout
      currency="USD"
      name="Fantastic Wears Inc."
      label="Pay Now"
      billingAddress
      shippingAddress
      description={`Your total amount is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton