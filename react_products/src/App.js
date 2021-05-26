import Product from "./Product"
import products from "./vschoolProducts"
import React, {Component} from "react"
import ReactDOM from "react-dom"

class App extends React.Component {
  render(){
    const productsList = products.map(obj => <Product key={obj.id} name={obj.name} price={obj.price} description={obj.description} />)

    return(
      <div className="App">
        <Header username="Sergio" />
        <Greeting />
        {productsList}
      </div>
    )
  }
}

// #2
class Header extends React.Component {
  render() {
      return (
          <header>
              <p>Welcome, {this.props.username}!</p>
          </header>
      )    
  }
}

// #3
class Greeting extends Component {
  render() {
      const date = new Date()
      const hours = date.getHours()
      let timeOfDay
      
      if (hours < 12) {
          timeOfDay = "morning"
      } else if (hours >= 12 && hours < 17) {
          timeOfDay = "afternoon"
      } else {
          timeOfDay = "night"
      }
      return (
          <h1>Good {timeOfDay} to you, sir or madam!</h1>
      )
  }
}

export default App