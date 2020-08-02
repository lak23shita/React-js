//Http request
import React,{Component} from "react"
//we  are importing this to make a get request
import axios from 'axios'

class PostList extends Component{
        constructor(props){
            super(props)
            this.state={
                posts :[]
            }
        }
        //this method will accept the api end point as its end point
    componentDidMount(){
        //we rae geting the posts from the api and in the than and catch block we rae retriving the posts
        axios.get('https://jsonplaceholder.typicode.com/posts')
  
        .then(response =>{
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error =>{
            console.log(error)
        })
    }
    
    render(){
        const {posts}=this.state
        
        return(            
            <div>
            List of posts
            {
                posts.length ?
                posts.map(post =><div key={post.id}>{post.title}</div>):
                
            }
            </div>
        )
    }
}

export default PostList ;