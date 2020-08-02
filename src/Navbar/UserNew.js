//render props 

//renderprops
//hover comp
import React,{Component} from "react"

class UserNew extends Component{

    constructor(props){
        super(props)
        this.state={
           count:0
        }
    }
incrementCount=() =>{
    this.setState=(prevState =>{
        return{count:prevState.count + 1}
    })
}
    //we have passed the name that is the function in the app.js file
    render(){
        {/* In this we are passing the parameter as the function used value is set to true when the parameter to the name is true*/ }
       return(
          <div>
          {this.props.name(true)}
          </div>
       )
    }
}

export default UserNew;