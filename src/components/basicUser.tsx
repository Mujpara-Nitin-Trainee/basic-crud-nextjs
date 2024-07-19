import { formAttributes } from "@/types/types";
import Input from "./common/input";
import Label from "./common/label";
import { Control, UseFormRegister } from "react-hook-form";
import DateInput from "./common/dateInput";

export default function BasicUser({ register, control }: { register: UseFormRegister<formAttributes>, control: Control<formAttributes> }) {

  return (
    <>
      <h3 className="text-2xl my-6 text-center ">Person Details</h3>
      <div className="flex justify-center my-3 w-3/7 ">
        <div className="w-1/4 flex items-center justify-between mx-10 ">
          <Label name="Person Name"></Label>
          <Input name='personName' register={register} placeholder="Enter Person Name" />
        </div>
        <div className="w-1/4 flex items-center justify-between">
          <label htmlFor='search'>Select Customer</label>
          <div>
            <button type="button" className="px-1 border-2 mx-1 border-black">+ Add</button>
            <Input register={register} name='customer' placeholder="Search User" />
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
    </>
  )
}