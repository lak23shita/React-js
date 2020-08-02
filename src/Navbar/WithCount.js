
//higher order components in this we simply add the function which will return another class or function which is inside it.
import React from 'react';



const UpdatedComp= (OriginalComp,incrementNumber) =>{
    
    class NewComp extends React.Component{
        constructor(props){
            super(props)
        
            this.state = {
                count:0
            }
        }
            
        incrementCount=() =>{
             this.setState(prevState =>{
                 return{
                     count:prevState.count + incrementNumber
                 }
             })
        }
        //we are passing name as a props from clickcounter and hovercounter but the props are being passed to the originalcomp not the newcomp so that is why we have to use {...this.props} to the newcomp so that we can be used to get the props
        render(){
            return (
                <OriginalComp count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
                
                )
        }

    }
    return NewComp
}

export default UpdatedComp;