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
      <Button buttonIcon="👤"  buttonName="Login"></Button>
    </nav>
  </header>
      
  )
}
function App(){
  return(<div>
    <Header/>
    <Main/>
    <Card/>
  </div>

  )
}

function Main(Props){
    return(
<main>
    <div className="card">
        </div>
          <div className="card">
            <div>
              <Button buttonIcon="😸"  buttonName="Cat"></Button>
                <Button buttonIcon="🐕"  buttonName="Dog"></Button>
            </div>
        </div>
   </main>
      )
  }
 function Button(props){
  return(
    <div>
      <button>
        <span role="img">{props.buttonIcon}</span>
        {props.buttonName}
     </button>
  </div>)}

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