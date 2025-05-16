function ProductCard(props,index) {

  const handleUpdatePurchase = () =>{

    props.setAllProducts((allProducts)=>{
      const clone = structuredClone(allProducts)

      clone[props.index].isPurchased = true

      return clone
    })

  }

  return (
    <div className="product-card">
      <h3>{props.eachProduct.name}</h3>
      <p>{props.eachProduct.price}€</p>
      <p>{props.eachProduct.isPurchased === true ? "✅" : "🟡"}</p>
      <button onClick={handleUpdatePurchase}>Buy</button>
    </div>
  );
}

export default ProductCard;