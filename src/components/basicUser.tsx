import { formAttributes } from "@/types/types";
import Input from "./common/input";
import Label from "./common/label";
import { Control, UseFormRegister } from "react-hook-form";
import DateInput from "./common/dateInput";
import { useState } from "react";
import Model from "./model";
import { useSelector } from "react-redux";
import { customerDetails } from "@/redux/customer/customerSlice";
import Select from "./common/select";

export default function BasicUser({ register, control }: { register: UseFormRegister<formAttributes>, control: Control<formAttributes> }) {

  const customer = useSelector(customerDetails);

  const options: { key: number, value: string }[] = [];

  options.push({ key: 0, value: 'Select Any Customer' });

  customer.customer?.map((ele) => {
    options.push({ key: ele.id, value: ele.customerName })
  });


  const [model, setModel] = useState<number>(0);

  const handleModel = () => {
    if (model === 0) {
      setModel(1);
    } else {
      setModel(0);
    }
  }

  return (
    <>
      <h3 className="text-2xl my-6 text-center ">Person Details</h3>
      <div className="flex justify-center my-3 w-3/7 relative">
        <div className="w-1/4 flex items-center justify-between mx-10 ">
          <Label name="Person Name"></Label>
          <Input name='personName' register={register} placeholder="Enter Person Name" />
        </div>
        <div className="w-1/4 flex items-center justify-between">
          <label htmlFor='search'>Select Customer</label>
          <div>
            <button type="button" className="px-1 border-2 mx-1 border-black" onClick={handleModel}>+ Add</button>
            <Select name="customerName" options={options} register={register} />
            {/* <Input register={register} name='customerName' placeholder="Search User" /> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center my-3 w-3/7 ">
        <div className="w-1/4 flex items-center justify-between mx-10 ">
          <Label name="Date"></Label>
          <DateInput name="date" control={control} />
        </div>
        <div className="w-1/4 flex items-center justify-between">
        </div>
      </div>
      {(model === 1) ? <Model /> : <></>}
    </>
  )
}