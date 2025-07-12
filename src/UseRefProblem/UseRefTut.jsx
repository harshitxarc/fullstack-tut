// useState = Re-renders the component when the state value changes.
//            useRef obtains an object which contains only one property named "current"

// useRef = "use Reference" does not cause re-renders when its value changes.
//           When you want a component to "remember" some information,
//           but you don't want that information to trigger new renders.

//          1. Accessing/Intracting with DOM elements
//          2. Handling Focus, Animations, Transitions
//          3. Managings Timers and Intervals


import React, {useState, useEffect, useRef} from 'react';

function UseRefTut(){

    const ref = useRef(0);

    console.log(ref);
    
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

export default UseRefTut;