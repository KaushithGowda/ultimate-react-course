import { createSlice } from '@reduxjs/toolkit';

const initialAccountState = {
  balence: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState: initialAccountState,
  reducers: {
    deposit(state, action) {
      state.balence += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balence -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return { payload: { amount, purpose } };
      },
      reducer(state, action) {
        state.loan += action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balence += action.payload.amount;
      },
    },
    payLoan(state, action) {
      state.balence -= state.loan;
      state.loan = 0;
      state.loanPurpose = '';
    },
    currencyConverting(state) {
      state.isLoading = true;
    },
  },
});

export function deposit(amount, currency) {
  if (currency === 'USD') return { type: 'account/deposit', payload: amount };
  return async function dispatch(dispatch, getState) {
    dispatch({ type: 'account/currencyConverting', payload: true });
    const data = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const convertedCurrency = await data.json();

    return dispatch({
      type: 'account/deposit',
      payload: Number(convertedCurrency.rates.USD),
    });
  };
}

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer;
