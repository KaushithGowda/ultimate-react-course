import { applyMiddleware, combineReducers, createStore } from 'redux';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';
import { thunk } from 'redux-thunk';

// 262. Creating a Reducer: Bank Account

// 265. Adding More State: Customer

const root = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// 263. Creating a Redux Store
export const store = createStore(root, applyMiddleware(thunk));

export function logState() {
  console.log(store.getState());
}

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

// store.dispatch(deposit(500));
// logState();
// store.dispatch(withdraw(200));
// logState();
// store.dispatch(requestLoan(1000, 'car'));
// logState();
// store.dispatch(payLoan());
// logState();

// store.dispatch(createCustomer('kaushik', 123456));
// logState();

// store.dispatch(updateFullName('koushik'));
// logState();
