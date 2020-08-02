

///Pure component
import React ,{PureComponent} from "react"


class PureComp extends PureComponent{
    render(){
        return(
            <div>
            Pure PureComponent {this.props.name}
            </div>
        )
    }





}

export default  PureComp;