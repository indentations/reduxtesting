import { connect } from "react-redux";
import {
  changedata,
  increment,
  decrement,
  reset,
} from "../service/actions/Action";
import Fake from "../components/Test";

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    data: state.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Fake);
