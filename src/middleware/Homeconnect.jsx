import { connect } from 'react-redux';
import Home from '../components/Home';
import {changeName} from "../service/actions/Action"
const mapStateToProps = (state)=>{
    console.log("state",state)
    return {
        name:state.name,
        // myage:state.age,
        // myaddress:state.address
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        handleChangeName:(name=>{dispatch(changeName(name))})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)