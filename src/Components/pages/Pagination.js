import React from "react";
import styles from "./pagination.module.css";

export const Pagination = ({
  totalProducts,
  productsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pageNumbers = [];
  console.log("totalProducts", totalProducts);
  /* Pagination Explaination 

    - Example: 10 posts / 5 posts per page = 2 pages
    - We did not use Math.ceil() because we want to display the partial page as well
      to round up the number of pages needed to display all posts.
    - Example: 11 posts / 5 posts per page = 3 pages needed to display all posts (2 full pages + 1 partial page)
    */

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={styles.pagination}>
      {pageNumbers.map((page, index) => {
        return (
          // so that we can use the page number as a key
          // and also to pass the page number to the setCurrentPage function
          // so that we can set the current page to the page number that was clicked

          <button
            key={index}
            className={`${styles.paginationButton} ${
              page === currentPage ? styles.active : ""
            } `}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
