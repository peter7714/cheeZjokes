import React from "react";
import JokeList from "./JokeList";

/** App component. Renders list of jokes. */

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <JokeList />
//       </div>
//     );
//   }
// }

//updated hook version 

function App() {
  return(
    <div classname='App'>
      <JokeList/>
    </div>
  );
}

export default App;
