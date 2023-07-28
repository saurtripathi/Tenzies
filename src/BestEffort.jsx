import React from "react"

export default function BestEffort(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    function getBestEffortTimeFromLocalStorage() {
        const arr = JSON.parse(localStorage.getItem("bestEffort")) || []
        const bestTimeStamp = Math.min(...arr)
        let hour = 0
        let min = 0
        let sec = 0
        let bestTimeStampString = ''
        if (bestTimeStamp >= 3600) {
            min = bestTimeStamp % 3600
            hour = (bestTimeStamp / 3600).toFixed(0)
            if (min >= 60) {
                min = (min / 60).toFixed(0)
                sec = min % 60
            }
        } else if (bestTimeStamp < 3600 && bestTimeStamp >= 60) {
            min = (bestTimeStamp / 60).toFixed(0)
            sec = bestTimeStamp % 60
        } else if (bestTimeStamp < 60) {
            sec = bestTimeStamp
        }
        bestTimeStampString = `${hour}h:${min}m:${sec}s`
        return bestTimeStampString
    }

    return (

        <>
            {props.tenzies && <div className="BestEffort">
                <h3>Best Attempt    :   {getBestEffortTimeFromLocalStorage()}    </h3>
            </div>}

        </>
    )
}

