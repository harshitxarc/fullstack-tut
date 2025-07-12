import React, {useState, useEffect, useRef} from 'react';

function UseRefTut2(){

    const inputRef1 = useRef("null");
    const inputRef2 = useRef("null");
    const inputRef3 = useRef("null");
    
    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick1(){
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor = "Yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick2(){
        inputRef2.current.focus()
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "Yellow";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3(){
        inputRef3.current.focus()
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "Yellow";
    }

    return(
        <>
        <button onClick={handleClick1}>Click me!</button>
        <input type="text" ref={inputRef1} />

        <button onClick={handleClick2}>Click me!</button>
        <input type="text" ref={inputRef2} />

        <button onClick={handleClick3}>Click me!</button>
        <input type="text" ref={inputRef3} />
        </>
    );
}

export default UseRefTut2;