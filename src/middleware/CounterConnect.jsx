import { connect } from 'react-redux';
import Counter from '../components/Counter';
import {increment,decrement,reset} from "../service/actions/Action"
const mapStateToProps = (state)=>{
    console.log("state",state)
    return {
        counter:state.cr.counter,
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        // handleChangeName:(name=>{dispatch(changeName(name))})
        handleIncrement:()=>{dispatch(increment())},
        handleDecrement:()=>{dispatch(decrement())},
        handleReset:()=>{dispatch(reset())},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)