import React, {useState} from 'react';

function Array(){
    
    const [fruits,setFruits] = useState(["Apple", "Banana", "Cherry"]);

    function handleAddFruit(event){
        
        const input = document.getElementById("fruitInput");
        const newFruit = input.value.trim();
        if (newFruit) {
            setFruits(f => [...f, newFruit]);
        }
        input.value = "";
    }

    function handleRemoveFruit(index){
        setFruits(fruits.filter((_, i)=> i !== index));
    }

    return(
        <div>
            <h2>List of Foods</h2>
            <ul>
                {fruits.map((fruit, index)=> <li 
                                            key={index} 
                                            onClick={() => handleRemoveFruit(index)}
                                            >{fruit}</li>)}
            </ul>
            <input type="text" id="fruitInput" placeholder="Enter Fruit Name"/>
            <button onClick={handleAddFruit}>Add Fruit</button>
        </div>
    );
}

export default Array;