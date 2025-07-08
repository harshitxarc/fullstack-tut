import React, {useState} from 'react';

function Array(){
    
    const [fruits,setFruits] = useState(['Apple', 'Banana', 'Cherry']);

    function handleAddChange(){}

    function handleRemoveChange(){}

    return(
        <div>
            <h2>List of Foods</h2>
            <ul>
                {fruits.map((friut, index)=> <li key={index}></li>)}
            </ul>
        </div>
    );
}

export default Array;