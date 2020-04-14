import PRODUCTS from '../../data/dummy-data';

const INITIAL_STATE = {
  availbleProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

const ProductsReducer = (state = INITIAL_STATE, action) => {
  return state;
};

export default ProductsReducer;
