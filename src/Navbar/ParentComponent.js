
//eventhandling by passing the value from child to parent
import React,{Component} from "react"
import ChildComponent from './ChildComponent';

class ParentComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            parentName : 'Parent'
        }
        this.greetParent=this.greetParent.bind(this)
    }
    
    greetParent(childName){
        //childName is passed from the childcomponent.js file as a parameter
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    render(){
        
        return(
            <div>
               {/* <button onClick={this.clickHandler}>Click Me</button>  */}
               {/* we have used this greethandler as a props of the childcomponent and passing a referance to the childcomponent */}
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent;