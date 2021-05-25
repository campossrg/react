function Joke(props){
    return(
        <div>
            <p>This is the question: {props.question}</p>
            <p>This is the punchLine: {props.punchLine}</p>    
        </div>
    )
}

export default Joke;