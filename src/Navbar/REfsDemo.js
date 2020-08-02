
//refs
import React,{Component} from "react"

class REfsDemo extends Component{
    constructor(props){
        super(props)
        //i have created a referance which is used in the input statement
        this.inputRef=React.createRef()
    }

    componentDidMount(){
        //this will focus on the input field when the page loads
        this.inputRef.current.focus()
    }

    //this will fetch me the value of the input field and that we can display in the alert message
    onclickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    
    render(){
        
        return(
            <div>
            {/* i have created a referance to the input field*/}
            <input type='text' ref={this.inputRef}/>
            <button onClick={this.onclickHandler}>Click</button>
            </div>
        )
    }
}

export default REfsDemo;