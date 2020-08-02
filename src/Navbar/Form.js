//form handling
import React,{Component} from "react"

class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            username: '',
            comments: '',
            topic: 'react',
        }
    }

    handleUsernameChange=(event)=>{
        this.setState({
            username : event.target.value
        })
    }

    handleCommentsChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    
    }
    handleSelectHandler=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=(event)=>{
        //this will return the emplate literals
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        //this line will save the enteries which we hae feeded in the form 
        event.preventDefault()
    }

   
    render(){
        
        return(
            //onSubmit is the method just like onChange which will perform the submission
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>Commets</label>
                    <textarea value={this.state.comments}
                    onChange={this.handleCommentsChange} />

                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleSelectHandler} >
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="option">Option</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form;