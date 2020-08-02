
//higher order components
/// we are importing the updatedcomp feom withcounter.js which is a higher order component
import React,{Component} from "react"
import UpdatedComp from './WithCount';
class ClickCounter extends Component{

//    constructor(props){
//        super(props)

//        this.state = {
//            count:0
//        }
//    }

//    incrementCount=() =>{
//         this.setState(prevState =>{
//             return{
//                 count:prevState.count + 1
//             }
//         })
//    }
    
    render(){
        const {count , incrementCount}=this.props
        return(
            <div>
               <button onClick={incrementCount}>{this.props.name}Click {count}</button> 
            </div>
        )
    }
}

export default UpdatedComp(ClickCounter,5) ;