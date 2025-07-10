// useEffect is a React hook that allows you to perform side effects in function components. It can be used for tasks like data fetching, subscriptions, or manually changing the DOM. The hook runs after the component renders and can be configured to run only when certain dependencies change.

// useEffect(() => {})                  // Runs after every re-render
// useEffect(() => {}, [])              // Runs only on mount (once after the initial render)
// useEffect(() => {}, [value])         // Runs on mount + whenever value changes



import React, {useState, useEffect} from 'react';

function UseEffectTut(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    function addCount(){
        setCount(c => c+1);
    }

    function subtractCount(){
        setCount(c => c-1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default UseEffectTut;