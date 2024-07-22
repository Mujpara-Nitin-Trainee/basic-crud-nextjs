import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface shutterAttribute {
  shutterBill: {
    id: number,
    personName: string,
    customerName: string,
    date: Date,
    shutter: {
      shutterName: string,
      width: number,
      height: number,
      area: number,
    }[],
    total: number,
    discountType: string,
    amount: string
  }[]
}

const initialState: shutterAttribute = {
  shutterBill: []
}

export const shutterSlice = createSlice({
  name: 'shutter',
  initialState,
  reducers: {
    addShutterBill: (state, action) => {
      state.shutterBill.push(action.payload);
    },
    updateShutterBill: (state, action) => {
      const shutterBills = state.shutterBill;
      const index = shutterBills.findIndex(bill => bill.id === action.payload.id);
      shutterBills[index] = action.payload;
    }
  }
})

export const { addShutterBill, updateShutterBill } = shutterSlice.actions;

export const shutterDetails = (state: RootState) => state.shutterReducer;

export default shutterSlice.reducer;