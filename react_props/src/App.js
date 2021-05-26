import Joke from "./Joke"
import JokesData from "./JokesData"

function App() {
  const JokesComponent = JokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

  return (
    <div className="App">
      {JokesComponent}
    </div>
  );
}

export default App;
