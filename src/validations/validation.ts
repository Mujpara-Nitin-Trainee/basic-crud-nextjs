import * as yup from 'yup';

export const formSchema = yup.object().shape({
  personName: yup.string().required(),
  customerName: yup.number().min(1, 'Please Select Any Customer').required(),
  date: yup.date().required(),
  shutter: yup.array().of(
    yup.object().shape({
      shutterName: yup.number().min(1, 'Please Select Any shutter').required(),
      width: yup.number().min(1, 'please Enter width').required(),
      height: yup.number().min(1, 'please Enter height').required(),
      area: yup.number().required()
    })
  ).required(),
  total: yup.number().required(),
  discount: yup.string().required(),
})

export const customerFormSchema = yup.object().shape({
  customerName: yup.string().required(),
  customerEmail: yup.string().email().required(),
  customerMobileNo: yup.string().length(10).required()
})