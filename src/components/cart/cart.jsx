import { CartItem, CartToggle } from '../cart';
import { Boundary, Modal } from '../../components/common';
import { CHECKOUT_STEP_1 } from '../../constants/routes';
import { calculateTotal, displayMoney } from '../../helpers/utils';
import { useDidMount, useModal } from '../../hooks';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useLocation, useHistory} from 'react-router-dom';
import { clearCart } from '../../redux/actions/cartActions';
import firebase from "../../services/firebase";

const Cart = () => {
  const { isOpenModal, onOpenModal, onCloseModal } = useModal();
  const { cart, user } = useSelector((state) => ({
    cart: state.cart,
    user: state.auth
  }));
  const history = useHistory();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const didMount = useDidMount();

  useEffect(() => {
    if (didMount && firebase.auth.currentUser && cart.length !== 0) {
      firebase.saveCartItems(cart, firebase.auth.currentUser.uid)
        .then(() => {
          console.log('Item saved to cart');
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [cart.length]);

  const onCheckOut = () => {
    if ((cart.length !== 0 && user)) {
      document.body.classList.remove('is-cart-open');
      history.push(CHECKOUT_STEP_1);
    } else {
      onOpenModal();
    }
  };

  const onSignInClick = () => {
    onCloseModal();
    document.body.classList.remove('cart-open');
    history.push(CHECKOUT_STEP_1);
  };

  const onClearCart = () => {
    if (cart.length !== 0) {
      dispatch(clearCart());
    }
  };

  return user && user.role === 'ADMIN' ? null : (
    <Boundary>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={onCloseModal}
      >
        <p className="text-center">You must sign in to continue checking out</p>
        <br />
        <div className="d-flex-center">
          <button
            className="button button-border button-border-gray button-small"
            onClick={onCloseModal}
            type="button"
          >
            Continue shopping
          </button>
          &nbsp;
          <button
            className="button button-small"
            onClick={onSignInClick}
            type="button"
          >
            Sign in to checkout
          </button>
        </div>
      </Modal>
      <div className="cart">
        <div className="cart-list">
          <div className="cart-header">
            <h3 className="cart-header-title">
              My Cart &nbsp;
              <span>
                (
                {` ${cart.length} ${cart.length > 1 ? 'items' : 'item'}`}
                )
              </span>
            </h3>
            <CartToggle>
              {({ onClickToggle }) => (
                <span
                  className="cart-toggle button button-border button-border-gray button-small"
                  onClick={onClickToggle}
                  role="presentation"
                >
                  Close
                </span>
              )}
            </CartToggle>
            <button
              className="cart-clear button button-border button-border-gray button-small"
              disabled={cart.length === 0}
              onClick={onClearCart}
              type="button"
            >
              <span>Clear Cart</span>
            </button>
          </div>
          {cart.length <= 0 && (
            <div className="cart-empty">
              <h5 className="cart-empty-msg">Your cart is empty</h5>
            </div>
          )}
          {cart.map((product, i) => (
            <CartItem
              // eslint-disable-next-line react/no-array-index-key
              key={`${product.id}_${i}`}
              product={product}
              cart={cart}
              dispatch={dispatch}
            />
          ))}
        </div>
        <div className="cart-checkout">
          <div className="cart-total">
            <p className="cart-total-title">Subtotal Amout:</p>
            <h2 className="cart-total-amount">
              {displayMoney(calculateTotal(cart.map((product) => product.price * product.quantity)))}
            </h2>
          </div>
          <button
            className="cart-checkout-button button"
            disabled={cart.length === 0 || pathname === '/checkout'}
            onClick={onCheckOut}
            type="button"
          >
            Check Out
          </button>
        </div>
      </div>
    </Boundary>
  );
};

export default Cart;
