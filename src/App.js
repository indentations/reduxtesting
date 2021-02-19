// import logo from './logo.svg';
import "./App.css";
import Homeconnect from "./middleware/Homeconnect";
import CounterConnect from "./middleware/CounterConnect";

function App(props) {
  console.log("props:", props);
  console.log("props.name:", props.myname);
  return (
    <div>
      
      <CounterConnect />
      <Homeconnect />
    </div>
  );
}

export default App;
