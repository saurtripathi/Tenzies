import React from "react"

export default function Tracker(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (

        <>
            {/* <h3>Tracker : {props.tracker}</h3> */}
         {props.tenzies && <div className="tracker">
            <h3>Attempts    :   {props.tracker} </h3>
            
            </div> }   
            
        </>
    )
}

