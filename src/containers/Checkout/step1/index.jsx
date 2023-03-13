import { ArrowRightOutlined, ShopOutlined } from '@ant-design/icons';
import { CartItem } from '../../../components/cart';
import { CHECKOUT_STEP_2 } from '../../../constants/routes';
import {displayActionMessage, displayMoney} from '../../../helpers/utils';
import { useDocumentTitle, useScrollTop } from '../../../hooks';
import PropType from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import withCheckout from '../hoc/withCheckout';

const OrderSummary = ({ cart, subtotal }) => {
  useDocumentTitle('Check Out Step 1');
  useScrollTop();
  const dispatch = useDispatch();
  const history = useHistory();
  const onClickPrevious = () => history.push('/');
  const onPlaceOrder = () => {
    displayActionMessage('Feature not ready yet :)', 'info');
  }

  return (
    <div className="checkout">
      <div className="checkout-step-1">
        <h3 className="text-center">Order Summary</h3>
        <span className="d-block text-center">Review items in your cart.</span>
        <br />
        <div className="checkout-items">
          {cart.map((product) => (
            <CartItem
              cart={cart}
              dispatch={dispatch}
              key={product.id}
              product={product}
            />
          ))}
        </div>
        <br />
        <div className="cart-total text-right">
          <p className="cart-total-title">Subtotal:</p>
          <h2 className="cart-total-amount">{displayMoney(subtotal)}</h2>
        </div>
        <br />
        <div className="checkout-shipping-action">
          <button
            className="button button-muted"
            onClick={onClickPrevious}
            type="button"
          >
            <ShopOutlined />
            &nbsp;
            Continue Shopping
          </button>
          <button
            className="button"
            onClick={onPlaceOrder}
            type="submit"
          >
            Place Order
            &nbsp;
            <ArrowRightOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  cart: PropType.arrayOf(PropType.object).isRequired,
  subtotal: PropType.number.isRequired
};

export default withCheckout(OrderSummary);
