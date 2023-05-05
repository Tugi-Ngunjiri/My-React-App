import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Header(){
  return(
    <header>
    <h1>PetLand</h1>
    <nav>
      <button>
        <span role="img">👤</span>
        Login
      </button>
    </nav>
  </header>
      
  )
}
function App(){
  return(<div>
    <Header/>
    <Main/>
    <Button/>
    <Card/>
  </div>

  )
}

function Main(){
    return(
<main>
        <div className="card">
        </div>
        <div className="card">
    
          <div>
          
          </div>
        </div>
      </main>
      )
  }
 function Button(){
  return(
  <div>
    <button>
  <span role="img">😸</span>
  Cats
</button>
<button>
  <span role="img">🐕</span>
  Dogs
</button></div>)}

 function Card(){
  return(
  <div>
  <h2>Welcome to PetLand!</h2>
 <em>Find your dream pet</em>
 <h2>What pets would you like to see?</h2></div>)}

root.render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();