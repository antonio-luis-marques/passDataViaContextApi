// App.js - Main component of the application

// Importing the useNameContext function from the './context/Context' file
import { useNameContext } from './context/Context'; 

 // Importing the Button component from the './components/Button' file
import Button from './components/Button';


function App() {

  // Using the useNameContext function to get the name context
  const { name } = useNameContext();

  return (
    <div>
      {/* Displaying the 'name' */}
      <p>Hello: {name && (name)}</p>
      <Button/>
    </div>
  );
}

export default App;
