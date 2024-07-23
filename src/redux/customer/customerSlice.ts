import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface customerAttribute {
  customer: {
    id: number,
    customerName: string,
    customerEmail: string,
    customerMobileNo: number
  }[]
}

const initialValue: customerAttribute = {
  customer: []
}

export const customerSlice = createSlice({
  name: 'customer',
  initialState: initialValue,
  reducers: {
    addCustomer: (state, action) => {
      state.customer.push(action.payload)
    }
  }
})

export const { addCustomer } = customerSlice.actions;

export const customerDetails = (state: RootState) => state.customerReducer;

export default customerSlice.reducer;