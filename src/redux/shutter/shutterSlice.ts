import { createSlice } from "@reduxjs/toolkit";
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
    }
  }
})

export const { addShutterBill } = shutterSlice.actions;

export const shutterDetails = (state: RootState) => state.shutterReducer;

export default shutterSlice.reducer;