import { useState } from "react"

function AddForm(props) {

  const [nameInputValue, setNameInputValue] = useState("")
  const [priceInputValue, setPriceInputValue] = useState(0)

  const handleNameChange = (event) =>{ setNameInputValue (event.target.value) }

  const handlePriceChange = (event) => { setPriceInputValue(event.target.value) }

  const handleAddProduct = (event) => {
    console.log("Intentando add producto")
    event.preventDefault()
    const productToAdd = {
      name: nameInputValue,
      price: priceInputValue,
      isPurchased: false
    }

/*     props.setAllProducts([...props.allProducts, productToAdd])
 */

    props.setAllProducts( (valorActualDelEstado) => {return[...valorActualDelEstado, productToAdd]} )
}

 

  return (
    <div className="add-form container">
      
      <h2>Add Form</h2>

      <form onSubmit={handleAddProduct}>

        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" onChange={handleNameChange} value={nameInputValue}/>
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input type="number" name="price" onChange={handlePriceChange} value={priceInputValue}/>
        </div>

        <button>Add</button>

      </form>

    </div>
  )
}

export default AddForm