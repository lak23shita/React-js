//Fragments 
import React from "react"


function Components(){
    const items=[]
return(

            //we are using react fragments becoz we want these multiple elemnts and ehen div is returned than it showed various warnings 
            <React.Fragment>
            {
                items.map(item=>(
                
                //we can pass a key to the react fragment
                    <React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                    </React.Fragment>

                ))
            }
            <td>NAME</td>
            <td>lakshita</td>
            </React.Fragment>

            //this is the alternative for writing the react fragments

            // <>
            
            //  <td>NAME</td>
            //  <td>lakshita</td>
            // </>
                
          
        )

}

export default Components;
