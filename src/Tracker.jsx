import React from "react"

export default function Tracker(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (

        <>
            {props.tenzies && <div className="tracker">
                <h3>No. of Attempts    :   {props.tracker} </h3>

            </div>}

        </>
    )
}

