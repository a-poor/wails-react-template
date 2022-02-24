import React from 'react';
import logo from './logo.svg';
import './App.css';

// Temporary workaround for auto-generated Go/Wails bindings
interface IWails {
  go: {
    main: {
      App: {
        Greet: (name: string) => Promise<string>;
      }
    }
  }
}

function App() {
  const onClick = () => {
    // Prompt the user to enter their name
    const name = window.prompt('What is your name?') || "You";

    // Call the backend API to get a greeting
    (window as unknown as IWails).go.main.App.Greet(name).then((result: string) => {
      // Alert the user of the message
      window.alert(result);
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={onClick}>
          Click Me!
        </button>
      </header>
    </div>
  );
}

export default App;
