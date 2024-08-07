import { useForm, UseFormRegister } from "react-hook-form";
import Label from "./common/label";
import { customerAttribute } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer, customerDetails } from "@/redux/customer/customerSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { customerFormSchema } from "@/validations/validation";
import { Dispatch, SetStateAction } from "react";

export default function Model({ view }: { view: Dispatch<SetStateAction<number>> }) {

  const dispatch = useDispatch();
  const customers = useSelector(customerDetails);

  const { register, formState: { errors }, handleSubmit } = useForm<customerAttribute>({
    resolver: yupResolver(customerFormSchema)
  });

  const handleCustomer = (formData: customerAttribute) => {

    let flag = 0;

    if (customers.customer.length !== 0) {
      customers.customer.map((ele) => {
        if (ele.customerName === formData.customerName || ele.customerEmail === formData.customerEmail) {
          flag = 1;
        }
      })
      if (flag === 0) {
        formData.id = customers.customer.length + 1;
        dispatch(addCustomer(formData));
        view(0);
      }
    } else {
      formData.id = customers.customer.length + 1;
      dispatch(addCustomer(formData));
      view(0);
    }
  }

  return (
    <div className="flex justify-center w-3/5">
      <form>
        <div className="w-[25%] absolute border-2 border-black bg-white z-10 mx-10 my-32 p-6">
          <button type="button" className="float-right mt-[-10px] mb-6" onClick={() => view(0)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
            </svg>
          </button>
          <input type="hidden" {...register('id')} defaultValue="0" />

          <div className="w-full flex justify-between my-2">
            <Label name="Customer Name" />
            <div>
              <input {...register('customerName')} placeholder="Enter Customer Name" className="border-2 border-black" />
              {errors.customerName && <p className="text-red-300">{errors.customerName.message}</p>}
            </div>
          </div>

          <div className="w-full flex justify-between my-2">
            <Label name="Customer Email" />
            <div>
              <input  {...register('customerEmail')} placeholder="Enter Customer Email" className="border-2 border-black" />
              {errors.customerEmail && <p className="text-red-300"> {errors.customerEmail.message}</p>}
            </div>
          </div>
          <div className="w-full flex justify-between my-2">
            <Label name="Customer Mobile No" />
            <div>
              <input {...register('customerMobileNo')} placeholder="Enter Customer Mobile No" className="border-2 border-black" />
              {errors.customerMobileNo && <p className="text-red-300"> {errors.customerMobileNo.message}</p>}
            </div>
          </div>
          <div className="w-full">
            <input type="button" className="border-2 px-2 py-1 border-black float-right" onClick={handleSubmit(handleCustomer)} value="submit" />
          </div>
        </div>
      </form>
    </div>
  )
}