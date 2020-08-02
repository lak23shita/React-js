//context api
import React,{Component} from "react"
import ComponentF from './ComponentF';
class ComponentC extends Component{

    render(){
        const {count , incrementCount} = this.props
        return(
            <div>
            <ComponentF />
            </div>
        )
    }
}

export default ComponentE ;