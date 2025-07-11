import React, {useState, useEffect} from 'react';
import './DigitalClock.css';

function DigitalClock(){

    return(
        <div className='clock-container'>
            <div className='clock'>
                <span>00:00:00</span>
            </div>
        </div>
    );
}

export default DigitalClock;