import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

  // <>
  //   <table>
  //     <thead>
  //       <tr>
  //         <td>Currency</td>
  //         <td>We Buy</td>
  //         <td>Exchange</td>
  //         <td>We Sell</td>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       <tr>
  //       <td>[array.cur]</td>
  //         <td>[array.exc]</td>
  //         <td></td>
  //         <td></td>
  //         {/* <td>{cur}</td>
  //         <td>{buy}</td>
  //         <td>{exc}</td>
  //         <td>{sell}</td> */}
  //       </tr>
  //     </tbody>
  //   </table>
  // </>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
