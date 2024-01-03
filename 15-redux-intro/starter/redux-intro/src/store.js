import { createStore } from 'redux';

// 262. Creating a Reducer: Bank Account
const initialState = {
  balence: 0,
  loan: 0,
  loanPurpose: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balence: state.balence + action.payload,
      };
    case 'account/withdraw':
      return {
        ...state,
        balence: state.balence - action.payload,
      };
    case 'account/requestLoan':
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balence: state.balence + action.payload.amount,
      };
    case 'account/payLoan':
      return {
        ...state,
        loan: 0,
        loanPurpose: '',
        balence: state.balence - state.loan,
      };
    default:
      return state;
  }
}

// 263. Creating a Redux Store
const store = createStore(reducer);

// store.dispatch({ type: 'account/deposit', payload: 500 });
// console.log(store.getState());

// store.dispatch({ type: 'account/withdraw', payload: 200 });
// console.log(store.getState());

// store.dispatch({
//   type: 'account/requestLoan',
//   payload: {
//     amount: 1000,
//     purpose: 'Car',
//   },
// });
// console.log(store.getState());

// store.dispatch({ type: 'account/payLoan' });
// console.log(store.getState());

// 264. Working with Action Creators
function deposit(amount) {
  return { type: 'account/deposit', payload: amount };
}

function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount };
}

function requestLoan(amount, purpose) {
  return {
    type: 'account/requestLoan',
    payload: {
      amount,
      purpose,
    },
  };
}

function payLoan() {
  return { type: 'account/payLoan' };
}

function logState() {
  console.log(store.getState());
}

store.dispatch(deposit(500));
logState();
store.dispatch(withdraw(200));
logState();
store.dispatch(requestLoan(1000, 'car'));
logState();
store.dispatch(payLoan());
logState();
