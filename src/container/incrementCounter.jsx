import { connect } from "react-redux";
import { increment, decrement, reset } from "../service/actions/Action";
import Home from "../components/Home";

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
        return dispatch(increment());
    },
    decrement: () => {
        return dispatch(decrement());
    },
    reset: () => {
        return dispatch(reset());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
