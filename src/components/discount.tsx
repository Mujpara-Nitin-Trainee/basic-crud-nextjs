import { UseFormRegister } from "react-hook-form";
import Input from "./common/input";
import Label from "./common/label";
import Radio from "./common/radio";
import { formAttributes } from "@/types/types";

export default function Discount({ register }: { register: UseFormRegister<formAttributes> }) {
  return (
    <>
      <h3 className="text-2xl my-6 text-center">Discount Details</h3>

      <div className="flex justify-center my-3 w-4/7">
        <div className="w-1/4 flex items-center justify-between mx-10 ">
          <Label name="Type of Discount"></Label>
        </div>
      </div>
      <div className="flex justify-center my-3 w-4/7">
        <div className="w-1/4 flex items-center justify-start">
          <div>
            <Label name="Amount"></Label>
            <Radio name="discount" register={register} value="amount" />
          </div>
          <Input name='amount' register={register} placeholder="Enter your amount" />
        </div>
        <div className="w-1/4 flex items-center justify-between mx-10">
          <div>
            <Label name="percentage"></Label>
            <Radio name="discount" register={register} value="percentage" />
          </div>
          <Input name='percentage' register={register} placeholder="Enter your percentage" />
        </div>
      </div>
    </>
  )
}