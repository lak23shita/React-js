//class Component
//this.props.name these are the reserved keywords for the class component 
import React,{Component} from "react"

class Counter extends Component{
        
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
        
    //this function is changing the state value 
    increment(){
        //setstate has 2 parameters the 1st is the setstate method and second one is the callback function is a arrow function 
        //the setstate will update the count value and passes the value to the callback function which updates the value of the state
        
        // this.setState(
        //     {
        //         count:this.state.count + 1
        //     },
        //     ()=>{
        //         console.log('CallBack value',this.state.count)
        //     }
        //     )
        //     //this console log will not take the updated value of the setstate is it is not included in the setstate method
        // console.log(this.state.count)
        

        //prevstate takes the last value of the function call and do the changes on the ui also and will generate the new state 
        //we can use props also if the prevstate is dependant on the props value
        this.setState((prevState,props)=>({
            count:prevState.count + props.addValue
        }))
        console.log(this.state.count)
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    
    
    
    render(){
        return(
            <div>count={this.state.count}
            {/* //onclick function calles the function which will change the value of the state */}
            <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
        
    }
}

export default Counter;