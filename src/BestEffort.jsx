import React from "react"

export default function BestEffort(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    console.log(getBestEffortTimeFromLocalStorage())
    function getBestEffortTimeFromLocalStorage(){
        const array = JSON.parse(localStorage.getItem("bestEffort")) || []
        console.log(array)
        
        let smallest = 0;

        for (let i=0; i < array.length; i++) {
            let num = Number(array[i])
            if (num < smallest) {
                smallest = num
            }
        }
        return smallest
      }



    return (

        <>
        {props.tenzies && <div className="BestEffort">
            <h3>Best Attempt    :   {Math.min(...(JSON.parse(localStorage.getItem("bestEffort"))))}    </h3>
            
            </div>}    
            
        </>
    )
}

