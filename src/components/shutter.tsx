import Label from "./common/label";
import Input from "./common/input";
import { Control, FieldErrors, set, useFieldArray, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { formAttributes } from "@/types/types";
import Select from "./common/select";
import { useEffect, useState } from "react";

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

export default function Shutter({ register, control, watch, setValue, error }: { register: UseFormRegister<formAttributes>, control: Control<formAttributes>, watch: UseFormWatch<formAttributes>, setValue: UseFormSetValue<formAttributes>, error: FieldErrors<formAttributes> }) {

  const { fields, append, remove } = useFieldArray({ control, name: 'shutter' })

  const fieldValue = watch('shutter');

  const handleArea = (index: number) => {
    const width = fieldValue[index].width;
    const height = fieldValue[index].height;

    setValue(`shutter.${index}.area`, (width * height));
  }

  useEffect(() => {
    let total = 0;
    fieldValue.map((ele) => {
      total += ele.area;
    })
    setValue(`total`, total);
  })

  const handleIncrement = () => {
    append({ shutterName: 0, width: 0, height: 0, area: 0 });
  }


  return (
    <>
      <div className="flex justify-between items-center my-6 w-[78%]">
        <h3 className="text-2xl my-6 mx-10">Shutter Details</h3>
        <div>
          <button type="button" className="border-2 border-black px-2 mx-1 h-max" onClick={handleIncrement}>+</button>
          <button type="button" className="border-2 border-black px-2 mx-1 h-max">clone</button>
        </div>
      </div>

      {fields.map((ele, index) => {
        return <div key={index}>

          <div className="flex justify-center my-3 w-[95%] ">
            <div className="w-2/4 flex items-center justify-between mx-10 ">
              <Label name="Shutter Name"></Label>
              <Select name={`shutter.${index}.shutterName`} error={error} options={options} register={register} />
              {(error[`shutter` as keyof object] as { shutterName: { type: string, message: string } }) && <p> {(error[`shutter` as keyof object] as
                { shutterName?: { type: string, message: string }; }[])![index]?.shutterName?.message} </p>}
            </div>
            <div className="w-2/4 flex items-center justify-between">
              <Label name="width"></Label>
              <Input name={`shutter.${index}.width`} register={register} error={error} handleChange={() => handleArea(index)} placeholder="Enter your width" />
              {(error[`shutter` as keyof object] as { width: { type: string, message: string } }) && <p> {(error[`shutter` as keyof object] as
                { width?: { type: string, message: string }; }[])![index]?.width?.message} </p>}
            </div>
            {/* </div>

          <div className="flex justify-center my-3 w-3/7"> */}
            <div className="w-2/4 flex items-center justify-between mx-10">
              <Label name="height"></Label>
              <Input name={`shutter.${index}.height`} register={register} error={error} handleChange={() => handleArea(index)} placeholder="Enter your height" />
              {(error[`shutter` as keyof object] as { height: { type: string, message: string } }) && <p> {(error[`shutter` as keyof object] as
                { height?: { type: string, message: string }; }[])![index]?.height?.message} </p>}
            </div>
            <div className="w-2/4 flex items-center justify-between">
              <Label name="area"></Label>
              <input type="text" {...register(`shutter.${index}.area`)} readOnly className="my-3 opacity-80 border-2 border-black" />
            </div>
            <div className="w-2/4 flex items-center justify-between mx-10">
              <button type="button" className="flex float-right" onClick={() => remove(index)}>
                <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      })}

      <div className="flex justify-end w-[78%]">
        <div className="w-1/4 flex items-center justify-between">
          <Label name="Total"></Label>
          <input type="total" {...register('total')} readOnly className="my-3 opacity-80 border-2 border-black" />
        </div>
      </div>

    </>
  )
}