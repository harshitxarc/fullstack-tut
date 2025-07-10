import React, {useState, useEffect} from 'react';

function UseEffectTut2(){
    
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
            window.addEventListener("resize", handleResize);
            console.log("Event Listner Added");

        return() => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listner Removed");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <div>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </div>
    );
}

export default UseEffectTut2;