import { displayActionMessage } from '../helpers/utils';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart as dispatchAddToCart, removeFromCart } from '../redux/actions/cartActions';

const useCart = () => {
  const { cart } = useSelector((state) => ({ cart: state.cart }));
  const dispatch = useDispatch();

  const isItemOnCart = (id) => !!cart.find((item) => item.id === id);

  const addToCart = (product) => {
    if (isItemOnCart(product.id)) {
      dispatch(removeFromCart(product.id));
      displayActionMessage('Item removed from cart', 'info');
    } else {
      dispatch(dispatchAddToCart(product));
      displayActionMessage('Item added to cart', 'success');
    }
  };

  return { cart, isItemOnCart, addToCart };
};

export default useCart;
