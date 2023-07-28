import React from "react"

export default function Die(props) {
    // console.log(`isHeld : ${props.isHeld}`)
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (

        <>
            {
                props.value === 1 &&
                <div className="die first-face" style={styles} onClick={props.holdDice}>
                    <span className="dot"></span>
                </div>
            }
            {
                props.value === 2 &&
                <div className="die second-face" style={styles} onClick={props.holdDice}>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            }
            {
                props.value === 3 &&
                <div className="die third-face" style={styles} onClick={props.holdDice}>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            }
            {
                props.value === 4 &&
                <div className="die fourth-face" style={styles} onClick={props.holdDice}>
                    <div>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            }
            {
                props.value === 5 &&
                <div className="die fifth-face" style={styles} onClick={props.holdDice}>
                    <div>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div>
                        <span className="dot"></span>
                    </div>
                    <div>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            }
            {
                props.value === 6 &&
                <div className="die sixth-face" style={styles} onClick={props.holdDice}>
                    <div>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            }
        </>
    )
}

