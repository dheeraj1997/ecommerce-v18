import {shallowEqual, useSelector} from "react-redux";
import {ProductGrid, ProductList} from "../../components/product";

const Home = () => {

  const store = useSelector((state) => ({
    filteredProducts: state.products.items,
    products: state.products,
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading
  }), shallowEqual);

  return (
    <main className="content">
      <section className="product-list-wrapper">
        <ProductList {...store}>
          <ProductGrid products={store.filteredProducts} />
        </ProductList>
      </section>
    </main>
  );
};

export default Home;