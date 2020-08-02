//context api
import React,{Component} from "react"
import { UserConsumer } from "./UserContext";
class ComponentF extends Component{

    //we are providing a proper function to the child of userconsumer
    render(){
        const {count , incrementCount} = this.props
        return(
            <UserConsumer>
                {
                    username =>{
                        return <div>Hello {username} </div>
                    }
                }
            </UserConsumer>
            
            
        )
    }
}

export default ComponentF ;