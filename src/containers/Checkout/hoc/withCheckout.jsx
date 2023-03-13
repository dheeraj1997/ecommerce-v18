/* eslint-disable no-nested-ternary */
import { SIGNIN } from '../../../constants/routes';
import { calculateTotal } from '../../../helpers/utils';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

const withCheckout = (Component) => withRouter((props) => {
  console.log("with checkout")
  const state = useSelector((store) => ({
    isAuth: !!store.auth.id && !!store.auth.role,
    cart: store.cart,
    shipping: store.checkout.shipping,
    payment: store.checkout.payment,
    profile: store.profile
  }));

  const shippingFee = state.shipping.isInternational ? 50 : 0;
  const subtotal = calculateTotal(state.cart.map((product) => product.price * product.quantity));

  if (!state.isAuth) {
    return <Redirect to={SIGNIN} />;
  } if (state.cart.length === 0) {
    return <Redirect to="/" />;
  } if (state.isAuth && state.cart.length !== 0) {
    console.log("I ws here")
    return (
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        cart={state.cart}
        payment={state.payment}
        profile={state.profile}
        shipping={state.shipping}
        subtotal={Number(subtotal + shippingFee)}
      />
    );
  }
  return null;
});

export default withCheckout;
