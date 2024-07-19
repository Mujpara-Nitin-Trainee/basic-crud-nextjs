export type FormProps = "name" | "date"

export interface formAttributes {
  personName: string,
  customer: string,
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

export type formProp = | "personName" | "customer" | "date" | "width" | "height" | "area" | "total" | "amount" | "percentage" | "discount" | "shutterName"