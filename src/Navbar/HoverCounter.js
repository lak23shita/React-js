
//higher order components
//hover karne se u will get the no of hovers
/// we are importing the updatedcomp feom withcounter.js which is a higher order component
import React,{Component} from "react"
import UpdatedComp from './WithCount';
class HoverCounter extends Component{

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
        const {count , incrementCount} = this.props
        return(
            <div>
            {/*in this the hover mouse will provide us with the no of counts*/}
               <button onMouseOver={incrementCount}>Hover {count}</button> 
            </div>
        )
    }
}

export default UpdatedComp(HoverCounter,10) ;