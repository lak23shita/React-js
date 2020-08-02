//regular component

import React ,{Component} from "react"


class RegularComp extends Component{
    render(){
        return(
            <div>
          Regular component {this.props.name}
            </div>
        )
    }
}

export default RegularComp;