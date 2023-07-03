import React from 'react';
import './App.css';
import Theming from "./themes/Theming";
import NavigationBar from "./homepage/NavigationBar";

function App() {
    return (
        <Theming>
                <NavigationBar/>
        </Theming>
        // {/*<header className="App-header">*/}
        // {/*  <img src={logo} className="App-logo" alt="logo" />*/}
        // {/*  <p>*/}
        // {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
        // {/*  </p>*/}
        // {/*  <a*/}
        // {/*    className="App-link"*/}
        // {/*    href="https://reactjs.org"*/}
        // {/*    target="_blank"*/}
        // {/*    rel="noopener noreferrer"*/}
        // {/*  >*/}
        // {/*    Learn React*/}
        // {/*  </a>*/}
        // {/*</header>*/}
    );
}

export default App;

