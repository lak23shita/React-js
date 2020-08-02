const { ReactComponent } = require("*.svg");

//Conditional Rendering
import React,{Component} from "react"

class UserGreeting extends Component{

    constructor(props){
        super(props)
        this.state={
            isLoggedIn: false
        }
    
    }
    
    render(){

        return this.state.isLoggedIn && <div>Hello lakshits</div>


// this.state.isLoggedIn ? (
        //     <div>Hello Lakshita</div>
        //     ):(
        //         <div>Hey there</div>

        //     )
        
        
        //in this approach we are taking a variable message and storing the conditional statement in it.
        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>hello this is laskhita</div>
        // }else{
        //     message=<div>How are u?</div>
        // }
        // return message



        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Hello Lakshita</div>
        //     )
        // }else{
        //     return(
        //         <div>How are u</div>
        //     )
        // }
    
        // return(
        //     <div>
        //        Hello Lakshita 
        //     </div>
        // )
    }
}

export default UserGreeting;