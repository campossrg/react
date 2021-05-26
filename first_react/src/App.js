import React, { Component } from "react"
import ReactDOM from "react-dom"

import ContactCard from "./ContactCard"
import ContactCardsList from "./ContactCardsList"

class App extends React.Component{
    constructor(){
        super()
        this.state={
            isLoggedIn : false,
            isLoggedColor : "red"
        }
		this.loginApp = this.loginApp.bind(this)
    }

    loginApp(){
        this.setState(prevState =>{
            return {
                isLoggedIn: !prevState.isLoggedIn,
                isLoggedColor : prevState.isLoggedColor="red" ? "green" : "red"
            }
        })
    }

    render(){
        const contactsList = ContactCardsList.map(obj => <ContactCard 
                                                            key={obj.id}
                                                            name={obj.name}
                                                            imgUrl={obj.imgUrl}
                                                            phone={obj.phone}
                                                            email={obj.email}
                                                            />)

        const logged = this.state.isLoggedIn ? "Logged" : "Not Logged"

        return (
            <div className="contacts">
				<h1 style={{color:this.state.isLoggedColor}}>{logged}</h1>
                <button onClick={this.loginApp}>Login</button>
                {contactsList}
            </div>
        )
    }
}

export default App