
//refs for parentcomponent
import React,{Component} from "react"
import Input from './Input';
class REfsDemo extends Component{
    constructor(props){
        super(props)
        //i have created a referance which is used in the input statement
        this.componentRef=React.createRef()
    }

    componentDidMount(){
        //this will focus on the input field when the page loads
        this.inputRef.current.focus()
    }

    //this will fetch me the value of the input field and that we can display in the alert message
    //focusinput method is dfined in the input.js file
    onclickHandler=()=>{
        this.componentRef.current.focusInput()
    }
    //we want that when we click the button in parent component (focusInput.js)it will bring focus to the input field in the child comp(that is input.js)
    
    render(){
        
        return(
            <div>
            <Input ref={this.componentRef} />
            <button onClick={this.onclickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default REfsDemo;