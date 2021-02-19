import { connect } from "react-redux";
import { changedata } from "../service/actions/Action";
import Biodata from "../components/Biodata";

const mapStateToProps = (state) => {
  return {
    data: state.dr.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changedata: (data => {dispatch(changedata(data));
    })
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Biodata);
