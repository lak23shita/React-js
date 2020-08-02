import React,{Component} from "react"

class EventBind extends Component{

    constructor(props){
        super(props)

        this.state={
            message:"Hello"
        }
        //this is a part of eventhandling in this we define the eventhandler in the constructor and in the return we just call that evenyhandler
        // this.clickHandler=this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:"Goodbye"
       
    //     }
    //     )
    // }


    //this is the third approach in which we define the eventhandler as the arrow function
    clickHandler=()=>{
        this.setState({
            message:"goodbye!"
        })
    }
    
    render(){
        
        return(
            <div>
                <div>{this.state.message}</div>
                {/* this is called as eventbinding because this keyword gets undefined in setstate for that we have to add bind 
                <button onClick={this.clickHandler.bind(this)}></button> */}
                
                {/* //this is the second event binding approach in this we use a arroe function and the eventhandler is also making a call to the function */}
               {/* <button onClick={()=>this.clickHandler()} >Click Me</button>  */}

{/* 
               //this is the third approach in this we define the eventhandler in the constructor */}
               <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind;