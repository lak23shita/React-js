import React ,{Component} from "react"
import RegularComp from './RegularComp';
import PureComp from './PureClass';
import Memo from './Memo';

//this will re render only once becoz we have used pure componnet and it will not re render evertime when  the state and set state is same
class ParentComp extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'lakshita'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'lakshita'
            })
        },2000)
    }
    render(){
        return(
            <div>
          Parent component
        {/* this will re render after every 2 sec as the parent re renders so child will also re render*/} 
              {/*  <RegularComp name={this.state.name} />*/}
        {/*the pure component will not re render as the setstate and the state values are same and do not re-render*/}   
          {/*<PureComp name={this.state.name} />*/}

          {/* memo is used for the functional component as it helps that the child do not rerender when the parent is re rendered after every 2 sec */}
          <Memo name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp;