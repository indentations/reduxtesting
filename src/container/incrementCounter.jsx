import {connect} from "react-redux";
import {changedata,increment,decrement,reset} from "../service/actions/Action"
import Home from "../components/Home"

const mapStateToProps=(state)=>{
    return{
        counter:state.counter
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        changedata:(data)=>{dispatch(changedata(data))},
        increment:()=>{dispatch(increment())},
        decrement:()=>{dispatch(decrement())},
        reset:()=>{dispatch(reset())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);