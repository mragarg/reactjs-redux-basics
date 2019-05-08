// import React from 'react';
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

// import { User } from './components/User';
// import { Main } from './components/Main';

// class App extends React.Component {
//     constructor(props) {
//       super(props);
    
//       this.state = {
//          username: "Max"
//       }
//     }

//     _changeUsername = (newName) => {
//         this.setState({
//             username: newName
//         });
//     }

//     render() {
//         return (
//             <div className="container">
//                 <Main changeUsername={this._changeUsername} />
//                 <User username={this.state.username} />
//             </div>
//         );
//     }
    
// }


// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { createStore } from 'redux';

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            state = state + action.payload;
            break;
        case "SUBTRACT":
            // Logic
            break;
    }

    // Always return a state because that's the state the App will use
    return state;
};

// Second arugment is the inital state
const store = createStore(reducer, 1);

// Called whenever store is update
store.subscribe(() => {
    console.log("Store updated", store.getState());
});

// Dispatch expects a JS Object
store.dispatch({
    type: "ADD",
    payload: 10   // Payload is the value of the action
});