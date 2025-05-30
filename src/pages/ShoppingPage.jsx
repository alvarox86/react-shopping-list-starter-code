import { useState } from "react";

import AddForm from "../components/AddForm";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

//* this data is just for testing the initial rendering of data
import testProducts from "../data/testProducts.json";

function ShoppingPage() {
  const [allProducts, setAllProducts] = useState(testProducts);
  //* initial state. change to empty array when finished with add functionality
  const [searchInputValue, setSearchInputValue] = useState("");

  return (
    <>
      <h1>Shopping List!</h1>

      <AddForm setAllProducts={setAllProducts} />
      {/* //* all elements of the shopping list will be here */}
      <SearchBar searchInputValue={searchInputValue} setSearchInputValue={setSearchInputValue}/>

      <ProductList allProducts={allProducts} searchInputValue={searchInputValue} setAllProducts={setAllProducts}/>
    </>
  );
}

export default ShoppingPage;
