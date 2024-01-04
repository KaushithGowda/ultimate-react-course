const initialAccountState = {
  balence: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};

export default function accountReducer(state = initialAccountState, action) {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balence: state.balence + action.payload,
        isLoading: false,
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

    case 'account/currencyConverting':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}

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
