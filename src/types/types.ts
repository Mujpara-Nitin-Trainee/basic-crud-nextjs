export type FormProps = "name" | "date"

export interface formAttributes {
  personName: string,
  customerName: string,
  date: Date,
  shutterName: number,
  width: number,
  height: number,
  area: number,
  total: number,
  discount: string,
  amount: number,
  percentage: number,
}

export interface customerAttribute {
  id: number,
  customerName: string,
  customerEmail: string,
  customerMobileNo: number
}

export type formProp = | "personName" | "customerName" | "date" | "width" | "height" | "area" | "total" | "amount" | "percentage" | "discount" | "shutterName" 