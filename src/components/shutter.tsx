import Label from "./common/label";
import Input from "./common/input";
import { UseFormRegister } from "react-hook-form";
import { formAttributes } from "@/types/types";
import Select from "./common/select";
import { useEffect, useState } from "react";

export default function Shutter({ register }: { register: UseFormRegister<formAttributes> }) {

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [area, setArea] = useState<number>();

  useEffect(() => {
    setArea(width * height);
  })

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
          <Select name="shutterName" options={options} register={register} />
        </div>
        <div className="w-1/4 flex items-center justify-between">
          <Label name="width"></Label>
          <Input name="width" register={register} handleChange={(e) => setWidth(+e.target.value)} placeholder="Enter your width" />
        </div>
      </div>

      <div className="flex justify-center my-3 w-3/7">
        <div className="w-1/4 flex items-center justify-between mx-10">
          <Label name="height"></Label>
          <Input name="height" register={register} handleChange={(e) => setHeight(+e.target.value)} placeholder="Enter your height" />
        </div>
        <div className="w-1/4 flex items-center justify-between">
          <Label name="area"></Label>
          <input type="text" defaultValue={area} {...register('area')} readOnly className="my-3 opacity-80 border-2 border-black" />
        </div>
      </div>

      <div className="flex justify-center my-3 w-3/7">
        <div className="w-1/4 flex items-center justify-between mx-10">
        </div>
        <div className="w-1/4 flex items-center justify-between">
          <Label name="Total"></Label>
          <input type="total" {...register('total')} readOnly className="my-3 opacity-80 border-2 border-black" />
        </div>
      </div>

    </>
  )
}