import React from 'react';
import ReactDOM from 'react-dom';
import './static/index.css';
import App from './static/App';
import registerServiceWorker from './static/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
