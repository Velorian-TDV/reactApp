import React from 'react';
import ReactDOM from 'react-dom';
import { Greet } from './modules/Greet.jsx';

const App = () => {
    return <Greet />
};

ReactDOM.render(<App />, document.getElementById('root'));
