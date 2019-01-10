import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/store';
import ReduxAsyncThunk from './components/ReduxAsyncThunk';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ReduxAsyncThunk />                
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));