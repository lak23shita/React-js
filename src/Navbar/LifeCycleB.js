
//Lifecycle mounting(order of execution is constructor->getDerivedStateFromProps->render()->componentDidMount)
//constructorA
// 2LifeCycleA.js:16 getDerivedStateFromPropsA
// 2LifeCycleA.js:25 console.logA
// 2LifeCycleB.js:11 constructorB
// 2LifeCycleB.js:15 getDerivedStateFromPropsB
// 2LifeCycleB.js:24 console.logB
// LifeCycleB.js:20 componentDidMountB
// LifeCycleA.js:21 componentDidMountA

import React,{Component} from "react"

class LifeCycleB extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'lakshita'
        }
        console.log('constructorB')
    }

    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromPropsB')
        return null
    }
   
    componentDidMount(){
        console.log('componentDidMountB')
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdatB")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdateB")
        return null
    }
    componentDidUpdate(){
        console.log("componentDidUpdateB")
    }
    
    render(){
        console.log('console.logB')
        return(
            <div>
               LifecycleB
            </div>
        )
    }
}

export default LifeCycleB;