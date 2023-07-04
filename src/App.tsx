import React from 'react';
import './App.css';
import Theming from "./themes/Theming";
import Homepage from "./homepage/Homepage";

function App() {
    return (
        <Theming>
            <Homepage/>
        </Theming>
    );
}

export default App;

