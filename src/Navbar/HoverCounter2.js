
//renderprops
//hover comp
import React,{Component} from "react"

class HoverCounter2 extends Component{

   
    //we are passing the parameter nt the func to the const
    render(){
        const {count, incrementCount}=this.props
       return(
           <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
       )
    }
}

export default HoverCounter2;