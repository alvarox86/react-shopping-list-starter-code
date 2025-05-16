import ProductCard from "./ProductCard";

function ProductList(props) {
  return (
    <div className="product-list container">
      
      <h2>Product List</h2>

      {/* //* the list of the products will be here */}
      {/* //* it will render a ProductCard for each product in the list */}

      {props.allProducts
      .filter((eachProduct)=>{
        if(eachProduct.name.startsWith(props.searchInputValue)){
          return true
        }else{
          return false
        }
      })
      .map((eachProduct, index) => {
        return (
          <ProductCard index={index}eachProduct={eachProduct} key={index} setAllProducts={props.setAllProducts}/>
        )
      })}

    </div>
  )
}

export default ProductList