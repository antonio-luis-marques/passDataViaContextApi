// Button.js - Child component that interacts with the context


/*
  Importing the useNameContext function from 
  the '../context/Context' file
*/
import { useNameContext } from '../context/Context'; 

export default function Button() {

  /*
    Using the useNameContext function to get the name context
  */
    const { name, setName } = useNameContext(); 

    // Function to change the name based on its current value
    const toogleName = () => setName(name === 'Antonio Marques' ? 'Mario Pollo' : 'Antonio Marques');

    return (
      
        /*
          Button that, when clicked, triggers the toogleName function.
         This function is responsible for changing the name based on its logic.
        */
      
      <button onClick={toogleName}> 
        toogle name
      </button>
    )
}
