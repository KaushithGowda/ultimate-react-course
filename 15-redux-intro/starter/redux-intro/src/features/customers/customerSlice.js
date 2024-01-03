const initialCustomerState = {
  fullName: '',
  nationalId: null,
  createdAt: null,
};

export default function customerReducer(state = initialCustomerState, action) {
  switch (action.type) {
    case 'customer/create':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };

    case 'customer/updateFullName':
      return {
        ...state,
        fullName: action.payload.fullName,
      };

    default:
      return state;
  }
}

export function createCustomer(fullName, nationalId) {
  return {
    type: 'customer/create',
    payload: {
      fullName,
      nationalId,
      createdAt: new Date().toLocaleTimeString(),
    },
  };
}

export function updateFullName(fullName) {
  return {
    type: 'customer/updateFullName',
    payload: { fullName },
  };
}
