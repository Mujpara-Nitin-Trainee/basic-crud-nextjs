import { useForm, UseFormRegister } from "react-hook-form";
import Label from "./common/label";
import { customerAttribute } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer, customerDetails } from "@/redux/customer/customerSlice";

export default function Model() {

  const dispatch = useDispatch();
  const customers = useSelector(customerDetails);

  const { register, handleSubmit } = useForm<customerAttribute>();

  const handleCustomer = (formData: customerAttribute) => {

    let flag = 0;

    if (customers.customer.length !== 0) {
      customers.customer.map((ele) => {
        if (ele.customerName === formData.customerName || ele.customerEmail === formData.customerEmail) {
          console.log("Existing");
          flag = 1;
        }
      })
      if (flag === 0) {
        formData.id = customers.customer.length + 1;
        dispatch(addCustomer(formData));
      }
    } else {
      formData.id = customers.customer.length + 1;
      dispatch(addCustomer(formData));
    }
  }

  return (
    <>
      <form>
        <div className="w-1/2 absolute border-2 border-black bg-white">
          <input type="hidden" {...register('id')} defaultValue="0" />
          <div className="w-2/4 flex justify-between my-2">
            <Label name="Customer Name" />
            <input {...register('customerName')} placeholder="Enter Customer Name" className="border-2 border-black" />
          </div>
          <div className="w-2/4 flex justify-between my-2">
            <Label name="Customer Email" />
            <input  {...register('customerEmail')} placeholder="Enter Customer Email" className="border-2 border-black" />
          </div>
          <div className="w-2/4 flex justify-between my-2">
            <Label name="Customer Mobile No" />
            <input {...register('customerMobileNo')} placeholder="Enter Customer Mobile No" className="border-2 border-black" />
          </div>
          <div className="w-2/4 flex justify-between">
            <input type="button" onClick={handleSubmit(handleCustomer)} value="submit" />
          </div>
        </div>
      </form>
    </>
  )
}