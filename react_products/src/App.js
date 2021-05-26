import Product from "./Product"
import products from "./vschoolProducts"

function App() {
  const productsList = products.map(obj => <Product id={obj.id} name={obj.name} price={obj.price} description={obj.description} />)

  return (
    <div className="App">
      {productsList}
    </div>
  )
}

export default App
