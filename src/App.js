import logo from "./logo.svg";
import "./App.css";
// import Test from './Testings';
import IncrementCounter from "./container/incrementCounter";
// import Fake from "./container/Fake";
import Biodata from "./container/Bioconnect";

function App() {
  console.log("fetc api test?")
  return (
    <div className="App">
      <header className="App-header">
        <IncrementCounter />
        <Biodata />
        {/* <Fake /> */}
      </header>
    </div>
  );
}

export default App;
