// import logo from './logo.svg';
import "./App.css";
import Homeconnect from "./middleware/Homeconnect";
import { connect } from "react-redux";

// import Counter from './container/appContainer';
function App(props) {
  console.log("props:", props);
  console.log("props.name:", props.myname);
  return (
    <div>
      <Homeconnect />
    </div>
  );
}

export default App;
