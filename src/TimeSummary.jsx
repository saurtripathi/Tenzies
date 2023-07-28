import React from "react"

export default function Timer(props) {



    return (

        <>
            {(props.totalTime && props.tenzies) && <div className='timer--time'>
                <h3>Time Taken  :   {props.totalTime}   </h3>
            </div>}

        </>

    )
}


