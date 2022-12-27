import { useEffect, useState } from "react";
import styles from "./AvailableProducts.module.css";
import Card from "../UI/Card";
import ProductItem from "./ProductItem";

const AvailableProducts = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // we set it initially to true because useEffect will automatically run when the component is rendered
  // therefore the products are going to load when the component is rendered for the first time
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    /* IMPORTANT NOTES TO REMEMBER:
    
      - Keep in mind fetechProducts is an async function so it always returns a promise.
        if we throw an error inside of a promise , this error will cause this promise to be rejected.

      - So we can not use try-catch to wrap it around the fetchProducts function because it will not work.

     */
    const fetchProducts = async () => {
      // Fetching data from realtime database in firebase
      const response = await fetch(
        "https://react-http-products-default-rtdb.firebaseio.com/Products.json"
      );

      // Handling errors
      if (!response.ok) {
        throw new Error("Something went wrong!, Failed to fetch products");
      }

      // Converting the response to json
      const responseData = await response.json();


      // Creating an array of products
      const loadedProducts = [];
      for (const key in responseData) {
        loadedProducts.push({
          id: key,
          title: responseData[key].title,
          description: responseData[key].description,
          price: responseData[key].price,
          stripePrice:responseData[key].stripePrice,
          gender: responseData[key].gender,
          image: responseData[key].image,
        });
      }
      // Updating the state of products and setting isLoading to false
      setProducts(loadedProducts);
      setIsLoading(false);
    };
    fetchProducts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);


  // Showing a loading message while the products are being fetched
  if (isLoading) {
    return (
      <section className={styles.productsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  // Showing an error message if there is an error
  if (httpError) {
    return (
      <section className={styles.productsLoading}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <section className={styles.products}>
      <ul className={styles.cards}> {products.map((product) => (
    <Card key={product.id}>
      <ProductItem
        id={product.id}
        key={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
        gender={product.gender}
        desc={product.description}
        stripePrice={product.stripePrice}
      />
    </Card>
  ))}</ul>
    </section>
  );
};

export default AvailableProducts;
