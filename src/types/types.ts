export type FormProps = "name" | "date"

export interface shutterAttribute {
  shutterName: string,
  width: number,
  height: number,
  area: number,
}

export interface formAttributes {
  id?: number,
  personName: string,
  customerName: string,
  date: string,
  shutter: shutterAttribute[],
  total: number,
  discountType: string,
  amount?: string,
  percentage?: string,
  discount: number
}

export interface customerAttribute {
  id?: number,
  customerName: string,
  customerEmail: string,
  customerMobileNo: string
}

export type formProp = | "personName" | "customerName" | "date" | `shutter.${number}.width` | `shutter.${number}.height` | `shutter.${number}.area` | "total" | "amount" | "percentage" | "discountType" | "discount" | `shutter.${number}.shutterName` | "amount" | "percentage"

export interface shutterBillAttribute {
  id?: number,
  personName: string,
  customerName: string,
  date: string,
  shutter: {
    shutterName: string,
    width: number,
    height: number,
    area: number,
  }[],
  total: number,
  discountType: string,
  discount: number,
  amount: string
}