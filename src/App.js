import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';


function App() {

  const [name, setname] = useState("Roja")
  const [profession, setprofession] = useState("Developer")
  
  
  
  return (
    <div className="App">
      <h3>{name}</h3>
      <h4>{profession}</h4>
     <button onClick={()=>setprofession("React Developer")}>Promote</button>
      <h1>React Router</h1>
    
    <Component1
    // This is known as event bubbling 
     name={name} profession={profession}
     setname={setname}

     />
    <Component2/>

     
    <Component3/>
    <Component4/>


    </div>
  );
}


export default App;
