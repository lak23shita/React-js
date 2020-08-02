
//functional Component
//this.props.name these are the reserved keywords for the class component 
import React,{Component} from "react"

class Message extends Component{
        //super gives the call to the base constructor
        //this.state is used becoz we are in the class component
        //to pass this state in render method we have to give this.state just like props benefit is that we can chnage the text unlike the props
        constructor(){
            super()
            this.state={
                message :"this is me!"
            }
        }

        //this function setstate is used to change the state in the class component 
        changeMessage(){
            this.setState(
                {
                    message:"Thank you for subscribing!"
                }
            )
        }




    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
        
    }
}

export default Message;