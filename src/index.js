import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { User } from './components/User';
import { Main } from './components/Main';

class App extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {
         username: "Max"
      }
    }

    _changeUsername = (newName) => {
        this.setState({
            username: newName
        });
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={this._changeUsername} />
                <User username={this.state.username} />
            </div>
        );
    }
    
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
