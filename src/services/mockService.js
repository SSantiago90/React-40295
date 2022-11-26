/* -------------- BACK-END -------------- */
import products from "../data/products";

function getItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
}

export default getItems;
