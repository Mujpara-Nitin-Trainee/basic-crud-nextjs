import * as yup from 'yup';

export const formSchema = yup.object().shape({
  personName: yup.string().required(),
  customerName: yup.string().required(),
  date: yup.date().required(),
  shutter: yup.array().of(
    yup.object().shape({
      shutterName: yup.string().required(),
      width: yup.number().min(1, 'please Enter width').required(),
      height: yup.number().min(1, 'please Enter height').required(),
      area: yup.number().required()
    })
  ).required(),
  total: yup.number().required(),
  discountType: yup.string().required(),
  discount: yup.number().required()
})

export const customerFormSchema = yup.object().shape({
  customerName: yup.string().required(),
  customerEmail: yup.string().email().required(),
  customerMobileNo: yup.string().length(10).required()
})