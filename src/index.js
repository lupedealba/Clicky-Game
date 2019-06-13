import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




// //imports dependencies and files
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// //renders the App.js file to the root element (index.html in public folder)
// ReactDOM.render(<App />, document.getElementById("root"));