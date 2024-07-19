import Label from "./common/label";
import Input from "./common/input";
import { UseFormRegister } from "react-hook-form";
import { formAttributes } from "@/types/types";
import { register } from "module";
import Select from "./common/select";

export default function Shutter({ register }: { register: UseFormRegister<formAttributes> }) {

  const options = [
    {
      key: 0,
      value: "Select Any Shutter"
    },
    {
      key: 1,
      value: "Panel Shutter"
    },
    {
      key: 2,
      value: "Board and batten shutters"
    }
  ]

  return (
    <>
      <h3 className="text-2xl my-6 text-center">Shutter Details</h3>

      <div className="flex justify-center my-3 w-3/7 ">
        <div className="w-1/4 flex items-center justify-between mx-10 ">
          <Label name="Shutter Name"></Label>
          <Select name="shutterName" options={options} register={register}>

          </Select>
          {/* <select>
            <option value="">Select Any Shutter</option>
            <option value="">Panel shutter</option>
            <option value="">Board and batten shutters</option>
          </select> */}
        </div>
        <div className="w-1/4 flex items-center justify-between">
          <Label name="width"></Label>
          <Input name="width" register={register} placeholder="Enter your width" />
        </div>
      </div>

      <div className="flex justify-center my-3 w-3/7">
        <div className="w-1/4 flex items-center justify-between mx-10">
          <Label name="height"></Label>
          <Input name="height" register={register} placeholder="Enter your height" />
        </div>
        <div className="w-1/4 flex items-center justify-between">
          <Label name="area"></Label>
          <input type="text" value="0" {...register('area')} readOnly className="my-3 opacity-80 border-2 border-black" />
        </div>
      </div>

      <div className="flex justify-center my-3 w-3/7">
        <div className="w-1/4 flex items-center justify-between mx-10">
        </div>
        <div className="w-1/4 flex items-center justify-between">
          <Label name="Total"></Label>
          <input type="total" value="0" {...register('total')} readOnly className="my-3 opacity-80 border-2 border-black" />
        </div>
      </div>

    </>
  )
}