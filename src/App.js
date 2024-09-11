import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { generateToken, messaging } from './config/firebase';
import { onMessage } from 'firebase/messaging';

function App() {

  useEffect(() => {
    generateToken().then((token) => {
      if (token) {
        console.log("Client Token: " + token);
      }else{
        console.log("Failed to generate the app registration token.");
      }
    })

    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
