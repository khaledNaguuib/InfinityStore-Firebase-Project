import { useEffect, useState } from "react";
import styles from "./shop.module.css";
// import picCarousel1 from "../../assets/carouselll.jpg";
import picCarousel1 from "../../asstes-optimized/carouselll.webp";
import { InfinitySpin } from "react-loader-spinner";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import Card from "../UI/Card";
import ProductItem from "../Products/ProductItem";
import { Pagination } from "./Pagination";

const Shop = () => {
  const [active, setActive] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  // Checkbox State for Filter by Price
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);

  // Checkbox State for Filter by gender
  const [isCheckedMale, setIsCheckedMale] = useState(false);
  const [isCheckedFemale, setIsCheckedFemale] = useState(false);

  // Checkbox for Filter Alphabetically
  const [isCheckedAZ, setIsCheckedAZ] = useState(false);
  const [isCheckedZA, setIsCheckedZA] = useState(false);

  // search state
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermClicked, setSearchTermClicked] = useState(false);

  /* Explaination of Pagination -------------------------------------------

  - For Example we are now on page 1 and we want to show 9 products per page we need to show products 1-9.
  - So we need to know the index of the first product which is 0 and the index of the last product which is 8.
  - To get the index of the last product we need to know the index of the first product and the number of products per page.
  - To get the index of the first product we need to know the current page and the number of products per page.
  - So we need to know the current page and the number of products per page to get the index of the
    first product and the index of the last product.

  */
  //Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);

  // Search Handler on mouse enter
  const searchHandler = (event) => {
    event.preventDefault();
    setSearchTermClicked(true);
  };
  // Search Handler on mouse leave
  const searchHandlerLeave = (event) => {
    event.preventDefault();
    if (searchTerm === "") {
      setSearchTermClicked(false);
    } else if (searchTerm !== "") {
      setSearchTermClicked(true);
    }
  };
  // Search Handler on input change
  const onSearchChange = (event) => {
    setSearchTerm(event.target.value);
    const filteredProducts = products.filter((product) => {
      if (event.target.value === "") return product;
      return product.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setFilteredProducts(filteredProducts);
  };
  const onSearchClick = (event) => {
    event.preventDefault();
    setSearchTermClicked(!searchTermClicked);
    setSearchTerm("");
  };

  // Get current products (products to show on current page)
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://react-http-products-default-rtdb.firebaseio.com/shop/products.json"
      );
      console.log(response);

      if (!response.ok) {
        throw new Error("Something went wrong!, Failed to fetch products");
      }

      const responseData = await response.json();
      console.log(responseData);
      const loadedProducts = [];

      for (const key in responseData) {
        loadedProducts.push({
          id: key,

          title: responseData[key].title,
          gender: responseData[key].gender,
          description: responseData[key].description,
          price: responseData[key].price,
          stripePrice: responseData[key].stripePrice,
          image: responseData[key].image,
        });
      }
      setProducts(loadedProducts);
      setIsLoading(false);
    };
    fetchProducts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });

    if (
      !isChecked &&
      !isChecked2 &&
      !isChecked3 &&
      !isChecked4 &&
      !isCheckedMale &&
      !isCheckedFemale &&
      !searchTerm &&
      !isCheckedAZ &&
      !isCheckedZA

    ) {
      setFilteredProducts([]);
    }
  }, [
    isChecked,
    isChecked2,
    isChecked3,
    isChecked4,
    isCheckedMale,
    isCheckedFemale,
    searchTerm,
    isCheckedAZ,
    isCheckedZA,
  ]);

  // ------------------------------------------- Filter Functions -------------------------------------------

  // filter by price price range 1
  const filterByPriceRange = (price) => {
    setIsChecked(!isChecked);
    const filtered = products.filter((product) => product.price <= price);
    setFilteredProducts(filtered);
  };

  // filter by price price range 2
  const filterByPriceRange200 = (price) => {
    setIsChecked2(!isChecked2);
    const filtered = products.filter((product) => product.price <= price);
    setFilteredProducts(filtered);
  };

  // filter by price price range 3
  const filterByPriceRange300 = (price) => {
    setIsChecked3(!isChecked3);
    const filtered = products.filter((product) => product.price <= price);
    setFilteredProducts(filtered);
  };
  // filter by price price range 3

  const filterByPriceOver400 = (price) => {
    setIsChecked4(!isChecked4);
    const filtered = products.filter((product) => product.price >= price);
    setFilteredProducts(filtered);
  };

  // filter by gender Male
  const filterByMale = () => {
    setIsCheckedMale(!isCheckedMale);
    const filtered = products.filter((product) => product.gender === "Men");
    setFilteredProducts(filtered);
  };

  // filter by gender Female
  const filterByFemale = () => {
    setIsCheckedFemale(!isCheckedFemale);
    const filtered = products.filter((product) => product.gender === "Women");
    setFilteredProducts(filtered);
  };

  // filter by Alphabetical A-Z
  const FilterAZ = () => {
    setIsCheckedAZ(!isCheckedAZ);
    const filtered = products.sort((a, b) =>
      a.title > b.title ? 1 : b.title > a.title ? -1 : 0
    );
    setFilteredProducts(filtered);
  };

  // filter by Alphabetical Z-A
  const FilterZA = () => {
    setIsCheckedZA(!isCheckedZA);
    const filtered = products.sort((a, b) =>
      a.title < b.title ? 1 : b.title < a.title ? -1 : 0
    );
    setFilteredProducts(filtered);
  };

  // Message to show if no products are found in the filtered products array (search term) || No products found at all.
  const noProductsFound = products.length === 0;
  const noFilteredProductsFound =
    filteredProducts.length === 0 && searchTermClicked && searchTerm !== "";

  const noFilteredProductsFoundMessage = (
    <div className={styles.noProductsFound}>
      <p className={styles.noFilteredProductsFoundMessage}>
        Your Search for "{searchTerm}" did not yeild any results
      </p>
    </div>
  );

  // ------------------------------------------- Pagination Functions -------------------------------------------
  const indexOfLastProduct = currentPage * productsPerPage;
  // EX : 1 * 9 = 9
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // EX : 9 - 9 = 0

  const currentProducts =
    filteredProducts.length === 0
      ? products.slice(indexOfFirstProduct, indexOfLastProduct)
      : filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  console.log("Shop Products:", products);
  console.log("Filtered Products:", filteredProducts);

  if (isLoading) {
    return (
      <div className="loader2">
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }

  if (httpError) {
    return (
      <section className={styles.productsLoading}>
        <p>{httpError}</p>
      </section>
    );
  } else {
    return (
      <section className={styles.productsWrapper}>
        {/* ----------------PHOTO COVER----------- */}
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselContainer}>
            <div className={styles.imageContainer}>
              <img
                src={picCarousel1}
                className={styles.carouselPic}
                alt="Cover banner for the store"
              />
            </div>
          </div>
        </div>

        <div className={styles.parentGrid}>
          {/* ------------------------------------------- */}
          {/* ------------Left Filter sideBar------------ */}
          {/* ------------------------------------------- */}

          {/* Checkboxes 

               - But to display on the screen whether it's checked or not, we need to convert it to Controlled Input.
               - In React, Controlled Input is managed by state, so the input value can be changed only by changing
               the state related to that input.
           */}

          <div className={styles.containerLeft}>
            <Accordion
              preExpanded={["a", "c", "d"]}
              allowMultipleExpanded
              allowZeroExpanded
              onChange={() => setActive(!active)} // this is to change the icon when the accordion is clicked on it
            >
              {/*------------------------------- SORT BY Price ----------------------------------*/}
              <AccordionItem uuid="a" className={styles.accordionItem}>
                <AccordionItemHeading>
                  <AccordionItemButton
                    className={` ${styles.shopByTitle} ${styles.accordionHead}`}
                  >
                    Shop By Price
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded ? (
                          <i
                            className={`fa-solid fa-angle-down ${styles.arrowIcon}`}
                          ></i>
                        ) : (
                          <i
                            className={`fa-solid fa-angle-up ${styles.arrowIcon}`}
                          ></i>
                        )
                      }
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <div className={styles.shopByPrice}>
                    <div className={styles.priceRange}>
                      <div className={styles.priceRangeItem}>
                        <input
                          className={styles.inputCheckbox}
                          type="checkbox"
                          name="priceRange"
                          id="priceRange1"
                          checked={isChecked}
                          onChange={() => filterByPriceRange(100)}
                        />
                        <label
                          className={styles.inputLabel}
                          htmlFor="priceRange1"
                        >
                          Under $100
                        </label>
                      </div>
                      <div className={styles.priceRangeItem}>
                        <input
                          className={styles.inputCheckbox}
                          type="checkbox"
                          name="priceRange"
                          id="priceRange2"
                          checked={isChecked2}
                          onChange={() => filterByPriceRange200(200)}
                        />
                        <label
                          className={styles.inputLabel}
                          htmlFor="priceRange2"
                        >
                          Under $200
                        </label>
                      </div>

                      <div className={styles.priceRangeItem}>
                        <input
                          className={styles.inputCheckbox}
                          type="checkbox"
                          name="priceRange"
                          id="priceRange3"
                          checked={isChecked3}
                          onChange={() => filterByPriceRange300(300)}
                        />
                        <label
                          className={styles.inputLabel}
                          htmlFor="priceRange3"
                        >
                          Under $300
                        </label>
                      </div>

                      <div className={styles.priceRangeItem}>
                        <input
                          className={styles.inputCheckbox}
                          type="checkbox"
                          name="priceRange"
                          id="priceRange4"
                          checked={isChecked4}
                          onChange={() => filterByPriceOver400(400)}
                        />
                        <label
                          className={styles.inputLabel}
                          htmlFor="priceRange4"
                        >
                          Over $400
                        </label>
                      </div>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              {/*------------------------------- SORT BY GENDER ----------------------------------*/}
              <AccordionItem uuid="c" className={styles.accordionItem}>
                <AccordionItemHeading>
                  <AccordionItemButton
                    className={` ${styles.shopByTitle} ${styles.accordionHead}`}
                  >
                    Gender
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded ? (
                          <i
                            className={`fa-solid fa-angle-down ${styles.arrowIcon}`}
                          ></i>
                        ) : (
                          <i
                            className={`fa-solid fa-angle-up ${styles.arrowIcon}`}
                          ></i>
                        )
                      }
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.shopByPrice}>
                    <div className={styles.priceRange}>
                      <div className={styles.priceRangeItem}>
                        <input
                          className={styles.inputCheckbox}
                          type="checkbox"
                          name="priceRange"
                          id="menBox"
                          checked={isCheckedMale}
                          onChange={() => {
                            filterByMale();
                          }}
                        />
                        <label className={styles.inputLabel} htmlFor="menBox">
                          Men
                        </label>
                      </div>
                      <div className={styles.priceRangeItem}>
                        <input
                          className={styles.inputCheckbox}
                          type="checkbox"
                          name="priceRange"
                          id="womenBox"
                          checked={isCheckedFemale}
                          onChange={() => {
                            filterByFemale();
                          }}
                        />
                        <label className={styles.inputLabel} htmlFor="womenBox">
                          Women
                        </label>
                      </div>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              {/*------------------------------- SORT BY ALPHATICALLY ----------------------------------*/}
              <AccordionItem uuid="d" className={styles.accordionItem}>
                <AccordionItemHeading>
                  <AccordionItemButton
                    className={` ${styles.shopByTitle} ${styles.accordionHead}`}
                  >
                    Alphabetically
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded ? (
                          <i
                            className={`fa-solid fa-angle-down ${styles.arrowIcon}`}
                          ></i>
                        ) : (
                          <i
                            className={`fa-solid fa-angle-up ${styles.arrowIcon}`}
                          ></i>
                        )
                      }
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <div className={styles.shopByPrice}>
                    <div className={styles.priceRange}>
                      <div className={styles.priceRangeItem}>
                        <input
                          className={styles.inputCheckbox}
                          type="checkbox"
                          name="priceRange"
                          id="alphaRange1"
                          checked={isCheckedAZ}
                          onChange={() => FilterAZ()}
                        />
                        <label
                          className={styles.inputLabel}
                          htmlFor="alphaRange1"
                        >
                          A - Z
                        </label>
                      </div>
                      <div className={styles.priceRangeItem}>
                        <input
                          className={styles.inputCheckbox}
                          type="checkbox"
                          name="priceRange"
                          id="AlphaRange2"
                          checked={isCheckedZA}
                          onChange={() => FilterZA()}
                        />
                        <label
                          className={styles.inputLabel}
                          htmlFor="AlphaRange2"
                        >
                          Z - A
                        </label>
                      </div>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
          {/* ------------------------------------------- */}
          {/* ------------Right Products List------------ */}
          {/* ------------------------------------------- */}
          <div className={styles.containerRight}>
            <div className={styles.productsHeader}>
              <div className={styles.productsHeaderShowingDetails}>
                {!isChecked &&
                  !isChecked2 &&
                  !isChecked3 &&
                  !isChecked4 &&
                  !isCheckedMale &&
                  !isCheckedFemale &&
                  !searchTerm && (
                    <div className={styles.showingProductsNumber}>
                      Showing&nbsp;
                      <span className={styles.showNumbers}>
                        {indexOfFirstProduct + 1}-
                        {currentPage !== 3
                          ? indexOfLastProduct
                          : products.length}
                      </span>
                      &nbsp;out of&nbsp;
                      <span className={styles.showNumbers}>
                        {products.length}
                      </span>
                    </div>
                  )}
                {isChecked &&
                  !isChecked2 &&
                  !isChecked3 &&
                  !isChecked4 &&
                  !isCheckedMale &&
                  !isCheckedFemale &&
                  !searchTerm && (
                    <div className={styles.showingProductsNumber}>
                      Showing&nbsp;
                      <span className={styles.showNumbers}>
                        {filteredProducts.length}
                      </span>
                      &nbsp;out of&nbsp;
                      <span className={styles.showNumbers}>
                        {filteredProducts.length}
                      </span>
                    </div>
                  )}
                {!isChecked &&
                  isChecked2 &&
                  !isChecked3 &&
                  !isChecked4 &&
                  !isCheckedMale &&
                  !isCheckedFemale &&
                  !searchTerm && (
                    <div className={styles.showingProductsNumber}>
                      Showing&nbsp;
                      <span className={styles.showNumbers}>
                        {filteredProducts.length}
                      </span>
                      &nbsp;out of&nbsp;
                      <span className={styles.showNumbers}>
                        {filteredProducts.length}
                      </span>
                    </div>
                  )}
                {!isChecked &&
                  !isChecked2 &&
                  isChecked3 &&
                  !isChecked4 &&
                  !isCheckedMale &&
                  !isCheckedFemale &&
                  !searchTerm && (
                    <div className={styles.showingProductsNumber}>
                      Showing&nbsp;
                      <span className={styles.showNumbers}>
                        {filteredProducts.length}
                      </span>
                      &nbsp;out of&nbsp;
                      <span className={styles.showNumbers}>
                        {filteredProducts.length}
                      </span>
                    </div>
                  )}
                {!isChecked &&
                  !isChecked2 &&
                  !isChecked3 &&
                  isChecked4 &&
                  !isCheckedMale &&
                  !isCheckedFemale &&
                  !searchTerm && (
                    <div className={styles.showingProductsNumber}>
                      Showing&nbsp;
                      <span className={styles.showNumbers}>
                        {filteredProducts.length}
                      </span>
                      &nbsp;out of&nbsp;
                      <span className={styles.showNumbers}>
                        {filteredProducts.length}
                      </span>
                    </div>
                  )}
                {!isChecked &&
                  !isChecked2 &&
                  !isChecked3 &&
                  !isChecked4 &&
                  isCheckedMale &&
                  !isCheckedFemale &&
                  !searchTerm && (
                    <div className={styles.showingProductsNumber}>
                      Showing&nbsp;
                      <span className={styles.showNumbers}>
                        {filteredProducts.length}
                      </span>
                      &nbsp;out of&nbsp;
                      <span className={styles.showNumbers}>
                        {filteredProducts.length}
                      </span>
                    </div>
                  )}
                {!isChecked &&
                  !isChecked2 &&
                  !isChecked3 &&
                  !isChecked4 &&
                  !isCheckedMale &&
                  isCheckedFemale &&
                  !searchTerm && (
                    <div className={styles.showingProductsNumber}>
                      Showing&nbsp;
                      <span className={styles.showNumbers}>
                        {filteredProducts.length}
                      </span>
                      &nbsp;out of&nbsp;
                      <span className={styles.showNumbers}>
                        {filteredProducts.length}
                      </span>
                    </div>
                  )}
                {!isChecked &&
                  !isChecked2 &&
                  !isChecked3 &&
                  !isChecked4 &&
                  !isCheckedMale &&
                  !isCheckedFemale &&
                  searchTerm && (
                    <div className={styles.showingProductsNumber}>
                      Showing&nbsp;
                      <span className={styles.showNumbers}>
                        {filteredProducts.length}
                      </span>
                      &nbsp;out of&nbsp;
                      <span className={styles.showNumbers}>
                        {filteredProducts.length}
                      </span>
                    </div>
                  )}
              </div>
              <div className={styles.searchInputContainer}>
                <form>
                  <div
                    className={`${styles["search-wrapper"]} ${
                      searchTermClicked ? styles.focused : ""
                    }`}
                  >
                    <input
                      value={searchTerm}
                      onChange={onSearchChange}
                      onMouseLeave={searchHandlerLeave}
                      className={styles["search-input"]}
                      type="text"
                      placeholder="Search"
                    />
                    <i
                      onMouseOver={searchHandler}
                      onClick={onSearchClick}
                      // onMouseOut={searchHandlerLeave}
                      className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`}
                    ></i>
                  </div>
                </form>
              </div>
            </div>

            {/* SHOW NO PRODUCTS FOUND if the filtered products length ===0 */}
            {noFilteredProductsFound && noFilteredProductsFoundMessage}

            {!noProductsFound && !noFilteredProductsFound && (
              <div className={styles.prdouctsContainer}>
                {!isChecked &&
                !isChecked2 &&
                !isChecked3 &&
                !isChecked4 &&
                !noProductsFound
                  ? currentProducts.map((product) => (
                      <Card key={product.id}>
                        <ProductItem
                          id={product.id}
                          key={product.id}
                          gender={product.gender}
                          image={product.image}
                          title={product.title}
                          price={product.price}
                          stripePrice={product.stripePrice}
                          desc={product.description}
                        />
                      </Card>
                    ))
                  : filteredProducts.map((product) => (
                      <Card key={product.id}>
                        <ProductItem
                          id={product.id}
                          key={product.id}
                          gender={product.gender}
                          image={product.image}
                          title={product.title}
                          price={product.price}
                          stripePrice={product.stripePrice}
                          desc={product.description}
                        />
                      </Card>
                    ))}
                ;
              </div>
            )}
            {!noFilteredProductsFound && (
              <Pagination
                totalProducts={
                  filteredProducts.length === 0
                    ? products.length
                    : filteredProducts.length
                }
                productsPerPage={productsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            )}

            {noProductsFound && (
              <div className={styles.noProductsFound}>
                <h1 className={styles.NoProducts}>No Products Found</h1>
              </div>
            )}
          </div>
        </div>

        {/* <ul className={styles.cards}>
          {products.map((product) => (
            <Card key={product.id}>
              <ProductItem
                id={product.id}
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </Card>
          ))}
        </ul> */}
      </section>
    );
  }
};
export default Shop;
