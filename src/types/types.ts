export type FormProps = "name" | "date"

export interface shutterAttribute {
  shutterName: number,
  width: number,
  height: number,
  area: number,
}

export interface formAttributes {
  personName: string,
  customerName: number,
  date: Date,
  shutter: shutterAttribute[],
  total: number,
  discount: string,
  amount?: number,
  percentage?: number,
}

export interface customerAttribute {
  id: number,
  customerName: string,
  customerEmail: string,
  customerMobileNo: number
}

export type formProp = | "personName" | "customerName" | "date" | `shutter.${number}.width` | `shutter.${number}.height` | `shutter.${number}.area` | "total" | "amount" | "percentage" | "discount" | `shutter.${number}.shutterName` 