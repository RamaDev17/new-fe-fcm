import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { generateToken, messaging } from './config/firebase';
import { onMessage } from 'firebase/messaging';
import { ToastContainer, toast } from 'react-toastify';  // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';

function App() {

  useEffect(() => {
    generateToken().then((token) => {
      if (token) {
        console.log("Client Token: " + token);
      }else{
        console.log("Failed to generate the app registration token.");
      }
    })

    const unsubscribe = onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      // Use toast to display message
      toast.info(`New message: ${payload.notification?.title || 'No title'}`, {
        position: "top-right" 
      });
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
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
      <ToastContainer />  {/* Add ToastContainer component */}
    </div>
  );
}

export default App;
