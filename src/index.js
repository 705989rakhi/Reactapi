import React from 'react';
import ReactDOM from "react-dom/client";

import Card from "./Card";
function App(){
    return (
        <div className="App">
            <div className="container">
              <Card />
              
            </div>
        </div>
    )
}

//ReactDOM.render(
   // <App />
   // ,document.getElementById('root')); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

