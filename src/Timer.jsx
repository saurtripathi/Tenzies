import React, { useState, useEffect } from 'react';



export default function Timer(props) {



    return (

        <>
            <div className="app">
                <div className="time">
                    <div className='time--part'>{props.hours}</div> :  <div className='time--part'>{props.minuits}</div>  :  <div className='time--part'>{props.seconds}</div> 
                </div>
            </div>
            {props.totalTime && <div className='timer--time'>
                <h3>Time Taken  :   {props.totalTime}   </h3>
            </div>}
        </>

    )
}


