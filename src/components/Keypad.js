// Code Keypad Component Here
import React from "react";


function Keypad (){

function handlePassword (e) {
e.preventDefault()
console.log("Entering Password...")
}

function handleSubmit (e) {
    e.preventDefault()

}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="password">Password</label>
            <input type="password" 
            id="password" 
            onChange={handlePassword} >
            </input>
            <button>Enter</button>
            </form>
        </div>
    )
}

export default Keypad;