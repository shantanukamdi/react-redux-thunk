import axios from 'axios';

export const loadQuote = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'LOAD_QUOTE_START' });

        axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
            .then((response) => {
                console.log(response.data);
                dispatch({ type: 'LOAD_QUOTE_SUCCESS', payload: response.data[0].quote });
            }).catch(error => {
                dispatch({ type: 'LOAD_QUOTE_FAILURE', payload: error });
            })
    }
}