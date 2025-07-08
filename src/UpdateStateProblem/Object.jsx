//Update the state of an object in React using useState hook

import React, {useState} from 'react';

function Object(){

    const [car,setCar]= useState({year: 2025, 
                                model: 'Porche', 
                                color: 'Red'});

    const handleYearChange = (e) => {
        setCar(c=>({...c, year: e.target.value}));
    }
    const handleModelChange = (e) => {
        setCar(c=>({...c, model: e.target.value}));
    }
    const handleColorChange = (e) => {
        setCar(c=>({...c, color: e.target.value}));
    }

return(
    <>
    <p>Your favourite car is: {car.year} {car.model} {car.color}</p>

    <input type="number" value={car.year} onChange={handleYearChange}/><br />
    <input type="text" value={car.model} onChange={handleModelChange}/><br />
    <input type="text" value={car.color} onChange={handleColorChange}/><br />
    </>
);
}

export default Object;