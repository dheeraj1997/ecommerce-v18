import PropType from 'prop-types';
import React from 'react';
import ProductItem from './ProductItem';
import {useCart} from "../../hooks";

const ProductGrid = ({ products }) => {

  const {addToCart, isItemOnCart} = useCart();

  return (
    <div className="product-grid">
      {products.length === 0 ? new Array(12).fill({}).map((product, index) => (
        <ProductItem
          key={`product-skeleton ${index}`}
          product={product}
        />
      )) : products.map((product) => (
        <ProductItem
          key={product.id}
          isItemOnCart={isItemOnCart}
          addToCart={addToCart}
          product={product}
        />
      ))}
    </div>
  );
};

ProductGrid.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: PropType.array.isRequired
};

export default ProductGrid;
