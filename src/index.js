import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//REDUCE
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducers"

const root = ReactDOM.createRoot(document.getElementById('root'));


const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

root.render(
  <Provider store={store}>
    <App />
  </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


// //IMPORTATION REDUCES

// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import rooteReducer from "./reduces"

// const root = ReactDOM.createRoot(document.getElementById('root'));


// const store = configureStore({
//   reducer: rooteReducer,
//   devTools: true,
// })

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
 
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
