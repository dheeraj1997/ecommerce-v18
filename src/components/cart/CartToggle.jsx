import PropType from 'prop-types';

const CartToggle = ({ children }) => {
  const onClickToggle = () => {
    if (document.body.classList.contains('is-cart-open')) {
      document.body.classList.remove('is-cart-open');
    } else {
      document.body.classList.add('is-cart-open');
    }
  };

  document.addEventListener('click', (e) => {
    const closest = e.target.closest('.cart');
    const toggle = e.target.closest('.cart-toggle');
    const closeToggle = e.target.closest('.cart-item-remove');

    if (!closest && document.body.classList.contains('is-cart-open') && !toggle && !closeToggle) {
      document.body.classList.remove('is-cart-open');
    }
  });

  return children({ onClickToggle });
};

CartToggle.propTypes = {
  children: PropType.oneOfType([
    PropType.arrayOf(PropType.node),
    PropType.func,
    PropType.node
  ]).isRequired
};

export default CartToggle;
