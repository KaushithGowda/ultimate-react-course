const initialAccountState = {
  balence: 0,
  loan: 0,
  loanPurpose: '',
};

export default function accountReducer(state = initialAccountState, action) {
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

export function deposit(amount) {
  return { type: 'account/deposit', payload: amount };
}

export function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount };
}

export function requestLoan(amount, purpose) {
  return {
    type: 'account/requestLoan',
    payload: {
      amount,
      purpose,
    },
  };
}

export function payLoan() {
  return { type: 'account/payLoan' };
}
