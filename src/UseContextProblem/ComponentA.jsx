// useContext() = React Hook that allows you to share values between multiple levels
//                of components without passing props through each level [To avoid PROP DRILLING]

// PROVIDER COMPONENT
// 1. import  {createContext} from 'react';
// 2. export const myContext = createContext();
// 3. <MyContext.Provider value={value}>
//       wrap the child component
//    </MyContext.Provider>

// CONSUMER COMPONENT
// 1. import  {useContext} from 'react';
// 2. import {MyContext} from './ComponentA.jsx';
// 3. const value = useContext(MyContext);


import React, {useState, createContext} from 'react';
import ComponentB from './ComponentB.jsx';

export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("Harshit");

    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user = {user}/>
            </UserContext.Provider>
        </div>
    );
}

export default ComponentA;