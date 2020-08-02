//methods and props in eventhandle


import React from "react"

function ChildComponent (props){
return(
            <div>
                {/* //we have used this to call the eventhandler */}
                {/* we have passed the child as a value or a parameter to the greetparent function */}
               <button onClick={() =>props.greetHandler('child')}>Greet Parent</button> 
            </div>
        )

}

export default ChildComponent;