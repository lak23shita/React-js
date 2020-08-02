
//class Component
//this.props.name these are the reserved keywords for the class component 

//instead of defining this.props we can directly destructure the attritubes
import React,{Component} from "react"

class Welcome extends Component{
    
    render(){
        //we have destructured the props so we can directly use the name and heroname attributes
        const {name,heroName} = this.props
        
        //this is destructuring the state
        //const {state1,state2}=this.state
        return<h1>
            hey {name} a.k.s {heroName}
        </h1>
    }
}

export default Welcome;