import {createActions, handleActions} from 'redux-actions';

const defaultState = {
  counter: 0,
};

const {increment} = createActions({
  INCREMENT: amount => ({amount}),
});

export default handleActions({
  [increment]: (state, {payload: amount}) => ({
    ...state, counter: state.counter + amount
  }),
}, defaultState);
