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
      return state;
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
