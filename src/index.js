import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Hello React</h1>;

// 1
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);

// 2 
// ReactDOM.createRoot(document.getElementById('root')).render(myFirstElement);

// 3
const myelement = (
  <table>
    <tbody>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </tbody>
  </table>
);

 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myelement);