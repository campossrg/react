function Product(props){
    return (
        <div>
            <h1>{props.id} - {props.name}</h1>
            <p>Price: {props.price}</p>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default Product