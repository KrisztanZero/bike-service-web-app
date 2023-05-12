import React, { useState, useEffect } from 'react';
import BasicExample from './Components/Navbar';

export default function WelcomeMessage(){
    const [greeting, setGreeting] = useState('');
       
    
    useEffect(() => {
        fetch("https://localhost:44333/Greeting")
        .then(response => response.text())
        .then(data => {
            setGreeting(data)
          })
    }, []);
    

    return (
      <div>
        <div><BasicExample/></div>        
        <h1>{greeting}</h1>
      </div>
    );  
}




  