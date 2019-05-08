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

import { createStore, combineReducers, applyMiddleware } from 'redux';

// const initialState = {
//     result: 1,
//     lastValues: [],
// }

const mathReducer = (state = {
                        result: 1,
                        lastValues: []
                    }, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            // state.result -= action.payload;      // DON'T DO THIS BECAUSE STATE IS IMMUTABLE
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }

    // Always return a state because that's the state the App will use
    return state;
};


const userReducer = (state = {
                        name: 'Max',
                        age: 27
                    }, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload,
            };
            break;
        case "SET_AGE":
            // state.result -= action.payload;      // DON'T DO THIS BECAUSE STATE IS IMMUTABLE
            state = {
                ...state,
                age: action.payload
            }
            break;
    }

    // Always return a state because that's the state the App will use
    return state;
};

// Middleware that logs something
const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action: ", action);
    next(action); // next method makes the action travel further (updates store/state)
}

// Second arugment is the inital state (removed because created initialState Object)
// combineReducers allows multiple reducers to be in store
// applyMiddleware takes an argument that takes in a middleware we want to use
const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(myLogger));

// Called whenever store is update
store.subscribe(() => {
    console.log("Store updated", store.getState());
});

// Dispatch expects a JS Object
store.dispatch({
    type: "ADD",
    payload: 100   // Payload is the value of the action
}); // Expect 101

store.dispatch({
    type: "ADD",
    payload: 22
}); // Expect 123

store.dispatch({
    type: "SUBTRACT",
    payload: 80
}); // Expect 43

store.dispatch({
    type: "SET_AGE",
    payload: 30
}); // Expect Age: 30