import React from "react"

const Hello= ()=>{
    // This is the normal way of giving the input 
    //return(
    //     <div className="dummyClass">
    //         <h1>lakshita</h1>
    //     </div>
    // )
    //createElement at first accepts 3 parameters
    return React.createElement(
        'div',  //string which specifies the html tag which is to be rendered
        null,  //2nd parameter is the optional properties
        React.createElement(
            'h1', //tag
            {id:'hello', className:'dummyClass'}, //additional properties//this will be the key value pair
            "hello lakshita" //the children we want to render
        )  //3rd parameter is the children to the div tag
    )
    

}