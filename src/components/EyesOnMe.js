// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
 
    function handleFocus (e){
        e.preventDefault()
        console.log ("Good!")
      
    }
  
    function handleBlur(e){
        e.preventDefault()
        console.log ("Hey! Eyes on me!")
      
    }
    return(
        <div
         onFocus={handleFocus}
        onBlur={handleBlur}>
        <button>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;