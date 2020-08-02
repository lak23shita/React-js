//portals
import React from "react";
import ReactDOM from 'react-dom';


function PortalDemo(){
return ReactDOM.createPortal(
            <h1>Portals demo</h1>,
            document.getElementById('portal-root')
               
            
        )

}

export default PortalDemo;

//portals are the child which are not on the root dom rather they are on different model dom but it behaves the same way as they ar ethe child of the parent comp in which it is included
//these portals means that the child is on another dom node that is portal-root