import React,{Component} from "react"

class Input extends Component{
    constructor(props){
        super(props)
        //i have created a referance which is used in the input statement
        this.inputRef=React.createRef()
    }

   focusInput(){
       this.inputRef.current.focus()
   }
    
    render(){
        
        return(
            <div>
            {/* i have created a referance to the input field*/}
            <input type='text' ref={this.inputRef}/>
         
            </div>
        )
    }
}

export default Input;