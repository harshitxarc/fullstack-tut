import React,{useState} from 'react';
import './ColorPicker.css';

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");

    const hadleColorChange =(e) => {
        setColor(e.target.value);
    }

    return(
        <div className='color-picker-container'>
            <h1>Color Picker</h1>
            <div className='color-display' style={{backgroundColor : color}}>
                <p>Selected color: {color}</p>
            </div>
            <label>Select a color:</label>
            <input type='color' value={color} onChange={hadleColorChange}></input>
        </div>
    );
}

export default ColorPicker;