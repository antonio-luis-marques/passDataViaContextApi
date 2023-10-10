// Context.js - Context API component

// Importing the necessary elements to create our context API

import React, { createContext, useContext, useState } from 'react'; 


// Creating the context with default values
const NameContext = createContext({
    name: '',
    setName: () => ''
});

export const NameProvider = ({ children }) => {

    // Initializing the name state
    const [name, setName] = useState('Antonio Marques'); 

    return (
        <NameContext.Provider value={{ name, setName }}>
            {children}
        </NameContext.Provider>
    );
}

// Hook to access the name context
export const useNameContext = () => useContext(NameContext); 
