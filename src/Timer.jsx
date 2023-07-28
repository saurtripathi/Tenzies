import React, { useState, useEffect } from 'react';
export default function Timer(props) {
    return (
        <>
            <div className="time">
                <div className='time--part'>
                    {(props.hours).toString().padStart(2, 0)}
                </div> :
                <div className='time--part'>
                    {(props.minuits).toString().padStart(2, 0)}
                </div>  :
                <div className='time--part'>
                    {(props.seconds).toString().padStart(2, 0)}
                </div>
            </div>
        </>
    )
}


