import React, { Component } from 'react';
import * as quoteActions from '../actions/quoteActions';

import { connect } from 'react-redux';

class ReduxAsyncThunk extends Component {
    render() {
        return (
            <div>
                {this.props.isLoading ? <p>Fetching the quote</p> : <p></p>}
                {this.props.quote}
                <button onClick={ () => this.props.loadQuote()}>Load Quote</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        quote: state.quote,
        isLoading: state.isLoading,
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadQuote: () => dispatch(quoteActions.loadQuote())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxAsyncThunk);