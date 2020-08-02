
//context api
import React,{Component} from "react"
import ComponentE from './ComponentE';
class ComponentC extends Component{

    render(){
        const {count , incrementCount} = this.props
        return(
            <div>
            <ComponentE />
            </div>
        )
    }
}

export default ComponentC ;