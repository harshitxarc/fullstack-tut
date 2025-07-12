import React, {useState, useEffect, useRef} from 'react';

function UseRefTut2(){

    const ref = useRef(0);
    
    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick(){
        ref.current++;
        console.log(ref.current);
    }

    return(
        <>
        <button onClick={handleClick}>Click me!</button>
        </>
    );
}

export default UseRefTut2;