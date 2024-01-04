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
  },
});

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer;
