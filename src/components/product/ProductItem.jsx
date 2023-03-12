import { CheckOutlined } from '@ant-design/icons';
import { ImageLoader } from '../../components/common';
import PropType from 'prop-types';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ProductItem = ({ product, isItemOnCart, addToCart }) => {

  const onClickItem = () => {
    if (!product) return;

    if (product.id) {
      // history.push(`/product/${product.id}`);
    }
  };

  const itemOnCart = isItemOnCart ? isItemOnCart(product.id) : false;

  const handleAddToCart = () => {
    if (addToCart) addToCart({ ...product, selectedSize: product.sizes[0] });
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className={`product-card ${!product.id ? 'product-loading' : ''}`}
        style={{
          border: product && itemOnCart ? '1px solid #a6a5a5' : '',
          boxShadow: product && itemOnCart ? '0 10px 15px rgba(0, 0, 0, .07)' : 'none'
        }}
      >
        {itemOnCart && <CheckOutlined className="fa fa-check product-card-check" />}
        <div
          className="product-card-content"
          onClick={onClickItem}
          role="presentation"
        >
          <div className="product-card-img-wrapper">
            {product.image ? (
              <ImageLoader
                alt={product.name}
                className="product-card-img"
                src={product.image}
              />
            ) : <Skeleton width="100%" height="90%" />}
          </div>
          <div className="product-details">
            <h5 className="product-card-name text-overflow-ellipsis margin-auto">
              {product.name || <Skeleton width={80} />}
            </h5>
            <p className="product-card-brand">
              {product.brand || <Skeleton width={60} />}
            </p>
            <h4 className="product-card-price">
              {product.price ? `Rs. ${product.price}` : <Skeleton width={40} />}
            </h4>
          </div>
        </div>
        {product.id && (
          <button
            className={`product-card-button button-small button button-block ${itemOnCart ? 'button-border button-border-gray' : ''}`}
            onClick={handleAddToCart}
            type="button"
          >
            {itemOnCart ? 'Remove from cart' : 'Add to cart'}
          </button>
        )}

      </div>
    </SkeletonTheme>
  );
};

ProductItem.defaultProps = {
  isItemOnCart: undefined,
  addToCart: undefined
};

ProductItem.propTypes = {
  product: PropType.object.isRequired,
  isItemOnCart: PropType.func,
  addToCart: PropType.func
};

export default ProductItem;
