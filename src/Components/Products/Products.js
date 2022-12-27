import AvailableProducts from "./AvailableProducts";
import ProductsSummary from "./ProductsSummary";
import Fade from 'react-reveal/Fade';

const Products = () => {
  return (
    <>
      <Fade bottom>
      <ProductsSummary />
      <AvailableProducts />
      </Fade>
    </>
  );
};
export default Products;
