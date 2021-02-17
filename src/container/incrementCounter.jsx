import {connect} from "redux";
import Home from "../components/Home"
const increment=(state)
const mapStateToProps=(state)=>{
    return{
        counter:state.counter
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        increment:()=>{dispatch(increment())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);