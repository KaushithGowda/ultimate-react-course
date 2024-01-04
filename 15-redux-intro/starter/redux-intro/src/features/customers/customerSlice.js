import { createSlice } from '@reduxjs/toolkit';
const initialCustomerState = {
  fullName: '',
  nationalId: null,
  createdAt: null,
};

const customerSlice = createSlice({
  name: 'customer',
  initialState: initialCustomerState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: {
            fullName,
            nationalId,
            createdAt: new Date().toLocaleTimeString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateFullName(state, action) {
      state.fullName = action.payload.fullName;
    },
  },
});

export const { createCustomer, updateFullName } = customerSlice.actions;
export default customerSlice.reducer;
