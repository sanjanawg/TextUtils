// Import necessary modules
import React from 'react';

import './App.css';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm'; // Adjust the path based on your project structure
//import About from './components/About';

// Define the App component
function App() {
  
  return (
    <div>
      <Navbar />
      <TextForm heading="Enter Text to analyse"/>
   
    </div>
  );
}

// Export the App component
export default App;
