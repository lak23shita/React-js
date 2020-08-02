
//Lifecycle mounting(order of execution is constructor->getDerivedStateFromProps->render()->componentDidMount)
// constructorA
// 2LifeCycleA.js:16 getDerivedStateFromPropsA
// 2LifeCycleA.js:25 console.logA
// 2LifeCycleB.js:11 constructorB
// 2LifeCycleB.js:15 getDerivedStateFromPropsB
// 2LifeCycleB.js:24 console.logB
// LifeCycleB.js:20 componentDidMountB
// LifeCycleA.js:21 componentDidMountA





import React,{Component} from "react"
import LifeCycleB from "./LifeCycleB"

class LifeCycleA extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'lakshita'
        }
        console.log('constructorA')
    }

    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromPropsA')
        return null
    }

   //this will be executed when all the elements are rendereed that ia at the last
    componentDidMount(){
        console.log('componentDidMountA')
    }
    
    shouldComponentUpdate(){
        console.log("shouldComponentUpdatA")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdateA")
        return null
    }
    componentDidUpdate(){
        console.log("componentDidUpdateA")
    }

    render(){
        console.log('console.logA')
        return(
            <div>
            <div>
            LifecycleA
            </div>
            <button onClick={this.changeState}>Change state</button>
            <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA;