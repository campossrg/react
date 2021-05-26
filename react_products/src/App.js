import Product from "./Product"
import products from "./vschoolProducts"

function App() {
  const productsList = products.map(obj => <Product key={obj.id} name={obj.name} price={obj.price} description={obj.description} />)

  return (
    <div className="App">
      {productsList}
    </div>
  )
}

export default App
