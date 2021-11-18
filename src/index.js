import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { st1 } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Store from './redux/redux-store';
//let Render=(state)=>{
ReactDOM.render(
  <BrowserRouter>
  
<Provider store={Store}>
    <App   />
   </Provider>
 
  </BrowserRouter> ,
  document.getElementById('root')
 
);
console.log("call");

//}

//Render(Store_.getState());
//Store_.subscribe(()=>{
 // let rr=Store_.getState();
 // Render(rr)});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
